import type { Project } from "../data/projects.ts";

type ProjectsProps = {
    items: Project[];
}
export function Projects({ items }: ProjectsProps) {
    return (
        <div className="project-list">
            {items.map((project) => (
                <article key={project.name}>
                    <img src={'/assets/images/thumbs/' + project.thumbnail} alt={project.name} loading="lazy" width="200" height="150" className="thumbnail"/>
                    <div>
                        <h3>{project.name}</h3>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.name}`}>Visit project <svg className="icon" aria-hidden="true"><use href="/icons.svg#external-link" /></svg></a>
                        )}
                        <div className="description" dangerouslySetInnerHTML={{ __html: project.description }} />
                    </div>
                    {project.images.length > 0 && (
                        <details>
                            <summary><svg className="icon" aria-hidden="true"><use href="/icons.svg#images" /></svg> More images of {project.name}</summary>
                            <ul>
                                {project.images.map((image, index) => (
                                    <li key={image.url}>
                                        <img src={'/assets/images/projects/' + image.url} alt={`${project.name} image ${index + 1}`} loading="lazy"/>
                                    </li>
                                ))}
                            </ul>
                        </details>
                    )}
                </article>
            ))}
        </div>
    );
}