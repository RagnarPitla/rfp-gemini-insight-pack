interface GoogleDriveConfig {
  clientId: string;
  apiKey: string;
  folderId: string;
  discoveryDoc: string;
  scopes: string;
}

class GoogleDriveService {
  private config: GoogleDriveConfig;
  private isInitialized = false;
  private isSignedIn = false;

  constructor() {
    this.config = {
      clientId: '', // Will be set via environment or config
      apiKey: '', // Will be set via environment or config
      folderId: '18V1DV_UnH9F0VA3y_VK7dfJTHMNOU9IR',
      discoveryDoc: 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest',
      scopes: 'https://www.googleapis.com/auth/drive.file'
    };
  }

  async initialize(clientId: string, apiKey: string): Promise<void> {
    this.config.clientId = clientId;
    this.config.apiKey = apiKey;

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/api.js';
      script.onload = async () => {
        try {
          await new Promise<void>((resolveGapi) => {
            window.gapi.load('client:auth2', resolveGapi);
          });

          await window.gapi.client.init({
            apiKey: this.config.apiKey,
            clientId: this.config.clientId,
            discoveryDocs: [this.config.discoveryDoc],
            scope: this.config.scopes
          });

          this.isInitialized = true;
          this.isSignedIn = window.gapi.auth2.getAuthInstance().isSignedIn.get();
          resolve();
        } catch (error) {
          reject(error);
        }
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async signIn(): Promise<boolean> {
    if (!this.isInitialized) {
      throw new Error('Google Drive service not initialized');
    }

    try {
      const authInstance = window.gapi.auth2.getAuthInstance();
      
      if (!authInstance.isSignedIn.get()) {
        await authInstance.signIn();
      }
      
      this.isSignedIn = authInstance.isSignedIn.get();
      return this.isSignedIn;
    } catch (error) {
      console.error('Sign-in failed:', error);
      return false;
    }
  }

  async signOut(): Promise<void> {
    if (!this.isInitialized) return;

    const authInstance = window.gapi.auth2.getAuthInstance();
    if (authInstance.isSignedIn.get()) {
      await authInstance.signOut();
    }
    this.isSignedIn = false;
  }

  isUserSignedIn(): boolean {
    if (!this.isInitialized) return false;
    return window.gapi.auth2.getAuthInstance().isSignedIn.get();
  }

  getCurrentUser(): any {
    if (!this.isInitialized || !this.isSignedIn) return null;
    return window.gapi.auth2.getAuthInstance().currentUser.get();
  }

  async uploadFile(file: File, progressCallback?: (progress: number) => void): Promise<string> {
    if (!this.isInitialized || !this.isSignedIn) {
      throw new Error('Not authenticated with Google Drive');
    }

    const metadata = {
      name: file.name,
      parents: [this.config.folderId]
    };

    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', file);

    try {
      const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token}`
        },
        body: form
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      const result = await response.json();
      return result.id;
    } catch (error) {
      console.error('File upload failed:', error);
      throw error;
    }
  }

  async createFolder(name: string, parentFolderId?: string): Promise<string> {
    if (!this.isInitialized || !this.isSignedIn) {
      throw new Error('Not authenticated with Google Drive');
    }

    const metadata = {
      name,
      mimeType: 'application/vnd.google-apps.folder',
      parents: parentFolderId ? [parentFolderId] : [this.config.folderId]
    };

    try {
      const response = await window.gapi.client.drive.files.create({
        resource: metadata
      });

      return response.result.id;
    } catch (error) {
      console.error('Folder creation failed:', error);
      throw error;
    }
  }

  async saveTextFile(content: string, fileName: string): Promise<string> {
    if (!this.isInitialized || !this.isSignedIn) {
      throw new Error('Not authenticated with Google Drive');
    }

    const metadata = {
      name: fileName,
      parents: [this.config.folderId]
    };

    const form = new FormData();
    form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
    form.append('file', new Blob([content], { type: 'text/markdown' }));

    try {
      const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${window.gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token}`
        },
        body: form
      });

      if (!response.ok) {
        throw new Error(`Save failed: ${response.statusText}`);
      }

      const result = await response.json();
      return result.id;
    } catch (error) {
      console.error('Text file save failed:', error);
      throw error;
    }
  }
}

// Global instance
export const googleDriveService = new GoogleDriveService();

// Type declarations for gapi
declare global {
  interface Window {
    gapi: any;
  }
}