import { ParsedResume } from '@/components/ResumeParser';

// Mock parser for demonstration - in a real app you'd use a proper parsing library
export const parseResumeFile = async (file: File): Promise<ParsedResume> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock parsed data
      const mockData: ParsedResume = {
        personalInfo: {
          name: "John Doe",
          email: "john.doe@email.com",
          phone: "+1 (555) 123-4567",
          address: "San Francisco, CA",
          linkedin: "linkedin.com/in/johndoe",
          website: "johndoe.dev"
        },
        summary: "Experienced Software Engineer with 5+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Proven track record of delivering scalable solutions and leading cross-functional teams.",
        experience: [
          {
            company: "Tech Corp Inc.",
            position: "Senior Software Engineer",
            duration: "2021 - Present",
            description: "Led development of microservices architecture serving 1M+ users. Improved system performance by 40% and reduced deployment time by 60%. Mentored junior developers and established coding standards."
          },
          {
            company: "StartupXYZ",
            position: "Full Stack Developer",
            duration: "2019 - 2021",
            description: "Built and maintained web applications using React, Node.js, and PostgreSQL. Implemented CI/CD pipelines and automated testing frameworks. Collaborated with product teams to deliver features on tight deadlines."
          },
          {
            company: "Digital Agency",
            position: "Junior Developer",
            duration: "2018 - 2019",
            description: "Developed responsive websites and web applications for various clients. Worked with HTML, CSS, JavaScript, and WordPress. Gained experience in client communication and project management."
          }
        ],
        education: [
          {
            institution: "University of California, Berkeley",
            degree: "Bachelor of Science in Computer Science",
            year: "2018",
            gpa: "3.8"
          }
        ],
        skills: [
          "JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL", 
          "MongoDB", "AWS", "Docker", "Kubernetes", "Git", "GraphQL", "REST APIs",
          "Microservices", "CI/CD", "Test-Driven Development"
        ],
        languages: ["English (Native)", "Spanish (Conversational)", "French (Basic)"],
        certifications: [
          "AWS Certified Solutions Architect - Associate",
          "Google Cloud Professional Developer",
          "Certified Kubernetes Administrator (CKA)"
        ]
      };

      resolve(mockData);
    }, 2000); // Simulate processing time
  });
};

// Function to extract text from PDF (placeholder for future implementation)
export const extractTextFromPDF = async (file: File): Promise<string> => {
  // In a real implementation, you would use a library like pdfjs-dist
  // For now, return empty string
  return "";
};

// Function to extract text from DOC/DOCX (placeholder for future implementation)
export const extractTextFromDoc = async (file: File): Promise<string> => {
  // In a real implementation, you would use a library like mammoth.js
  // For now, return empty string
  return "";
};