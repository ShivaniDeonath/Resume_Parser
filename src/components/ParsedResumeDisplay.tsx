import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Award,
  Languages,
  Download,
  Share
} from 'lucide-react';
import { ParsedResume } from './ResumeParser';

interface ParsedResumeDisplayProps {
  resume: ParsedResume;
}

export const ParsedResumeDisplay = ({ resume }: ParsedResumeDisplayProps) => {
  const { personalInfo, summary, experience, education, skills, languages, certifications } = resume;

  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="flex gap-3 justify-end">
        <Button variant="outline" size="sm">
          <Share className="h-4 w-4 mr-2" />
          Share
        </Button>
        <Button variant="gradient" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      {/* Personal Information */}
      <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5 text-primary" />
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-foreground">{personalInfo.name}</h3>
              
              {personalInfo.email && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{personalInfo.email}</span>
                </div>
              )}
              
              {personalInfo.phone && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{personalInfo.phone}</span>
                </div>
              )}
              
              {personalInfo.address && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{personalInfo.address}</span>
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              {personalInfo.linkedin && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Linkedin className="h-4 w-4" />
                  <span className="text-primary hover:underline cursor-pointer">
                    LinkedIn Profile
                  </span>
                </div>
              )}
              
              {personalInfo.website && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  <span className="text-primary hover:underline cursor-pointer">
                    Portfolio Website
                  </span>
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Summary */}
      {summary && (
        <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">{summary}</p>
          </CardContent>
        </Card>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Work Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index}>
                  {index > 0 && <Separator className="mb-6" />}
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-lg text-foreground">
                          {exp.position}
                        </h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <Badge variant="secondary">{exp.duration}</Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Education */}
      {education.length > 0 && (
        <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                    <p className="text-primary">{edu.institution}</p>
                    {edu.gpa && (
                      <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                    )}
                  </div>
                  <Badge variant="outline">{edu.year}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
          <CardHeader>
            <CardTitle>Skills & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Additional Sections */}
      <div className="grid md:grid-cols-2 gap-6">
        {languages && languages.length > 0 && (
          <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Languages className="h-5 w-5 text-primary" />
                Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang, index) => (
                  <Badge key={index} variant="outline">
                    {lang}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {certifications && certifications.length > 0 && (
          <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <p key={index} className="text-sm text-foreground">
                    {cert}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};