import servicesData from './services.json';

export type Service = {
    title: string;
    description: string;
    deliverables: string[];
    whatsappUrl: string;
    note?: string;
}

export type ServiceGroup = {
    title: string;
    services: Service[];
}

export const services = servicesData satisfies ServiceGroup[];
