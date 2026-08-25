import type { Project } from "../data/projects.ts";

type ProjectsProps = {
    items: Project[];
}
export function Projects({ items }: ProjectsProps) {
    return (
        <>
            {items.map((project) => (
                <article key={project.name}>
                    <h3>{project.name}</h3>
                    <img src={'/assets/images/thumbs/' + project.thumbnail} alt={project.name} loading="lazy"/>
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer">🔗 View Project</a>
                    )}
                    <div dangerouslySetInnerHTML={{ __html: project.description }} />
                    {project.images.length > 0 && (
                        <details>
                            <summary>More images of {project.name}</summary>
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
        </>
    );
}