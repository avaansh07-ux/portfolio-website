import Image from "next/image";
import { EXPERIENCES } from "../content";

export default function ExperienceRegion() {
  return (
    <section className="region-scroll">
      <p className="region-kicker">The Galley</p>
      <h2>Experiences</h2>
      <div className="experience-grid">
        {EXPERIENCES.map((experience) => (
          <article key={experience.title} className="experience-card">
            <Image
              src={experience.image}
              alt={experience.title}
              width={96}
              height={96}
              className="experience-image"
            />
            <div className="experience-copy">
              <h3>{experience.title}</h3>
              <p className="experience-role">{experience.role}</p>
              <p className="experience-date">{experience.date}</p>
              <ul className="gem-list">
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
