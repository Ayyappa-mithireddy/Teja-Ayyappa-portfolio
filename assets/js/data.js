/* Portfolio Data Store */
const PORTFOLIO_DATA = {
  profile: {
    name: "Mithireddy Teja Ayyappa",
    shortName: "Teja Ayyappa",
    role: "Data Engineer & Data Scientist",
    tagline: "Engineering Data Pipelines & Intelligent Systems",
    bio: "Computer Science Undergraduate (Data Science) specializing in Python, SQL, Power BI, and Machine Learning. Passionate about transforming raw transactional data into resilient analytics infrastructure and predictive models.",
    location: "Rajahmundry, Andhra Pradesh, India",
    email: "tejaayyappamithireddy@gmail.com",
    phone: "+91 8143074806",
    github: "https://github.com/tejaayyappa",
    linkedin: "https://linkedin.com/in/mithireddy-teja-ayyappa",
    cgpa: "8.11 / 10",
    college: "Aditya College of Engineering & Tech",
    gradYear: "2028",
    degree: "B.Tech Computer Science and Engineering (Data Science)"
  },

  greetings: [
    "Namaskaram 🙏",
    "Hello 👋",
    "Welcome ✨",
    "Engineering Data ⚡",
    "Namaskaram 🙏"
  ],

  projects: [
    {
      id: "churn-prediction",
      title: "Customer Churn Prediction",
      category: "Machine Learning",
      metricBadge: "0.84 ROC-AUC | 80.6% Accuracy",
      metricType: "cyan",
      tech: ["Python", "Scikit-learn", "Pandas", "XGBoost", "Seaborn"],
      shortDesc: "End-to-end machine learning pipeline predicting customer churn on 7,043 telecom records; identified key retention drivers and risk cohorts.",
      fullDesc: `Developed an end-to-end predictive machine learning solution to address customer churn for a telecommunications provider. The project involved rigorous Exploratory Data Analysis (EDA) on 7,043 customer records, feature transformation, handling class imbalance, and training multiple supervised classification models including Logistic Regression, Random Forest, and Gradient Boosting.
      
      The optimized model achieved a 0.84 ROC-AUC score and 80.6% test accuracy. Key findings highlighted that contract duration (Month-to-Month) and lack of tech support were primary risk triggers, enabling targeted customer retention campaigns.`,
      highlights: [
        "Analyzed 7,043 multi-feature customer records with rigorous missing-value imputation",
        "Achieved 0.84 ROC-AUC and 80.6% test accuracy after cross-validation & hyperparameter tuning",
        "Extracted feature importances revealing month-to-month contracts as 3x higher churn risk",
        "Delivered actionable retention strategies for customer success teams"
      ],
      metrics: {
        accuracy: "80.6%",
        rocAuc: "0.84",
        records: "7,043",
        latency: "14ms"
      }
    },
    {
      id: "phonepe-dashboard",
      title: "PhonePe Transactions Dashboard",
      category: "Business Intelligence",
      metricBadge: "5-Page Interactive Dashboard",
      metricType: "blue",
      tech: ["Power BI", "DAX", "Data Modeling", "Power Query", "Star Schema"],
      shortDesc: "Structured star-schema data model and dynamic DAX measures across Money Transfers, Recharges, Loans, and Insurance categories across India.",
      fullDesc: `Engineered an enterprise-grade business intelligence dashboard in Microsoft Power BI visualizing aggregated UPI transaction metrics across Indian states and union territories. Designed an optimized Star Schema relational model connecting transaction facts with geographic, temporal, and category dimension tables.
      
      Authored complex DAX measures calculating YoY growth rates, market penetration percentages, average transaction values, and payment velocity across Money Transfers, Mobile Recharges, Merchant Payments, and Financial Services.`,
      highlights: [
        "Structured a 5-page interactive Power BI report with intuitive drill-through capabilities",
        "Formulated 25+ dynamic DAX measures for YoY volume, velocity, and state rankings",
        "Normalized multi-source transaction datasets into an optimized Star Schema",
        "Enabled multi-dimensional slicing across 36 states/UTs and four core payment verticals"
      ],
      metrics: {
        pages: "5",
        measures: "25+ DAX",
        coverage: "36 States/UTs",
        verticals: "4 Core"
      }
    },
    {
      id: "student-risk-intelligence",
      title: "Student Academic Risk Intelligence System",
      category: "Applied AI & Dashboards",
      metricBadge: "Composite Risk Score Engine",
      metricType: "emerald",
      tech: ["Python", "Pandas", "Streamlit", "Plotly", "Statistical Modeling"],
      shortDesc: "Interactive dashboard flagging academic risk using statistical models, multi-factor scoring algorithms, and lifestyle correlations.",
      fullDesc: `Architected a proactive academic early-warning intelligence platform for educational institutions. The system computes a weighted Composite Risk Score based on attendance volatility, internal assessment trajectories, study hours, and lifestyle survey indicators.
      
      Built with Python, Streamlit, and Plotly, the interactive dashboard equips mentors with radar charts, risk distribution heatmaps, and automated intervention recommendations four weeks before semester examinations.`,
      highlights: [
        "Devised a multi-parameter Composite Risk Score algorithm with calibrated risk bands",
        "Interactive Streamlit application featuring dynamic Plotly radar and trajectory charts",
        "Integrated lifestyle correlation factors (sleep patterns, self-study hours, commute)",
        "Provided student-level drilldown reports with personalized remediation steps"
      ],
      metrics: {
        engine: "Weighted Scoring",
        leadTime: "4 Weeks Early",
        indicators: "12+ Factors",
        ux: "Interactive Radar"
      }
    },
    {
      id: "agriconnect-marketplace",
      title: "AgriConnect (Data Marketplace)",
      category: "Web & Data Systems",
      metricBadge: "Multilingual Rule Engine",
      metricType: "purple",
      tech: ["React", "JavaScript", "Python", "REST APIs", "CSS3"],
      shortDesc: "Agricultural marketplace prototype with role-based dashboards, pricing algorithms, and direct buyer discovery workflows.",
      fullDesc: `Developed a modern digital agricultural exchange prototype connecting regional farmers directly with commercial bulk buyers and food aggregators. The platform incorporates a multilingual rule engine to translate crop varieties and grading terminology for vernacular usability.
      
      Features role-specific dashboards for farmers to list produce with quality metrics and for buyers to discover regional listings with transparent pricing benchmarks based on historical APMC market data.`,
      highlights: [
        "Engineered role-based authentication flows for farmers, aggregators, and buyers",
        "Built a lightweight rule engine for crop grading and fair-price estimation",
        "Implemented vernacular language translation modules for rural accessibility",
        "Integrated interactive search and filtering across regional harvest schedules"
      ],
      metrics: {
        roles: "3 Distinct",
        latency: "<50ms",
        interface: "Vernacular Ready",
        architecture: "Component-Driven"
      }
    }
  ],

  certifications: [
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google Career Certificates",
      icon: "📊",
      skills: ["Data Cleaning", "R Programming", "SQL", "Tableau", "Data Analysis Process"],
      date: "Professional Credential",
      description: "Comprehensive 8-course credential demonstrating mastery of end-to-end data processing, statistical visualization, and business decision frameworks."
    },
    {
      title: "Cisco C++ Certifications",
      issuer: "Cisco Networking Academy / OpenEDG",
      icon: "⚙️",
      skills: ["C++ Essentials 1 & 2", "Advanced OOP", "Memory Management", "STL"],
      date: "Essentials & Advanced",
      description: "Rigorous certification validating foundational syntax, object-oriented paradigms, template metaprogramming, and performance optimization."
    },
    {
      title: "MongoDB: Relational Model to Document Model",
      issuer: "MongoDB University",
      icon: "🍃",
      skills: ["NoSQL Schema Design", "JSON/BSON", "Data Modeling", "Aggregation Pipeline"],
      date: "University Credential",
      description: "Certified proficiency in converting relational SQL schemas into high-performance, denormalized document architectures."
    },
    {
      title: "Oracle Java Foundations",
      issuer: "Oracle Academy",
      icon: "☕",
      skills: ["Core Java", "OOP Principles", "Data Structures", "Exception Handling"],
      date: "Foundations Certified",
      description: "Official credential verifying expertise in fundamental Java syntax, algorithms, class design, and object-oriented architecture."
    },
    {
      title: "Certiport IT Specialist (HTML & CSS)",
      issuer: "Certiport Pearson VUE",
      icon: "🌐",
      skills: ["Semantic HTML5", "Responsive CSS3", "Modern Web Standards"],
      date: "Specialist Certified",
      description: "Industry-standard certification validating competency in responsive interface design, accessibility standards, and semantic web styling."
    }
  ]
};
