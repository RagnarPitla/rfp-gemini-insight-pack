import React, { useCallback, useState } from 'react';
import { Upload, File, X, CheckCircle, Cloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  selectedFile: File | null;
  onRemoveFile: () => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  selectedFile,
  onRemoveFile,
}) => {
  const { toast } = useToast();
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    async (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      
      const files = Array.from(e.dataTransfer.files);
      const file = files[0];
      
      if (file && isValidFileType(file)) {
        handleFileUpload(file);
      }
    },
    []
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file && isValidFileType(file)) {
        handleFileUpload(file);
      }
      e.target.value = '';
    },
    []
  );

  const handleFileUpload = async (file: File) => {
    onFileSelect(file);
    
    // Call webhook
    try {
      const response = await fetch('https://zhxcwxnlvsdqwjuqekpn.supabase.co/functions/v1/file-upload-webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fileName: file.name,
          fileSize: file.size,
          fileType: file.type,
          timestamp: new Date().toISOString()
        })
      });
      
      if (response.ok) {
        console.log('Webhook called successfully');
      }
    } catch (error) {
      console.error('Webhook call failed:', error);
    }
    
    toast({
      title: "File selected",
      description: `${file.name} is ready for analysis`,
    });
  };

  const isValidFileType = (file: File) => {
    const validTypes = [
      'application/pdf',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/vnd.ms-powerpoint'
    ];
    return validTypes.includes(file.type);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  if (selectedFile) {
    return (
      <Card className="p-6 border-2 border-accent bg-accent/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CheckCircle className="h-8 w-8 text-primary" />
            <div>
              <p className="font-medium text-foreground">{selectedFile.name}</p>
              <p className="text-sm text-muted-foreground">
                {formatFileSize(selectedFile.size)}
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onRemoveFile}
            className="text-muted-foreground hover:text-destructive"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={`border-2 border-dashed transition-all duration-300 ${
        isDragOver
          ? 'border-primary bg-primary/5 shadow-lg'
          : 'border-border hover:border-primary/50 hover:bg-accent/30'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="p-8 text-center">
        <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Upload RFP Document
        </h3>
        <p className="text-muted-foreground mb-4">
          Drag and drop your RFP file here, or click to browse
        </p>
        <p className="text-sm text-muted-foreground mb-6">
          Supports PDF, Excel (.xlsx), and PowerPoint (.pptx) files
        </p>
        
        <input
          type="file"
          id="file-upload"
          className="hidden"
          accept=".pdf,.xlsx,.xls,.pptx,.ppt"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload">
          <Button 
            variant="premium" 
            size="lg" 
            className="cursor-pointer" 
            asChild
          >
            <span>
              <File className="mr-2 h-4 w-4" />
              Upload your RFP
            </span>
          </Button>
        </label>
      </div>
    </Card>
  );
};