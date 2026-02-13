"use client";

export default function Experience() {
  return (
    <main className="space-y-10">

      <h1 className="text-4xl font-bold mb-6">Experiences</h1>

      <div className="space-y-8 flex flex-col items-center">

        {/* Venture X */}
        <ExperienceCard
          image="/experiences/venturex.jpg"
          title="Venture X"
          role="Growth Intern"
          date="July 2024 – Aug 2024"
        >
          <li>
            Ideated and launched a tiered Virtual Office Membership plan after
            conducting competitive analysis across coworking spaces.
          </li>
          <li>
            Analyzed pricing and membership structures to inform product
            positioning and improve flexibility for clients.
          </li>
        </ExperienceCard>

        {/* HireAI */}
        <ExperienceCard
          image="/experiences/hireai.jpg"
          title="HireAI"
          role="Co-Founder & Chief Marketing Officer"
          date="Oct 2023 – Aug 2024"
        >
          <li>
            Co-founded HireAI through BETA Camp, building a platform for blind
            resume screening to reduce hiring bias.
          </li>
          <li>
            Executed marketing strategy growing user base by ~450 and generating
            revenue within two months.
          </li>
        </ExperienceCard>

        {/* Management Consulting Club */}
        <ExperienceCard
          image="/experiences/uwmcc.jpg"
          title="UW Management Consulting Club"
          role="Operations Associate"
          date="Jan 2025 – Present"
        >
          <li>
            Coordinated logistics and internal execution for club events while
            supporting funding pitch preparation.
          </li>
          <li>
            Managed event budgets and tracked expenditures to maintain financial
            accuracy and adherence.
          </li>
        </ExperienceCard>

        {/* Air Cadets */}
        <ExperienceCard
          image="/experiences/aircadets.jpg"
          title="Royal Canadian Air Cadets"
          role="Warrant Officer Second Class"
          date="Oct 2019 – Jun 2025"
        >
          <li>
            Led and mentored ~110 cadets within a 300-member squadron,
            overseeing training, discipline, and leadership development.
          </li>
          <li>
            Delivered multiple Field Training Exercises and trained cadets in
            survival and operational skills.
          </li>
        </ExperienceCard>

        {/* Target Alpha */}
        <ExperienceCard
          image="/experiences/targetalpha.jpg"
          title="Target Alpha"
          role="President"
          date="Sept 2024 – Jun 2025"
        >
          <li>
            Led chapter operations and earned top placements in national stock
            trading and stock pitch competitions.
          </li>
          <li>
            Grew social reach by 37% and taught financial literacy through
            structured sessions.
          </li>
        </ExperienceCard>

        {/* DECA */}
        <ExperienceCard
          image="/experiences/deca.jpg"
          title="DECA"
          role="Entrepreneurship Executive & International Finalist"
          date="Sept 2021 – Jun 2025"
        >
          <li>
            Ranked in the 98.8th percentile globally at DECA ICDC in Financial
            Team Decision Making.
          </li>
          <li>
            Developed training material and coached members in business case
            analysis and presentation.
          </li>
        </ExperienceCard>

      </div>
    </main>
  );
}


/* ---------------- Card Component ---------------- */

function ExperienceCard({ image, title, role, date, children }) {
  return (
    <div className="panel-card flex gap-6 items-start">

      {/* IMAGE */}
      {image && (
        <img
          src={image}
          className="w-24 h-24 object-cover rounded-xl border border-white/20"
        />
      )}

      {/* TEXT */}
      <div className="flex-1">
        <h2 className="text-2xl text-gray-200 font-semibold">{title}</h2>
        <p className="text-purple-300 font-medium">{role}</p>
        <p className="text-gray-400 text-sm mb-4">{date}</p>

        <ul className="space-y-2 text-gray-300 list-disc pl-5">
          {children}
        </ul>
      </div>

    </div>
  );
}
