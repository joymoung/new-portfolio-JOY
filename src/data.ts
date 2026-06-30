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
    role: "Data & Operations Manager (Sales & Marketing)",
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
