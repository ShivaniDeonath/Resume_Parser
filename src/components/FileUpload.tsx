import { useState, useCallback } from 'react';
import { Upload, File, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  acceptedTypes?: string;
  maxSize?: number;
}

export const FileUpload = ({ 
  onFileSelect, 
  acceptedTypes = ".pdf,.doc,.docx,.txt",
  maxSize = 10 * 1024 * 1024 // 10MB
}: FileUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFile(files[0]);
    }
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFile(files[0]);
    }
  }, []);

  const handleFile = (file: File) => {
    if (file.size > maxSize) {
      alert(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
      return;
    }
    
    setSelectedFile(file);
    onFileSelect(file);
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <Card className="p-8 border-2 border-dashed border-border hover:border-primary transition-colors duration-300">
      {selectedFile ? (
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <File className="h-8 w-8 text-primary" />
            <div className="text-left">
              <p className="font-medium text-foreground">{selectedFile.name}</p>
              <p className="text-sm text-muted-foreground">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={removeFile}
              className="ml-auto"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ) : (
        <div
          className={`text-center transition-all duration-300 ${
            isDragging ? 'scale-105 bg-primary/5' : ''
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="mb-4">
            <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Upload Resume
            </h3>
            <p className="text-muted-foreground mb-6">
              Drag and drop your resume file here, or click to browse
            </p>
          </div>
          
          <input
            type="file"
            accept={acceptedTypes}
            onChange={handleFileInput}
            className="hidden"
            id="file-upload"
          />
          
          <Button asChild variant="gradient">
            <label htmlFor="file-upload" className="cursor-pointer">
              Choose File
            </label>
          </Button>
          
          <p className="text-xs text-muted-foreground mt-4">
            Supports PDF, DOC, DOCX, TXT files up to {maxSize / (1024 * 1024)}MB
          </p>
        </div>
      )}
    </Card>
  );
};