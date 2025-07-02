import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { googleDriveService } from '@/services/googleDriveService';
import { useToast } from '@/hooks/use-toast';
import { LogIn, LogOut, Settings, CheckCircle } from 'lucide-react';

interface GoogleAuthButtonProps {
  onAuthChange: (isAuthenticated: boolean) => void;
}

export const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ onAuthChange }) => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [showConfig, setShowConfig] = useState(false);
  const [clientId, setClientId] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    // Check if user has saved credentials in localStorage
    const savedClientId = localStorage.getItem('google_client_id');
    const savedApiKey = localStorage.getItem('google_api_key');
    
    if (savedClientId && savedApiKey) {
      setClientId(savedClientId);
      setApiKey(savedApiKey);
      initializeGoogleDrive(savedClientId, savedApiKey);
    } else {
      setShowConfig(true);
    }
  }, []);

  const initializeGoogleDrive = async (clientId: string, apiKey: string) => {
    try {
      await googleDriveService.initialize(clientId, apiKey);
      setIsInitialized(true);
      
      const isSignedIn = googleDriveService.isUserSignedIn();
      setIsAuthenticated(isSignedIn);
      
      if (isSignedIn) {
        setCurrentUser(googleDriveService.getCurrentUser());
      }
      
      onAuthChange(isSignedIn);
    } catch (error) {
      console.error('Google Drive initialization failed:', error);
      setIsInitialized(false);
      setShowConfig(true);
      
      // Better error message based on the error type
      let errorMessage = "Please check your Google API credentials";
      if (error && typeof error === 'object' && 'error' in error) {
        if (error.error === 'idpiframe_initialization_failed') {
          errorMessage = `Please add this domain to your OAuth2 authorized origins: ${window.location.origin}`;
        }
      }
      
      toast({
        title: "Initialization failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const handleSaveConfig = () => {
    if (!clientId || !apiKey) {
      toast({
        title: "Missing credentials",
        description: "Please enter both Client ID and API Key",
        variant: "destructive",
      });
      return;
    }

    localStorage.setItem('google_client_id', clientId);
    localStorage.setItem('google_api_key', apiKey);
    setShowConfig(false);
    initializeGoogleDrive(clientId, apiKey);
  };

  const handleSignIn = async () => {
    try {
      const success = await googleDriveService.signIn();
      setIsAuthenticated(success);
      
      if (success) {
        setCurrentUser(googleDriveService.getCurrentUser());
        toast({
          title: "Signed in successfully",
          description: "You can now upload files to Google Drive",
        });
      }
      
      onAuthChange(success);
    } catch (error) {
      toast({
        title: "Sign-in failed",
        description: "Please try again or check your credentials",
        variant: "destructive",
      });
    }
  };

  const handleSignOut = async () => {
    try {
      await googleDriveService.signOut();
      setIsAuthenticated(false);
      setCurrentUser(null);
      onAuthChange(false);
      
      toast({
        title: "Signed out successfully",
        description: "You've been logged out of Google Drive",
      });
    } catch (error) {
      toast({
        title: "Sign-out failed",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  if (showConfig) {
    return (
      <Card className="p-6 bg-primary/5 border-primary/20">
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Settings className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">
              Google Drive Configuration
            </h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="clientId">Google OAuth Client ID</Label>
              <Input
                id="clientId"
                value={clientId}
                onChange={(e) => setClientId(e.target.value)}
                placeholder="123456789-abcdefg.apps.googleusercontent.com"
                className="mt-1"
              />
            </div>
            
            <div>
              <Label htmlFor="apiKey">Google API Key</Label>
              <Input
                id="apiKey"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="AIzaSyA..."
                className="mt-1"
              />
            </div>
            
            <div className="text-xs text-muted-foreground bg-muted/30 p-3 rounded">
              <p className="font-medium mb-2">Setup Instructions:</p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Go to Google Cloud Console → APIs & Services → Credentials</li>
                <li>Create OAuth 2.0 Client ID (Web application)</li>
                <li>Add your domain to authorized origins</li>
                <li>Create API Key and enable Google Drive API</li>
                <li>Copy both values above</li>
              </ol>
            </div>
            
            <Button onClick={handleSaveConfig} variant="premium" className="w-full">
              Save Configuration
            </Button>
          </div>
        </div>
      </Card>
    );
  }

  if (!isInitialized) {
    return (
      <Card className="p-4">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin h-6 w-6 border-2 border-primary border-t-transparent rounded-full mx-auto mb-2"></div>
            <p className="text-sm text-muted-foreground">Initializing Google Drive...</p>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-4">
      {isAuthenticated ? (
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
            <div>
              <p className="font-medium text-foreground">
                Connected to Google Drive
              </p>
              {currentUser && (
                <p className="text-sm text-muted-foreground">
                  {currentUser.getBasicProfile().getEmail()}
                </p>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowConfig(true)}
            >
              <Settings className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-foreground mb-1">
              Connect Google Drive
            </p>
            <p className="text-sm text-muted-foreground">
              Sign in to upload files directly to your folder
            </p>
          </div>
          <Button variant="premium" onClick={handleSignIn}>
            <LogIn className="h-4 w-4 mr-2" />
            Sign In
          </Button>
        </div>
      )}
    </Card>
  );
};