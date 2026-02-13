import { PROJECTS } from "../content";

export default function ProjectsRegion() {
  return (
    <section className="region-scroll">
      <p className="region-kicker">Pirate War Table</p>
      <h2>Projects</h2>
      <div className="region-grid">
        {PROJECTS.map((project) => (
          <article key={project.title} className="parchment-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="pill-row">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Source
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
