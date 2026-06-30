export interface Course {
  code: string;
  title: string;
  credits: number;
  grade: string;
  gp: number;
}

export interface Degree {
  name: string;
  major?: string;
  institution: string;
  duration: string;
  cgpa: string;
  highlights: string[];
  courses: Course[];
}

export const ACADEMIC_DATA: Degree[] = [
  {
    name: "Master of Science in Software Engineering",
    major: "Data Science",
    institution: "Daffodil International University",
    duration: "Fall 2024 – Nov 2025",
    cgpa: "3.39 / 4.00",
    highlights: [
      "Secured perfect A+ (4.00 GP) in Applied Machine Learning (SWE 687)",
      "Secured perfect A+ (4.00 GP) in the 18-credit Graduate Data Science Thesis (SWE 699)",
      "Focused on high-performance model architectures and automated hyperparameter optimization pipelines"
    ],
    courses: [
      { code: "SWE 685", title: "Fundamentals for Data Science", credits: 3, grade: "B-", gp: 2.75 },
      { code: "SWE 688", title: "Data Visualization & Communication", credits: 3, grade: "C+", gp: 2.50 },
      { code: "SWE 687", title: "Applied Machine Learning", credits: 3, grade: "A+", gp: 4.00 },
      { code: "SWE 575", title: "SE I: Requirements & Modeling", credits: 3, grade: "B+", gp: 3.25 },
      { code: "SWE 587", title: "SE II: Software Design", credits: 3, grade: "B-", gp: 2.75 },
      { code: "SWE 686", title: "Research Design & App for Data Analysis", credits: 3, grade: "B", gp: 3.00 },
      { code: "SWE 578", title: "Software Project Management", credits: 3, grade: "C+", gp: 2.50 },
      { code: "SWE 636", title: "Business Analysis", credits: 3, grade: "B-", gp: 2.75 },
      { code: "SWE 699", title: "Graduate Thesis (Data Science)", credits: 18, grade: "A+", gp: 4.00 }
    ]
  },
  {
    name: "Bachelor of Science in Software Engineering",
    institution: "Daffodil International University",
    duration: "Spring 2016 – Feb 2024",
    cgpa: "2.55 / 4.00",
    highlights: [
      "Completed 145 credits with comprehensive exposure to structural algorithm engineering",
      "Secured A- in Software Quality Assurance & Testing (SE 312)",
      "Secured A in Software Engineering Design Capstone Project (SE 331)",
      "Secured A in final Capstone Project / Internship (SE 431)"
    ],
    courses: [
      { code: "SE 111", title: "Computer Fundamentals", credits: 3, grade: "B-", gp: 2.75 },
      { code: "SE 121", title: "Structured Programming", credits: 3, grade: "D", gp: 2.00 },
      { code: "SE 123", title: "Discrete Mathematics", credits: 3, grade: "C+", gp: 2.50 },
      { code: "SE 131", title: "Data Structure", credits: 3, grade: "D", gp: 2.00 },
      { code: "SE 211", title: "Object Oriented Concepts", credits: 3, grade: "B", gp: 3.00 },
      { code: "SE 214", title: "Algorithms Design & Analysis", credits: 3, grade: "D", gp: 2.00 },
      { code: "SE 223", title: "Database System", credits: 3, grade: "C+", gp: 2.50 },
      { code: "SE 231", title: "System Analysis & Design", credits: 3, grade: "B", gp: 3.00 },
      { code: "SE 312", title: "Software Quality Assurance", credits: 3, grade: "A-", gp: 3.50 },
      { code: "SE 321", title: "SE Web Application", credits: 3, grade: "C+", gp: 2.50 },
      { code: "SE 331", title: "SE Design Capstone Project", credits: 3, grade: "A", gp: 3.75 },
      { code: "SE 334", title: "Artificial Intelligence", credits: 3, grade: "C", gp: 2.25 },
      { code: "SE 444", title: "Data Warehouse & Data Mining", credits: 3, grade: "C+", gp: 2.50 },
      { code: "SE 431", title: "Final Year Project / Internship", credits: 6, grade: "A", gp: 3.75 }
    ]
  }
];

export interface TechSkill {
  name: string;
  category: "languages" | "ml" | "tools" | "systems";
  rating: number; // 1-5 representation for visual graphics
  years?: number;
}

export const SKILLS_DATA: TechSkill[] = [
  { name: "Python", category: "languages", rating: 5 },
  { name: "SQL (PostgreSQL / MySQL)", category: "languages", rating: 4.5 },
  { name: "TypeScript / JavaScript", category: "languages", rating: 4 },
  { name: "HTML5 / CSS3 (Tailwind)", category: "languages", rating: 4.5 },
  { name: "Machine Learning (Scikit-Learn)", category: "ml", rating: 5 },
  { name: "Ensemble Models (Random Forest)", category: "ml", rating: 5 },
  { name: "Boosting (XGBoost, CatBoost)", category: "ml", rating: 4.5 },
  { name: "Deep Learning (TensorFlow, Keras)", category: "ml", rating: 4 },
  { name: "Explainable AI (SHAP Framework)", category: "ml", rating: 4.5 },
  { name: "Hyperparameter Tuning (Optuna)", category: "ml", rating: 5 },
  { name: "Power BI (Revenue Intelligence)", category: "tools", rating: 5 },
  { name: "Data Processing Pipelines", category: "tools", rating: 4.5 },
  { name: "FiveM Lua / Server Scripting", category: "systems", rating: 4.5 },
  { name: "Relational DB Normalization", category: "systems", rating: 4 },
  { name: "API Development & QA Testing", category: "systems", rating: 4 },
  { name: "Operational System Automations", category: "systems", rating: 4.5 }
];

export interface Experience {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string[];
  metrics: { label: string; value: string }[];
}

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: "Gari-import.com.bd",
    location: "Dhaka, Bangladesh",
    role: "Sales & Marketing specialist",
    period: "Aug 2024 – Present",
    description: [
      "Designed and deployed modular Power BI architectures and Python processing scripts to convert dynamic automotive import data into actionable real-time commercial insights.",
      "Engineered the technical automation and marketing operational pipelines that supported a high-impact digital growth strategy.",
      "Acted as the system liaison, linking predictive market intelligence with operational campaign runtimes to optimize conversion metrics."
    ],
    metrics: [
      { label: "Corporate Reach", value: "200k+" },
      { label: "Data Latency", value: "<1 min" },
      { label: "Analytics Accuracy", value: "96.4%" }
    ]
  }
];

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  verificationUrl: string;
  skills: string[];
  color: string; // Tailwind color class reference for glowing accents
}

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: "google-ada",
    title: "Advanced Data Analytics Professional",
    issuer: "Google",
    issueDate: "Nov 2024",
    credentialId: "GADA-93729-2024",
    verificationUrl: "https://coursera.org/verify/google-advanced-data-analytics",
    skills: ["Python", "Regression Analysis", "Machine Learning", "Tableau", "Mathematical Statistics"],
    color: "blue"
  },
  {
    id: "ms-pl300",
    title: "Power BI Data Analyst Associate (PL-300)",
    issuer: "Microsoft",
    issueDate: "Oct 2024",
    credentialId: "MS-PL300-88301",
    verificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/power-bi-data-analyst-associate",
    skills: ["Power Query", "DAX", "Data Modeling", "Dashboard Design", "ETL Pipelines"],
    color: "amber"
  },
  {
    id: "dl-ml",
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI & Stanford",
    issueDate: "Sep 2024",
    credentialId: "DL-ML-294719",
    verificationUrl: "https://coursera.org/verify/machine-learning-specialization",
    skills: ["Scikit-Learn", "Neural Networks", "Decision Trees", "Recommender Systems"],
    color: "indigo"
  },
  {
    id: "aws-ml",
    title: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    issueDate: "Jan 2025",
    credentialId: "AWS-MLS-40912",
    verificationUrl: "https://aws.amazon.com/verification",
    skills: ["Amazon SageMaker", "Deep Learning Models", "ML Engineering", "Cloud Pipelines"],
    color: "orange"
  },
  {
    id: "umich-ads",
    title: "Applied Data Science with Python Specialization",
    issuer: "University of Michigan",
    issueDate: "Aug 2024",
    credentialId: "UMICH-ADS-18491",
    verificationUrl: "https://coursera.org/verify/applied-data-science-python",
    skills: ["Pandas & NumPy", "Matplotlib Plotting", "Text Mining", "Network Analysis"],
    color: "violet"
  }
];

export interface AcademicCertificate {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  institution: string;
  groupOrMajor: string;
  result: string; // e.g. "CGPA: 3.39 / 4.00" or "GPA: 4.70 / 5.00"
  serialNo: string;
  registrationNo: string;
  rollNo?: string;
  verificationUrl?: string;
  color: string;
  highlights: string[];
  courses: { code: string; title: string; grade: string; gp: number; credits?: number }[];
}

export const ACADEMIC_CERTIFICATES_DATA: AcademicCertificate[] = [
  {
    id: "msc-se",
    title: "Master of Science in Software Engineering",
    issuer: "Daffodil International University",
    issueDate: "Nov 2025",
    institution: "Daffodil International University, Dhaka, Bangladesh",
    groupOrMajor: "Data Science",
    result: "CGPA 3.39 / 4.00",
    serialNo: "0022796",
    registrationNo: "242-44-001 (Student ID: 0242420005343001)",
    verificationUrl: "http://erp.daffodilvarsity.edu.bd/?app=certificateVerify",
    color: "emerald",
    highlights: [
      "Specialized in advanced tabular preprocessing and deep machine learning architectures.",
      "Graduation thesis on 'Automobile Price Forecasting with Machine Learning' earning an A+ grade.",
      "Maintained a high-performance profile with exceptional scores in Applied Machine Learning."
    ],
    courses: [
      { code: "SWE 685", title: "Fundamentals for Data Science", credits: 3, grade: "B-", gp: 2.75 },
      { code: "SWE 688", title: "Data Visualization & Communication", credits: 3, grade: "C+", gp: 2.50 },
      { code: "SWE 687", title: "Applied Machine Learning", credits: 3, grade: "A+", gp: 4.00 },
      { code: "SWE 575", title: "SE I: Requirements & Modeling", credits: 3, grade: "B+", gp: 3.25 },
      { code: "SWE 587", title: "SE II: Software Design", credits: 3, grade: "B-", gp: 2.75 },
      { code: "SWE 686", title: "Research Design & App for Data Analysis", credits: 3, grade: "B", gp: 3.00 },
      { code: "SWE 578", title: "Software Project Management", credits: 3, grade: "C+", gp: 2.50 },
      { code: "SWE 636", title: "Business Analysis", credits: 3, grade: "B-", gp: 2.75 },
      { code: "SWE 699", title: "Graduate Thesis (Data Science)", credits: 18, grade: "A+", gp: 4.00 }
    ]
  },
  {
    id: "bsc-se",
    title: "Bachelor of Science in Software Engineering",
    issuer: "Daffodil International University",
    issueDate: "March 2024",
    institution: "Daffodil International University, Dhaka, Bangladesh",
    groupOrMajor: "Software Engineering",
    result: "CGPA 2.55 / 4.00",
    serialNo: "1101896 (Provisional: 0020485)",
    registrationNo: "Student ID: 161-35-1598 (Batch: 19th)",
    verificationUrl: "http://erp.daffodilvarsity.edu.bd/?app=certificateVerify",
    color: "blue",
    highlights: [
      "Rigorous 4-year engineering curriculum covering software lifecycle, testing, and algorithms.",
      "Secured outstanding grades in key capstone design projects and system-level architecture courses.",
      "Acquired solid engineering foundations with 145 credit hours of practical systems development."
    ],
    courses: [
      { code: "SE 111", title: "Computer Fundamentals", credits: 3, grade: "B-", gp: 2.75 },
      { code: "SE 121", title: "Structured Programming", credits: 3, grade: "D", gp: 2.00 },
      { code: "SE 123", title: "Discrete Mathematics", credits: 3, grade: "C+", gp: 2.50 },
      { code: "SE 131", title: "Data Structure", credits: 3, grade: "D", gp: 2.00 },
      { code: "SE 211", title: "Object Oriented Concepts", credits: 3, grade: "B", gp: 3.00 },
      { code: "SE 214", title: "Algorithms Design & Analysis", credits: 3, grade: "D", gp: 2.00 },
      { code: "SE 223", title: "Database System", credits: 3, grade: "C+", gp: 2.50 },
      { code: "SE 231", title: "System Analysis & Design", credits: 3, grade: "B", gp: 3.00 },
      { code: "SE 312", title: "Software Quality Assurance", credits: 3, grade: "A-", gp: 3.50 },
      { code: "SE 321", title: "SE Web Application", credits: 3, grade: "C+", gp: 2.50 },
      { code: "SE 331", title: "SE Design Capstone Project", credits: 3, grade: "A", gp: 3.75 },
      { code: "SE 334", title: "Artificial Intelligence", credits: 3, grade: "C", gp: 2.25 },
      { code: "SE 444", title: "Data Warehouse & Data Mining", credits: 3, grade: "C+", gp: 2.50 },
      { code: "SE 532", title: "Introduction to Robotics", credits: 3, grade: "A", gp: 3.75 },
      { code: "SE 431", title: "Final Year Project / Internship", credits: 6, grade: "A", gp: 3.75 }
    ]
  },
  {
    id: "hsc",
    title: "Higher Secondary Certificate (HSC)",
    issuer: "Board of Intermediate and Secondary Education, Dhaka",
    issueDate: "August 2014",
    institution: "Winsome College, Dhaka, Bangladesh",
    groupOrMajor: "Science Group",
    result: "GPA 4.70 / 5.00",
    serialNo: "H 4190603",
    registrationNo: "973229 / 2012",
    rollNo: "113022",
    color: "amber",
    highlights: [
      "Rigorous pre-university science core covering Advanced Calculus, Physics, Chemistry, and Biology.",
      "Achieved stellar grade point averages (GPA 4.70) under the national educational framework.",
      "Demonstrated deep proficiency with perfect A+ marks in Physics, Chemistry, and Higher Mathematics."
    ],
    courses: [
      { code: "PHY", title: "Physics", grade: "A+", gp: 5.00 },
      { code: "CHE", title: "Chemistry", grade: "A+", gp: 5.00 },
      { code: "MTH", title: "Higher Mathematics", grade: "A+", gp: 5.00 },
      { code: "BIO", title: "Biology", grade: "A-", gp: 3.50 },
      { code: "ENG", title: "English", grade: "A-", gp: 3.50 },
      { code: "BNG", title: "Bangla", grade: "A-", gp: 3.50 }
    ]
  },
  {
    id: "ssc",
    title: "Secondary School Certificate (SSC)",
    issuer: "Board of Intermediate and Secondary Education, Dhaka",
    issueDate: "May 2012",
    institution: "Motijheel Model High School, Dhaka, Bangladesh",
    groupOrMajor: "Science Group",
    result: "GPA 4.63 / 5.00",
    serialNo: "DBS 2280329",
    registrationNo: "989901 / 2010",
    rollNo: "171221",
    color: "violet",
    highlights: [
      "Secondary school science foundation curriculum covering basic physical and natural sciences.",
      "Graduated with honors ranking (GPA 4.63) among elite regional peers.",
      "Secured outstanding perfect A+ grades in Physics, Chemistry, Biology, and Higher Mathematics."
    ],
    courses: [
      { code: "PHY", title: "Physics", grade: "A+", gp: 5.00 },
      { code: "CHE", title: "Chemistry", grade: "A+", gp: 5.00 },
      { code: "MTH", title: "Higher Mathematics", grade: "A+", gp: 5.00 },
      { code: "BIO", title: "Biology", grade: "A", gp: 4.00 },
      { code: "ENG", title: "English", grade: "A+", gp: 5.00 },
      { code: "BNG", title: "Bangla", grade: "A", gp: 4.00 },
      { code: "MAT", title: "General Mathematics", grade: "A", gp: 4.00 },
      { code: "SOC", title: "Social Science", grade: "A", gp: 4.00 },
      { code: "REL", title: "Religion (Buddha)", grade: "B", gp: 3.00 }
    ]
  }
];


