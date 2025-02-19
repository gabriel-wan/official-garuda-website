/// <reference types="vite/client" />

export interface SocialCardProps {
    name: string;
    link: string;
    image: string;
}

export type Slide = {
    title: string;
    subtitle: string;
    description: string;
    displayImage: string;
    images: string[];
}