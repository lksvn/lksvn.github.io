import type { SelectedWorkGroup } from "../data/selectedWorks.ts";

type SelectedWorksProps = {
    items: SelectedWorkGroup[];
}

export function SelectedWorks({ items }: SelectedWorksProps) {
    return (
        <>
            {items.map((group, groupIndex) => (
                <section key={group.title}>
                    <h3>{group.title}</h3>
                    {group.works.map((work, workIndex) => {
                        const isFirst = groupIndex === 0 && workIndex === 0;
                        return (<article key={work.title}>
                            <figure>
                                <img src={'/freelance/assets/images/' + work.image} alt={work.imageAlt} width="1000" height="1000"
                                    loading={isFirst ? "eager" : "lazy"}
                                    decoding={isFirst ? undefined : "async"}
                                    fetchPriority={isFirst ? "high" : undefined}
                                    />
                                <figcaption>{work.category}</figcaption>
                            </figure>
                            <h4>{work.title}</h4>
                            <p>{work.description}</p>
                            <ul>
                                {work.tags.map((tag) => (
                                    <li key={tag}>{tag}</li>
                                ))}
                            </ul>
                        </article>);
                    })}
                </section>
            ))}
        </>
    );
}