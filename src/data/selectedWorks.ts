import selectedWorksData from './selectedWorks.json';

export type SelectedWork = {
    title: string;
    category: string;
    description: string;
    tags: string[];
    image: string;
    imageAlt: string;
}

export type SelectedWorkGroup = {
    title: string;
    works: SelectedWork[];
}

export const selectedWorks = selectedWorksData satisfies SelectedWorkGroup[];
