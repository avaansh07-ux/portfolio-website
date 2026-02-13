"use client";

export default function Skills() {
  return (
    <main className="space-y-10">

      <h1 className="text-4xl font-bold mb-6">Skills</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">

        {/* Programming */}
        <SkillCard title="Programming Languages">
          <Skill>Python</Skill>
          <Skill>JavaScript</Skill>
          <Skill>CSS</Skill>
        </SkillCard>

        {/* Frameworks */}
        <SkillCard title="Core Frameworks & Tools">
          <Skill>XGBoost</Skill>
          <Skill>SciPy</Skill>
          <Skill>React / Next.js</Skill>
          <Skill>Pandas / NumPy</Skill>
          <Skill>yFinance</Skill>
        </SkillCard>

        {/* Technical Focus */}
        <SkillCard title="Technical Focus">
          <Skill>Financial Modeling</Skill>
          <Skill>Machine Learning</Skill>
          <Skill>Data Science</Skill>
          <Skill>Full-Stack Development</Skill>
        </SkillCard>

        {/* Professional */}
        <SkillCard title="Professional Skills">
          <Skill>Leadership</Skill>
          <Skill>Team Management</Skill>
          <Skill>Market Research</Skill>
          <Skill>Consulting</Skill>
        </SkillCard>

      </div>
    </main>
  );
}

/* ---------- Components ---------- */

function SkillCard({ title, children }) {
  return (
    <div className="panel-card">
      <h2 className="text-2xl font-semibold mb-4 text-gray-200">{title}</h2>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function Skill({ children }) {
  return (
    <li className="flex items-center gap-3 text-gray-300">
      <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
      {children}
    </li>
  );
}
