import type { ServiceGroup } from "../data/services.ts";

type ServicesProps = {
    items: ServiceGroup[];
}

export function Services({ items }: ServicesProps) {
    return (
        <>
            {items.map((group) => (
                <section key={group.title}>
                    <h3>{group.title}</h3>
                    {group.services.map((service) => (
                        <article key={service.title}>
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                            <ul>
                                {service.deliverables.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                            {service.note && <p><em>{service.note}</em></p>}
                            <a href={service.whatsappUrl} target="_blank" rel="noopener noreferrer">Vamos conversar</a>
                        </article>
                    ))}
                </section>
            ))}
        </>
    );
}