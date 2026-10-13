export const profile = {
  name: "Smit Patel",
  role: "Data Analyst · Aspiring Data Scientist",
  location: "Ahmedabad, India",
  email: "smit9313588986@gmail.com",
  linkedin: "https://linkedin.com/in/smit-patel-348826295",
  github: "https://github.com/Smit0937",
};

export function gmailComposeUrl({ subject = "", body = "" } = {}) {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: profile.email,
    su: subject,
    body,
  });
  return `https://mail.google.com/mail/?${params.toString()}`;
}

export const stats = [
  { value: 9.07, suffix: " / 10", label: "CGPA, Computer Engineering", decimals: 2 },
  { value: 4, suffix: "", label: "Analytics & ML projects shipped", decimals: 0 },
  { value: 85, suffix: "%", label: "Accuracy, churn prediction model", decimals: 0 },
  { value: 3, suffix: "", label: "Professional certifications", decimals: 0 },
];

export const expertise = [
  {
    title: "Data Analysis & EDA",
    desc: "Data cleaning, exploratory analysis, descriptive statistics, and turning raw tables into a clear narrative.",
    icon: "M4 19h16M4 15l4-5 3 3 5-7 4 6",
  },
  {
    title: "Programming & Querying",
    desc: "Python (pandas, numpy, matplotlib) and SQL for data manipulation, querying, and pipeline scripting.",
    icon: "M8 4l-6 8 6 8M16 4l6 8-6 8",
  },
  {
    title: "Visualization",
    desc: "Interactive Power BI dashboards and Excel reporting — KPIs, slicers, drill-downs, and heatmaps.",
    icon: "bars",
  },
  {
    title: "Applied Machine Learning",
    desc: "Feature engineering, model evaluation, and deployment — including a Streamlit app in production use.",
    icon: "M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1",
    circle: true,
  },
];

export const projects = [
  {
    date: "Mar – Apr 2025",
    title: "Customer Churn Prediction Web App",
    desc: "Analyzed 7,043 telecom customer records to identify churn drivers by tenure, contract type, and monthly charges. Engineered features including tenure bands and contract-type encoding, then deployed an interactive Streamlit app for real-time churn prediction.",
    tags: ["Python", "Streamlit", "Feature Engineering"],
    metric: { value: "85%", label: "model accuracy" },
    trend: [48, 58, 64, 73, 85],
    github: "https://github.com/Smit0937/Customer-Churn-Prediction-.git",
  },
  {
    date: "Jan 2026",
    title: "Heart Disease Prediction Dashboard",
    desc: "Built an interactive Power BI dashboard analyzing heart disease risk from patient data — age, cholesterol, blood pressure, heart rate. Used Power Query for cleaning, with dynamic filters and drill-downs to surface high-risk patient segments.",
    tags: ["Power BI", "Power Query", "Healthcare Data"],
    metric: { value: "4", label: "risk factor views" },
    trend: [35, 50, 46, 62, 74],
    github: null,
  },
  {
    date: "Self-directed",
    title: "Amazon Sales Analysis",
    desc: "Cleaned and explored a large Amazon sales dataset with pandas, numpy, and matplotlib, applying statistical techniques to uncover correlations between pricing, customer ratings, and sales volume.",
    tags: ["Python", "pandas", "EDA"],
    metric: { value: "3", label: "key variables correlated" },
    trend: [20, 33, 31, 47, 60],
    github: "https://github.com/Smit0937/PROJECTS.git",
  },
  {
    date: "Self-directed",
    title: "Amazon Sales Dashboard",
    desc: "Developed an interactive Power BI dashboard visualizing revenue, profit, and top-selling products — designed to make sales trends usable for day-to-day decisions.",
    tags: ["Power BI", "Dashboarding"],
    metric: { value: "3", label: "core KPIs tracked" },
    trend: [30, 42, 39, 58, 70],
    github: null,
  },
];

export const education = [
  { date: "2022 — 2026", title: "B.Tech, Computer Engineering", sub: "Silver Oak University, Ahmedabad · CGPA 9.07 / 10" },
  { date: "2021 — 2022", title: "Higher Secondary", sub: "Super English School" },
];

export const certifications = [
  { date: "2025", title: "Oracle Cloud Infrastructure — AI Foundations Associate", sub: "Oracle · AI/ML concepts, model lifecycle, cloud deployment" },
  { date: "2025", title: "Getting Started with Microsoft Excel", sub: "Coursera · Data organization, formulas, spreadsheet operations" },
  { date: "2024", title: "Data Science Methodologies", sub: "IBM · Full data science lifecycle, from problem framing to deployment" },
];