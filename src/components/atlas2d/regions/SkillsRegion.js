import { SKILLS } from "../content";

export default function SkillsRegion() {
  return (
    <section className="region-scroll">
      <p className="region-kicker">Treasure Vault</p>
      <h2>Skills</h2>
      <div className="region-grid">
        {Object.entries(SKILLS).map(([group, items]) => (
          <article key={group} className="parchment-card">
            <h3>{group}</h3>
            <ul className="gem-list">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
