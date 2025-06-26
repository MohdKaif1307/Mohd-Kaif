// Skills data extracted from resume
export const skillsData = [
  {
    name: "Python",
    icon: "fab fa-python",
    level: 90,
    category: 'programming' as const
  },
  {
    name: "SQL",
    icon: "fas fa-database",
    level: 90,
    category: 'programming' as const
  },
  {
    name: "Excel & VBA",
    icon: "fas fa-file-excel",
    level: 90,
    category: 'tools' as const
  },
  {
    name: "Tableau",
    icon: "fas fa-chart-line",
    level: 80,
    category: 'tools' as const
  },
  {
    name: "Power BI",
    icon: "fas fa-chart-area",
    level: 75,
    category: 'tools' as const
  },
  {
    name: "MySQL",
    icon: "fas fa-server",
    level: 85,
    category: 'programming' as const
  },
  {
    name: "PostgreSQL",
    icon: "fas fa-database",
    level: 80,
    category: 'programming' as const
  },
  {
    name: "Data Visualization",
    icon: "fas fa-chart-pie",
    level: 85,
    category: 'analytics' as const
  },
  {
    name: "Machine Learning",
    icon: "fas fa-brain",
    level: 75,
    category: 'analytics' as const
  },
  {
    name: "Statistical Analysis",
    icon: "fas fa-chart-bar",
    level: 85,
    category: 'analytics' as const
  },
  {
    name: "Data Cleaning",
    icon: "fas fa-broom",
    level: 90,
    category: 'analytics' as const
  },
  {
    name: "Google Sheets",
    icon: "fas fa-table",
    level: 85,
    category: 'tools' as const
  }
];

// Experience data extracted from resume
export const experienceData = [
  {
    position: "Data Analyst",
    company: "The Red Carpet Ventures",
    location: "Gurugram, India",
    period: "August 2024 - Present",
    current: true,
    responsibilities: [
      "Automated 6+ manual reporting tasks via Python & Google Apps Script, saving 10+ hours/week",
      "Created real-time dashboards for leadership, accelerating decision-making by 25%",
      "Improved CRM data accuracy by 15% through structured feedback and database checks",
      "Captured client insights at events, resulting in 10% better alignment of offerings to client needs"
    ]
  },
  {
    position: "Data Analyst",
    company: "32Mobiles",
    location: "Gurugram, India",
    period: "October 2023 - June 2024",
    current: false,
    responsibilities: [
      "Streamlined Excel workflows (VLOOKUP, Macros) reducing report turnaround by 30%",
      "Wrote complex SQL queries on 500K+ records to generate campaign insights",
      "Built Tableau dashboards presented in weekly exec meetings, steering sales decisions",
      "Analyzed return data; enabled 12% reduction through quality-based interventions",
      "Delivered 5+ cross-functional reports/month in partnership with sales and marketing"
    ]
  },
  {
    position: "Data Scientist",
    company: "A.A.M Infotech Pvt. Ltd.",
    location: "Gurugram, India (Internship)",
    period: "February - October 2023",
    current: false,
    responsibilities: [
      "Used automated tools to extract data from primary and secondary sources",
      "Created data visualization graphics using Python and Tableau, translating complex datasets into comprehensive visual representations",
      "Performed data extraction and manipulation using MySQL",
      "Performed data analysis and modeling using Excel, identifying key trends and patterns for strategic insights"
    ]
  }
];

// Projects data extracted from resume
export const projectsData = [
  {
    title: "Sales Dashboard (Excel & VBA)",
    description: "Pinpointed top-selling SKUs and seasonal trends, optimizing product focus. Comprehensive sales data analysis identifying profit margins and peak time periods with automated reporting capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "Excel & VBA",
    icon: "fas fa-chart-line",
    technologies: ["Excel", "VBA", "Data Analysis", "Automation"]
  },
  {
    title: "SQL-Based Pizza Sales Analysis",
    description: "Designed schema, cleansed data, and generated insights for business strategy. Created comprehensive database with DDL/DML queries for pizza delivery operations optimization.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "SQL Project",
    icon: "fas fa-database",
    technologies: ["SQL", "Database Design", "ETL", "Business Intelligence"]
  },
  {
    title: "House Price Prediction (Kaggle)",
    description: "Built regression model boosting accuracy of property value estimates. Analyzed features like bedrooms, bathrooms, and square footage for real estate investment decisions.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "Machine Learning",
    icon: "fas fa-brain",
    technologies: ["Python", "Machine Learning", "Regression", "Kaggle"]
  }
];

// Education data extracted from resume
export const educationData = [
  {
    degree: "Bachelor of Science (B.Sc)",
    institution: "Prof. Rajendra Prasad University",
    year: "2023"
  },
  {
    degree: "12th Grade",
    institution: "Mother Suhag Inter College",
    year: "2019"
  },
  {
    degree: "10th Grade",
    institution: "Mother Suhag Inter College",
    year: "2017"
  }
];

// Certification data extracted from resume
export const certificationData = [
  {
    title: "Data Scientist with Python",
    issuer: "Ducat India, Gurugram",
    skills: ["Python", "Data Science", "Analytics", "Machine Learning"]
  }
];
