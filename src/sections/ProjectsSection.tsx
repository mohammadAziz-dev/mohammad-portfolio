import { projects } from '../content';
import ExternalLink from '../components/ExternalLink';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section muted">
      <div className="container">
        <p className="eyebrow blue">04 / SELECTED WORK</p>
        <h2>Featured projects</h2>

        {projects.map((project) => (
          <article className="project" key={project.title}>
            <div className="project-art">
              <span className="project-symbol">
                {project.title
                  .split(' ')
                  .map((word) => word[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
              <span>{project.title}</span>
              <small>{project.type}</small>
            </div>

            <div className="project-content">
              <p className="eyebrow blue">{project.type}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="tags">
                {project.stack.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.links.map((link) => (
                  <ExternalLink href={link.url} key={link.label}>
                    {link.label}
                  </ExternalLink>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
