export interface NavLink {
  label: string;
  fragment: string;
  icon: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  icon: string;
  highlights: string[];
}

export interface ProjectItem {
  title: string;
  summary: string;
  tags: string[];
  icon: string;
  points: string[];
}

export interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  code: string;
  date: string;
  status: 'Certified' | 'In Progress';
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  detail: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  period: string;
  description: string;
  image?: string;
}

export const PROFILE = {
  name: 'Kavinesh Kumar',
  fullLegalName: 'Kavinesh Kumar Subramaniyan',
  title: 'Software Developer · AI Engineering',
  tagline:
    'I build secure, high-performance enterprise systems — and I\'m now channeling that same rigor into Generative AI and agentic applications.',
  location: 'Chennai, India',
  email: 'kavikavinesh131@gmail.com',
  phone: '+91 7502007455',
  linkedin: 'https://linkedin.com/in/kavinesh-kumar-s-0a8351159',
  linkedinLabel: 'linkedin.com/in/kavinesh-kumar-s-0a8351159',
  yearsExperience: 4,
  about: [
    "I'm a Software Developer currently at Boeing, Chennai, working on aerospace component-management systems — before that I spent over three years at Accenture shipping enterprise-grade .NET and Angular applications for global clients.",
    "My core strength is building N-Tier and microservice systems end-to-end: ASP.NET Core APIs, Angular front-ends, SQL Server data layers, and OWASP-hardened security, deployed on Azure and Cloud Foundry with proper CI/CD.",
    "Over the last year I've been deliberately moving deeper into AI engineering — integrating LLMs from Azure AI Foundry and the Claude API into production workflows, and exploring RAG and agentic architectures."
  ],
  stats: [
    { value: '4+', label: 'Years of experience' },
    { value: '2', label: 'Companies · Boeing & Accenture' },
    { value: '95', label: 'Microsoft Learn modules completed' },
    { value: '2', label: 'Microsoft certifications' }
  ]
};

export const NAV_LINKS: NavLink[] = [
  { label: 'About', fragment: 'about', icon: 'pi pi-user' },
  { label: 'Experience', fragment: 'experience', icon: 'pi pi-briefcase' },
  { label: 'Projects', fragment: 'projects', icon: 'pi pi-code' },
  { label: 'Skills', fragment: 'skills', icon: 'pi pi-bolt' },
  { label: 'Certifications', fragment: 'certifications', icon: 'pi pi-verified' },
  { label: 'Achievements', fragment: 'achievements', icon: 'pi pi-star' },
  { label: 'Contact', fragment: 'contact', icon: 'pi pi-send' }
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Software Developer I',
    company: 'Boeing',
    location: 'Chennai, India',
    period: 'Mar 2026 — Present',
    type: 'Aerospace & Defence',
    icon: 'pi pi-send',
    highlights: [
      'Engineer and maintain an aircraft component management platform built with Angular and .NET in an N-Tier architecture, deployed to Cloud Foundry.',
      'Architected modular features with Repository, Dependency Injection and component-driven design patterns to track service schedules and maintenance requirements.',
      'Achieved 100% component traceability for servicing and repairs by managing version control and CI/CD pipelines through GitLab.',
      'Implemented secure audit logging for service history and part-modification logs, adhering strictly to OWASP Top 10 across data and API layers.',
      'Streamlined component-tracking workflows, improving system performance, code maintainability and operational efficiency across the application tier.'
    ]
  },
  {
    role: 'Custom Software Developer Analyst',
    company: 'Accenture Pvt Ltd',
    location: 'Chennai, India',
    period: 'Sept 2024 — Mar 2026',
    type: 'Business',
    icon: 'pi pi-building',
    highlights: [
      'Integrated Large Language Models from Azure AI Foundry into enterprise applications, implementing end-to-end deployment pipelines for AI-powered solutions.',
      'Resolved high-impact security vulnerabilities identified via SAST, DAST and DIYA assessments, aligning with OWASP Top 10.',
      'Built file upload features on Azure Blob Storage and automated Microsoft Teams provisioning through the Microsoft Graph API.',
      'Triggered build and release pipelines in Azure DevOps to automate deployments across multiple environments.',
      'Used Application Insights to monitor and log Angular front-end API calls, tracking performance, errors and usage.',
      'Secured secrets with Azure Key Vault and built RESTful APIs in Angular using HttpClient and RxJS Observables for forms, retrieval and uploads.'
    ]
  },
  {
    role: 'Custom Software Developer Associate',
    company: 'Accenture Pvt Ltd',
    location: 'Chennai, India',
    period: 'Nov 2022 — Sept 2024',
    type: 'Business',
    icon: 'pi pi-building',
    highlights: [
      'Implemented full CRUD operations using ASP.NET Core with ADO.NET for efficient backend database connectivity.',
      'Developed and secured .NET applications with RESTful APIs, enforcing security best practices across the stack.',
      'Built Excel file-upload functionality enabling efficient bulk data injection and processing.',
      'Used Entity Framework and LINQ for efficient data manipulation and querying.'
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    title: 'Generative AI Platform on Azure',
    summary:
      'A Generative AI development project leveraging Azure AI capabilities on a .NET backend, wiring LLM-powered features into real enterprise workflows.',
    tags: ['.NET', 'Azure AI Foundry', 'Generative AI', 'LLM'],
    icon: 'pi pi-sparkles',
    points: [
      'Integrated Azure AI Foundry LLMs into a .NET service layer with end-to-end deployment pipelines.',
      'Designed prompt and response-handling patterns for reliable, production-grade AI features.'
    ]
  },
  {
    title: 'Python API with Claude AI Integration',
    summary:
      'RESTful APIs built with FastAPI and Microsoft SQL Server, augmented with the Claude AI API to deliver intelligent, generative responses.',
    tags: ['Python', 'FastAPI', 'MS SQL Server', 'Claude API'],
    icon: 'pi pi-bolt',
    points: [
      'Built RESTful APIs in FastAPI backed by stored procedures on SQL Server for efficient data access.',
      'Implemented Generative AI functionality by integrating Claude AI API endpoints for intelligent, AI-powered responses.'
    ]
  },
  {
    title: 'Aircraft Component Management Platform',
    summary:
      'An N-Tier Angular + .NET platform at Boeing for tracking aircraft component servicing, maintenance and full traceability.',
    tags: ['Angular', '.NET', 'Cloud Foundry', 'N-Tier'],
    icon: 'pi pi-send',
    points: [
      'Modular, pattern-driven architecture (Repository, DI, component-driven design) across separated layers.',
      '100% component traceability via disciplined GitLab version control and CI/CD.'
    ]
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Languages',
    icon: 'pi pi-code',
    skills: ['C#', 'Python', 'TypeScript', 'Angular', 'SQL', 'HTML5', 'CSS3']
  },
  {
    title: 'Backend & APIs',
    icon: 'pi pi-server',
    skills: ['ASP.NET Core', 'ADO.NET', 'Entity Framework', 'LINQ', 'FastAPI', 'REST APIs']
  },
  {
    title: 'Cloud & DevOps',
    icon: 'pi pi-cloud',
    skills: ['Azure App Service', 'Azure Functions', 'Azure Blob Storage', 'Azure Key Vault', 'Azure DevOps', 'Application Insights', 'Cloud Foundry', 'CI/CD · GitLab']
  },
  {
    title: 'AI & Intelligent Systems',
    icon: 'pi pi-sparkles',
    skills: ['Generative AI', 'Agentic AI', 'LLMs', 'RAG', 'SLM', 'Azure AI Foundry', 'Claude AI APIs', 'GitHub Copilot']
  },
  {
    title: 'Security & Quality',
    icon: 'pi pi-shield',
    skills: ['OWASP Top 10', 'SAST / DAST', 'Burp Suite', 'Secure Audit Logging']
  },
  {
    title: 'Architecture & Tools',
    icon: 'pi pi-sitemap',
    skills: ['N-Tier Architecture', 'Microservices', 'Repository Pattern', 'Dependency Injection', 'Git', 'Postman', 'Visual Studio / VS Code']
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Microsoft Certified: Azure Fundamentals',
    issuer: 'Microsoft',
    code: 'AZ-900',
    date: 'Earned 2 Jun 2023',
    status: 'Certified'
  },
  {
    title: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
    issuer: 'Microsoft',
    code: 'SC-900',
    date: 'Earned 8 May 2024',
    status: 'Certified'
  },
  {
    title: 'Azure Developer Associate',
    issuer: 'Microsoft',
    code: 'AZ-204',
    date: 'Coursework complete — exam pending',
    status: 'In Progress'
  },
  {
    title: 'Azure AI Engineer Associate',
    issuer: 'Microsoft',
    code: 'AI-102',
    date: 'Coursework complete — exam pending',
    status: 'In Progress'
  }
];

export const CERT_STATS = [
  { value: '95', label: 'Modules completed' },
  { value: '18', label: 'Learning paths completed' },
  { value: '75h 18m', label: 'Training hours logged' },
  { value: '2', label: 'Exams passed' }
];

export const EDUCATION: EducationItem[] = [
  {
    school: 'Kongu Engineering College',
    degree: "Bachelor's in Electronics & Communication Engineering",
    period: 'May 2022',
    detail: '8.2 CGPA'
  },
  {
    school: 'Nachimuthu Polytechnic College',
    degree: 'Diploma in Electronics & Communication Engineering',
    period: 'May 2018',
    detail: '82%'
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    title: 'Inspiring Innovator Award',
    issuer: 'Accenture — Accenture Celebrates Excellence',
    period: "FY'25 · Q2",
    description:
      'Won the Inspiring Innovator Award in the Individual category, recognizing exemplary innovation and extraordinary impact on Accenture, its clients and communities.',
    image: 'assets/images/accenture-award.jpg'
  },
  {
    title: 'Best Individual Performance',
    issuer: 'Accenture Celebrates Excellence',
    period: "FY'25 · Q2",
    description:
      'Recognized for the best individual performance across the team for the quarter.'
  }
];

export const DOWNLOADS = {
  resume: {
    label: 'Download Resume',
    href: 'assets/files/Kavinesh_Kumar_Resume.pdf',
    filename: 'Kavinesh_Kumar_Resume.pdf'
  },
  msCert: {
    label: 'Microsoft Certifications Transcript',
    href: 'assets/files/Kavinesh_Kumar_Microsoft_Certifications.pdf',
    filename: 'Kavinesh_Kumar_Microsoft_Certifications.pdf'
  }
};
