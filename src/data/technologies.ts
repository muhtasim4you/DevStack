import technologyData from "./technologies.json";

export type TechnologyCategory =
    | "Frontend"
    | "Backend"
    | "Database"
    | "Language"
    | "Styling"
    | "DevOps"
    | "Tools";

export type TechnologyDifficulty =
    | "Beginner-Friendly"
    | "Intermediate"
    | "Advanced";

export type Technology = {
    id: string;
    name: string;
    category: TechnologyCategory;
    description: string;
    icon: string;
    rating: number;
    difficulty: TechnologyDifficulty;
    badge: string;
    accent: string;
};

export const technologies = technologyData as Technology[];
