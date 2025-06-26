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
    level: 85,
    category: 'programming' as const
  },
  {
    name: "Excel & VBA",
    icon: "fas fa-file-excel",
    level: 80,
    category: 'tools' as const
  },
  {
    name: "Tableau",
    icon: "fas fa-chart-line",
    level: 75,
    category: 'tools' as const
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
    name: "Data Mining",
    icon: "fas fa-search",
    level: 80,
    category: 'analytics' as const
  },
  {
    name: "Web Scraping",
    icon: "fas fa-spider",
    level: 70,
    category: 'programming' as const
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
      "Managed and analyzed large datasets using Excel, ensuring accuracy and delivering actionable insights for business decisions",
      "Automated data workflows using Google Apps Script and developed Python scripts with Selenium and Beautiful Soup for web scraping",
      "Maintained CRM systems and engaged with clients during site visits to gather requirements and provide tailored data solutions",
      "Created impactful dashboards and visualizations to communicate data insights effectively to stakeholders"
    ]
  },
  {
    position: "Data Analyst",
    company: "32Mobiles",
    location: "Gurugram, India",
    period: "October 2023 - June 2024",
    current: false,
    responsibilities: [
      "Utilized advanced Excel functions (VLOOKUP, PivotTables, Macros) to analyze data, improving reporting efficiency by 30%",
      "Developed and maintained complex SQL queries to extract, manipulate, and analyze large datasets from diverse sources",
      "Created data-driven dashboards in Excel and Tableau, presenting insights to stakeholders for strategic decision-making",
      "Conducted statistical analysis using Excel and Python to identify trends, patterns, and anomalies in datasets"
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
    title: "Sales Analysis Dashboard",
    description: "Comprehensive sales data analysis identifying top-selling products, profit margins, and peak time periods. Utilized advanced Excel functions and VBA for data manipulation and automated reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "Excel & VBA",
    icon: "fas fa-chart-line",
    technologies: ["Excel", "VBA", "Data Analysis"]
  },
  {
    title: "Pizza Delivery Analytics",
    description: "Created comprehensive database schema and performed complex SQL queries to analyze pizza delivery operations. Implemented DDL/DML queries for data cleaning and optimization.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "SQL Project",
    icon: "fas fa-database",
    technologies: ["SQL", "Database Design", "ETL"]
  },
  {
    title: "Real Estate Price Prediction",
    description: "Developed ML model to predict residential housing prices using KC House dataset. Analyzed features like bedrooms, bathrooms, and square footage for accurate market predictions.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    category: "Machine Learning",
    icon: "fas fa-brain",
    technologies: ["Python", "Machine Learning", "Regression"]
  }
];

// Education data extracted from resume
export const educationData = [
  {
    degree: "Bachelor of Science (B.Sc)",
    institution: "Professor Rajendra Prasad University, U.P.",
    year: "2023"
  },
  {
    degree: "Class 12th",
    institution: "Mother Suhag Inter College, U.P.",
    year: "2019"
  },
  {
    degree: "Class 10th",
    institution: "Mother Suhag Inter College, U.P.",
    year: "2017"
  }
];

// Certification data extracted from resume
export const certificationData = [
  {
    title: "Data Scientist with Python",
    issuer: "Ducat INDIA, Gurugram",
    skills: ["Python", "Data Science"]
  }
];
