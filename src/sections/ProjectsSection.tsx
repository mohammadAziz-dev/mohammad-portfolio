import { projects } from '../content';
import ExternalLink from '../components/ExternalLink';
import { useLanguage } from '../i18n/LanguageContext';

export default function ProjectsSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section muted">
      <div className="container">
        <p className="eyebrow blue">{t.projects.eyebrow}</p>
        <h2>{t.projects.title}</h2>

        {projects.map((project) => {
          const translation = t.projects.items[project.id];

          return (
            <article className="project" key={project.id}>
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
                <small>{translation.type}</small>
              </div>

              <div className="project-content">
                <p className="eyebrow blue">{translation.type}</p>
                <h3>{project.title}</h3>
                <p>{translation.description}</p>

                <div className="tags">
                  {project.stack.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.map((link) => (
                    <ExternalLink href={link.url} key={link.id}>
                      {t.projects.links[link.id]}
                    </ExternalLink>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
