import projectsData from "./projects.json";

export type Project = {
    name: string;
    description: string;
    images: { url: string; }[];
    thumbnail: string;
    link: string;
    col: boolean;
}

export const projects = projectsData satisfies Project[];