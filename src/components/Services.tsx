import type { ServiceGroup } from "../data/services.ts";
import { Icon } from "./Icon.tsx";

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
                            <a href={service.whatsappUrl} target="_blank" rel="noopener noreferrer">Vamos conversar <Icon name="arrow-right"/></a>
                        </article>
                    ))}
                </section>
            ))}
        </>
    );
}