export const REGIONS = [
  { id: "about", title: "Port Royal", short: "About", x: 260, y: 700 },
  { id: "projects", title: "Tortuga", short: "Projects", x: 620, y: 500 },
  { id: "experience", title: "Davy Jones Locker", short: "Experience", x: 950, y: 670 },
  { id: "skills", title: "Island of the Dead", short: "Skills", x: 1280, y: 560 },
  { id: "contact", title: "Shipwreck Cove", short: "Contact", x: 1540, y: 430 },
];

export const ABOUT = {
  intro:
    "I'm Avaansh Nanda, a Computing and Financial Management student at the University of Waterloo. I am currently in my 1B term and have been growing my knowledge in fields like SWE, Finance and Data Science. Welcome to my page. Feel free to explore and see some of the ideas I turn into real projects while learning along the way.",
  outro:
    "Outside of school, I like staying active. I enjoy working out and grew up playing hockey, basketball, and soccer. I also like traveling and exploring new places whenever I get the chance.",
};

export const PROJECTS = [
  {
    title: "Portfolio Optimizer",
    description:
      "Built a portfolio optimizer that uses modern portfolio theory and real-time market data to compute optimal weights based on Sharpe, volatility, and return metrics.",
    tech: ["Python", "Pandas", "NumPy", "SciPy", "Matplotlib", "yFinance"],
    link: "https://github.com/avaansh07-ux/Robo-Advising-Portfolio-Optimizer",
  },
  {
    title: "Credit Default Analyzer",
    description:
      "Machine-learning system that analyzes loan performance using structured financial data, predicting risk categories and computes default probability.",
    tech: ["Python", "Pandas", "NumPy", "XGBoost", "Scikit-Learn", "Matplotlib"],
    link: "https://github.com/avaansh07-ux/credit_risk_loaner",
  },
  {
    title: "PayWise",
    description:
      "Machine-learning system that analyzes loan performance using structured financial data, predicting risk categories and computes default probability.",
    tech: ["Python", "JavaScript", "CSS", "Flask", "MongoDB", "Chart.js"],
    link: "https://github.com/avaansh07-ux/deltahacks26",
  },
  {
    title: "Portfolio Website",
    description:
      "Fully-custom personal portfolio built with Next.js, Tailwind, Framer Motion, and deployed with Vercel. Responsive, animated, and optimized for performance.",
    tech: ["Next.js", "React", "TailwindCSS", "Framer Motion", "Vercel"],
    link: "https://github.com/avaansh07-ux/portfolio",
  },
];

export const SKILLS = {
  "Programming Languages": ["Python", "JavaScript", "CSS"],
  "Core Frameworks & Tools": ["XGBoost", "SciPy", "React / Next.js", "Pandas / NumPy", "yFinance"],
  "Technical Focus": ["Financial Modeling", "Machine Learning", "Data Science", "Full-Stack Development"],
  "Professional Skills": ["Leadership", "Team Management", "Market Research", "Consulting"],
};

export const EXPERIENCES = [
  {
    image: "/assets/experiences/venturex.jpg",
    title: "Venture X",
    role: "Growth Intern",
    date: "July 2024 - Aug 2024",
    bullets: [
      "Ideated and launched a tiered Virtual Office Membership plan after conducting competitive analysis across coworking spaces.",
      "Analyzed pricing and membership structures to inform product positioning and improve flexibility for clients.",
    ],
  },
  {
    image: "/assets/experiences/hireai.jpg",
    title: "HireAI",
    role: "Co-Founder & Chief Marketing Officer",
    date: "Oct 2023 - Aug 2024",
    bullets: [
      "Co-founded HireAI through BETA Camp, building a platform for blind resume screening to reduce hiring bias.",
      "Executed marketing strategy growing user base by ~450 and generating revenue within two months.",
    ],
  },
  {
    image: "/assets/experiences/uwmcc.jpg",
    title: "UW Management Consulting Club",
    role: "Operations Associate",
    date: "Jan 2025 - Present",
    bullets: [
      "Coordinated logistics and internal execution for club events while supporting funding pitch preparation.",
      "Managed event budgets and tracked expenditures to maintain financial accuracy and adherence.",
    ],
  },
  {
    image: "/assets/experiences/aircadets.jpg",
    title: "Royal Canadian Air Cadets",
    role: "Warrant Officer Second Class",
    date: "Oct 2019 - Jun 2025",
    bullets: [
      "Led and mentored ~110 cadets within a 300-member squadron, overseeing training, discipline, and leadership development.",
      "Delivered multiple Field Training Exercises and trained cadets in survival and operational skills.",
    ],
  },
  {
    image: "/assets/experiences/targetalpha.jpg",
    title: "Target Alpha",
    role: "President",
    date: "Sept 2024 - Jun 2025",
    bullets: [
      "Led chapter operations and earned top placements in national stock trading and stock pitch competitions.",
      "Grew social reach by 37% and taught financial literacy through structured sessions.",
    ],
  },
  {
    image: "/assets/experiences/deca.jpg",
    title: "DECA",
    role: "Entrepreneurship Executive & International Finalist",
    date: "Sept 2021 - Jun 2025",
    bullets: [
      "Ranked in the 98.8th percentile globally at DECA ICDC in Financial Team Decision Making.",
      "Developed training material and coached members in business case analysis and presentation.",
    ],
  },
];
