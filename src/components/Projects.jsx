export default function Projects() {
  const individualProjects = [
  {
    title: "Grocery Inventory Management Dashboard",
    desc: "An interactive Excel dashboard analyzing 990 grocery products across 7 categories — tracking stock levels, reorder alerts, and inventory value to help identify stockout risks and slow-moving inventory in real time.",
    highlights: [
      "Cleaned and structured a 990-row raw dataset into a dynamic Excel Table",
      "Built calculated fields (Stock Value, automated Reorder Status alerts, Days Since Last Order) for live updates",
      "In progress: Pivot Tables, KPI cards, interactive charts, and slicers",
      ],
    tools: ["Microsoft Excel", "Pivot Tables", "Power Query", "Data Cleaning"],
    link: null,
    ongoing: true,
  },    
  {
      title: "Colombo Real Estate Market Analysis",
      desc: "End-to-end MySQL data analysis on 203,874 real property listings from ikman.lk - uncovering price trends, rental hotspots, and best-value areas through advanced SQL and an interactive Power BI dashboard.",
      highlights: [
        "Cleaned 96,269 listings across 6 data-cleaning passes",
        "13+ advanced SQL queries (Window Functions, CTEs, Stored Procedures)",
        "4-page live Power BI dashboard connected to MySQL",
      ],
      tools: ["MySQL", "Python", "Pandas", "Power BI", "Git"],
      link: "https://github.com/HansikaDulanjani/colombo-realestate-sql.git",
    },
    {
      title: "HR Compensation & Attrition Analytics Dashboard",
      desc: "End-to-end HR analytics on 1,470 employee records - uncovering whether overtime, not pay, is the real driver of attrition through SQL analysis, statistical modeling, and an interactive Power BI dashboard.",
      highlights: [
      "Engineered role-relative salary quartiles and attrition cost estimates in Python",
      "Validated attrition predictors with a Scikit-learn logistic regression model",
      "4-page interactive Power BI dashboard with synced slicers and an at-risk employee table",
      ],
      tools: ["Python", "Pandas", "Scikit-learn", "MySQL", "Power BI"],
      link: "https://github.com/HansikaDulanjani/hr-compensation-attrition-dashboard",
    },
    {
      title: "Customer Behavior Data Analyst Portfolio",
      desc: "End-to-end analysis of retail customer shopping behavior - data cleaning, EDA, SQL querying, and dashboard development to extract real business insights.",
      highlights: [
        "Integrated Python with MySQL using SQLAlchemy",
        "10 advanced SQL business queries on revenue & segmentation",
        "Interactive Power BI dashboard with dynamic filters",
      ],
      tools: ["Python", "MySQL", "SQLAlchemy", "Power BI"],
      link: "https://github.com/HansikaDulanjani/Customer-Behavior-Data-Analyst-Portfolio-Project.git",
    },
    {
      title: "Codveda Data Analytics Internship Project",
      desc: "Internship project covering the full spectrum of data science - EDA, regression, time series, clustering, churn prediction, and NLP sentiment analysis.",
      highlights: [
        "Built regression & customer churn prediction models",
        "Applied time series analysis and clustering",
        "Performed NLP sentiment analysis on text data",
      ],
      tools: ["Python", "Scikit-learn", "Power BI", "Google Colab"],
      link: "https://github.com/HansikaDulanjani/Codveda-Data-Analytics-Internship.git",
    },
    {
      title: "Tableau Project - Superstore Sales Dashboard",
      desc: "Interactive Tableau dashboard analyzing sales performance, profit trends, and regional insights using the Superstore dataset.",
      highlights: [
        "Sales by region & profit by category visualization",
        "Monthly sales trend analysis",
        "KPI dashboard with interactive filters",
      ],
      tools: ["Tableau Public", "Data Visualization"],
      link: "https://github.com/HansikaDulanjani/Superstore-Sales-Dashboard-Tableau.git",
    },
  ];

  const groupProjects = [
  {
    title: "Hotel Customer Satisfaction Analysis",
    module: "IT3081 – Statistical Modelling",
    desc: "Analysis of 14,838 customer reviews across nine hotels to identify satisfaction trends and performance gaps.",
    highlights: [
      "Applied ANOVA, regression, PCA, and classification to evaluate hotel performance",
      "Proposed a Hotel Customer Satisfaction Decision Support System for data-driven decisions",
    ],
    tools: ["Python", "Pandas", "Scikit-learn", "Statistical Analysis", "Data Visualization"],
    link: null,
  },
  {
    title: "Banking Transaction Data Warehouse & BI Dashboard",
    module: "IT3101 – Data Warehousing & Business Intelligence",
    desc: "A banking data warehouse built in Microsoft SQL Server using a Star Schema, with interactive Power BI reporting.",
    highlights: [
      "Developed a Banking Transaction Data Mart with fact and dimension tables",
      "Built Power BI dashboards for transaction trends, regional performance, and banking KPIs",
    ],
    tools: ["SQL Server", "SQL", "Power BI", "Data Modelling", "Data Warehousing"],
    link: null,
  },
  {
    title: "European Soccer Match Outcome Prediction",
    module: "IT3091 – Machine Learning",
    desc: "Machine learning models that predict football match outcomes (Home Win, Draw, Away Win) from 25,979 historical matches across 11 European leagues.",
    highlights: [
      "Preprocessing, feature engineering and selection, and hyperparameter tuning",
      "Compared Logistic Regression, Random Forest, Decision Tree, and XGBoost",
      "Built an interactive Streamlit dashboard (KickCast) showing predictions and probabilities",
    ],
    contribution: "Data quality checks and data preprocessing, and training the Random Forest model.",
    tools: ["Python", "Pandas", "NumPy", "Scikit-learn", "XGBoost", "Streamlit", "Matplotlib"],
    link: null,
  },
    {
      title: "Pink Petals – AI Powered Skincare E-Commerce",
      desc: "AI-powered skincare e-commerce platform with sales prediction and review analysis.",
      contribution: "Product Review & Feedback Management, trained CatBoost and XGBoost models for review prediction.",
      tools: ["Python", "MySQL", "CatBoost", "XGBoost"],
      link: "https://github.com/Hasanthii/Pinkpetals_Test.git",
    },
    {
      title: "CinePass Mobile App",
      desc: "Mobile application for cinema ticket management, built with React Native.",
      contribution: "Hall & Showtime Management - Add/Edit/Delete Halls and show times.",
      tools: ["React Native", "Mobile Dev"],
      link: "https://github.com/Hasanthii/cinepass-app.git",
    },
    {
      title: "Pretty Touch – Beauty Salon Website",
      desc: "Web-based salon management system.",
      contribution: "Services & Offers Management - CRUD operations for salon services and offers.",
      tools: ["Web Development"],
      link: null,
    },
    {
      title: "Web-Based Apartment Sales System",
      desc: "Web-based apartment sales and customer management system.",
      contribution: "Feedback Management module.",
      tools: ["Java", "Web Development", "Database"],
      link: null,
    },
    {
      title: "Smart Traffic Management System",
      desc: "Arduino-based smart traffic management system (Year 1, Semester 1 project).",
      contribution: "Team project - traffic control logic and hardware integration.",
      tools: ["Arduino", "C"],
      link: null,
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>

      <h3 className="projects-subtitle">Individual Projects</h3>
      <div className="projects-grid">
      {individualProjects.map((proj, i) => (
        <div key={i} className="project-card">
          <h4 className="project-title">
            {proj.title}
            {proj.ongoing && <span className="ongoing-badge">Ongoing</span>}
          </h4>
          <p className="project-desc">{proj.desc}</p>
          <ul className="project-highlights">
            {proj.highlights.map((h, j) => <li key={j}>{h}</li>)}
          </ul>
        <div className="project-tools">
            {proj.tools.map((tool, k) => <span key={k} className="tool-tag">{tool}</span>)}
        </div>
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            )}
          </div>
        ))}
      </div>

      <h3 className="projects-subtitle">University Group Projects</h3>
      <div className="projects-grid">
        {groupProjects.map((proj, i) => (
  <div key={i} className="project-card">
    <h4 className="project-title">{proj.title}</h4>
    {proj.module && <p className="project-module">{proj.module}</p>}
    <p className="project-desc">{proj.desc}</p>
    {proj.highlights && (
      <ul className="project-highlights">
        {proj.highlights.map((h, j) => <li key={j}>{h}</li>)}
      </ul>
    )}
    {proj.contribution && (
      <p className="project-contribution"><strong>My Contribution:</strong> {proj.contribution}</p>
    )}
    <div className="project-tools">
      {proj.tools.map((tool, k) => <span key={k} className="tool-tag">{tool}</span>)}
    </div>
    {proj.link && (
      <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link">
        View on GitHub →
      </a>
    )}
  </div>
))}
      </div>
    </section>
  );
}