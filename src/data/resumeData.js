// All content below is sourced directly from Rushikesh Debadwar's resume.
// Edit this file to update content across the entire site.

export const profile = {
  name: 'Rushikesh Debadwar',
  role: 'AWS Cloud Engineer | DevOps Engineer',
  tagline:
    'Architecting and deploying scalable, high-availability cloud infrastructure on AWS.',
  summary:
    "AWS Cloud Engineer and MCA graduate with hands-on experience architecting and deploying scalable, high-availability cloud infrastructure on AWS. Proficient in EC2, VPC, IAM, RDS, ALB, Auto Scaling, CloudWatch, and S3. Skilled in Linux administration, cloud networking, CI/CD pipelines, and DevOps fundamentals. Seeking an entry-level AWS Cloud or DevOps role.",
  email: 'rushidebadwar@gmail.com',
  phone: '+91 9420872550',
  linkedin: 'linkedin.com/in/rushikesh-d10',
  linkedinUrl: 'https://linkedin.com/in/rushikesh-d10',
  github: 'github.com/Rushikesh-1010',
  githubUrl: 'https://github.com/Rushikesh-1010',
  resumeFile: '/Rushikesh_Debadwar_Resume.pdf',
  location: 'Pune, Maharashtra, India',
};

export const aboutHighlights = [
  {
    label: 'AWS Cloud',
    detail: 'EC2, VPC, IAM, RDS, ALB, Auto Scaling, CloudWatch, S3',
  },
  {
    label: 'Infrastructure',
    detail: 'Terraform, Ansible, CloudFormation, AWS CLI',
  },
  {
    label: 'CI/CD',
    detail: 'Jenkins, GitHub Actions, Docker, Kubernetes',
  },
  {
    label: 'Cloud Deployment',
    detail: 'Linux administration & production-grade rollouts',
  },
];

export const skillGroups = [
  {
    title: 'AWS Cloud',
    icon: 'Cloud',
    skills: ['EC2', 'S3', 'VPC', 'IAM', 'RDS', 'ALB', 'Auto Scaling', 'CloudWatch', 'Route 53', 'ECS', 'EKS'],
  },
  {
    title: 'DevOps & CI/CD',
    icon: 'GitBranch',
    skills: ['Git', 'GitHub', 'Jenkins', 'GitHub Actions', 'CI/CD Pipelines', 'Docker', 'Kubernetes', 'Jira'],
  },
  {
    title: 'Infrastructure & Automation',
    icon: 'Server',
    skills: ['Terraform', 'Ansible', 'AWS CloudFormation', 'AWS CLI'],
  },
  {
    title: 'Monitoring',
    icon: 'Activity',
    skills: ['Prometheus', 'Grafana', 'CloudWatch'],
  },
  {
    title: 'Operating Systems & Scripting',
    icon: 'Terminal',
    skills: ['Linux (Ubuntu)', 'Amazon Linux', 'Shell Scripting'],
  },
  {
    title: 'Networking',
    icon: 'Network',
    skills: ['TCP/IP', 'DNS', 'HTTP/HTTPS', 'Subnets', 'Security Groups', 'Load Balancing'],
  },
  {
    title: 'Database & Web (Basics)',
    icon: 'Database',
    skills: ['MySQL', 'HTML', 'CSS'],
  },
];

export const projects = [
  {
    id: 'three-tier-architecture',
    title: 'AWS 3-Tier Architecture with Auto Scaling',
    type: 'Individual Project',
    description:
      'Designed and deployed a fault-tolerant, highly available 3-tier web application on AWS, spanning two Availability Zones for resilience.',
    points: [
      'Architected a custom VPC with public/private subnets, an Internet Gateway, and a NAT Gateway to enforce secure traffic isolation.',
      'Configured an Application Load Balancer to distribute traffic across EC2 instances, improving load distribution and uptime.',
      'Implemented an Auto Scaling Group with launch templates for elastic scaling under variable load.',
      'Provisioned Amazon RDS (MySQL) in a private subnet for managed, secure database operations.',
      'Applied least-privilege IAM roles and Security Groups to enforce zero-trust access control.',
      'Deployed CloudWatch alarms and dashboards to monitor CPU, latency, and request count in real time.',
    ],
    stack: ['EC2', 'ALB', 'Auto Scaling', 'RDS', 'VPC', 'IAM', 'CloudWatch'],
    icon: 'Network',
  },
  {
    id: 'ai-book-recommender',
    title: 'AI Book Recommender Website',
    type: 'Academic Group Project',
    description:
      'Built a PHP and MySQL-based book recommendation platform, hosted on AWS EC2 with a normalized relational schema.',
    points: [
      'Designed a normalized relational database schema to handle users, books, and recommendation data.',
      'Deployed the application on EC2 with Apache, enabling scalable and reliable web hosting.',
      'Integrated Amazon RDS (MySQL) for managed, cloud-native database storage and backup.',
      'Enforced access control using Security Groups and EC2 key pairs for production-level security.',
    ],
    stack: ['HTML', 'CSS', 'PHP', 'MySQL', 'AWS EC2', 'RDS'],
    icon: 'BookOpen',
  },
];

export const experience = [
  {
    role: 'Trainee AWS Cloud Engineer',
    company: 'Cravita Technologies India Pvt Ltd, Pune',
    period: 'December 2025 – Present',
    points: [
      'Provisioning and managing AWS resources — EC2, S3, VPCs, IAM roles, and RDS — for live projects.',
      'Assisting in CI/CD pipeline setup and cloud-based application deployment on Linux servers.',
      'Monitoring cloud infrastructure health using CloudWatch alarms, logs, and performance metrics.',
    ],
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications',
    score: 'CGPA: 8.5 / 10',
    institution: 'G.H. Raisoni College of Engineering and Management, Pune',
    period: 'September 2024 – May 2026',
  },
  {
    degree: 'Bachelor of Computer Applications',
    score: 'CGPA: 8.9 / 10',
    institution: "RES's College Of Computer Science And Information Technology, Latur",
    period: 'September 2021 – June 2024',
  },
  {
    degree: 'HSC',
    score: 'Percentage: 94.5%',
    institution: 'Dayanand Science College, Latur',
    period: 'March 2020 – May 2021',
  },
];

export const certifications = [
  {
    title: 'Career Essentials in Generative AI',
    issuer: 'Microsoft and LinkedIn Learning',
  },
  {
    title: 'The Joy of Computing using Python',
    issuer: 'National Programme on Technology Enhanced Learning (NPTEL)',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
