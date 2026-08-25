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
                </article>
            ))}
        </>
    );
}