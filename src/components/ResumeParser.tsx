import { useState } from 'react';
import { FileUpload } from './FileUpload';
import { ParsedResumeDisplay } from './ParsedResumeDisplay';
import { parseResumeFile } from '@/lib/resumeParser';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Brain, Zap } from 'lucide-react';

export interface ParsedResume {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    linkedin?: string;
    website?: string;
  };
  summary: string;
  experience: Array<{
    company: string;
    position: string;
    duration: string;
    description: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    year: string;
    gpa?: string;
  }>;
  skills: string[];
  languages?: string[];
  certifications?: string[];
}

export const ResumeParser = () => {
  const [parsedResume, setParsedResume] = useState<ParsedResume | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileSelect = async (file: File) => {
    setIsProcessing(true);
    try {
      const result = await parseResumeFile(file);
      setParsedResume(result);
    } catch (error) {
      console.error('Error parsing resume:', error);
      alert('Error parsing resume. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              AI-Powered Resume Parser
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Extract and analyze resume data instantly with advanced AI technology. 
              Transform unstructured documents into organized, actionable insights.
            </p>
            
            <div className="flex justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                <span>Multiple Formats</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                <span>AI Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span>Instant Results</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {!parsedResume && !isProcessing && (
            <div className="mb-8">
              <FileUpload onFileSelect={handleFileSelect} />
            </div>
          )}

          {isProcessing && (
            <Card className="p-8 text-center mb-8 bg-gradient-card">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Processing Resume...
              </h3>
              <p className="text-muted-foreground">
                Our AI is analyzing and extracting information from your resume.
              </p>
            </Card>
          )}

          {parsedResume && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-foreground">
                  Resume Analysis Complete
                </h2>
                <Badge variant="secondary" className="bg-success text-success-foreground">
                  ✓ Parsed Successfully
                </Badge>
              </div>
              <ParsedResumeDisplay resume={parsedResume} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};