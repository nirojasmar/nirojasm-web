import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";

export const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
    return builder.image(source);
}

export interface Post {
    _id: string;
    _type: "post";
    title: string;
    slug: {
        current: string;
    };
    author: string;
    description?: string;
    mainImage?: {
        asset: {
            _ref: string;
        };
    };
    categories?: {
        title: string;
    }[];
    pubDate: string;
    content: string;
    tags?: string[];
    featured?: boolean;
}

export interface Project {
    _id: string;
    _type: "project";
    title: string;
    description: string;
    challenge: string;
    process: string;
    techStack: string[];
    repoLink: string;
    order: number;
    homepage: boolean;
    slug: {
        current: string;
    };
    mainImage?: {
        asset: {
            _ref: string;
        };
    };
}

export async function getPosts(): Promise<Post[]> {
    const query = `*[_type == "post"] | order(pubDate desc) {
        _id,
        _type,
        title,
        slug,
        author,
        description,
        mainImage,
        categories[]->{title},
        pubDate,
        content,
        tags,
        featured
    }`;
    return await sanityClient.fetch(query);
}

export async function getPost(slug: string): Promise<Post> {
    const query = `*[_type == "post" && slug.current == $slug][0] {
        _id,
        _type,
        title,
        slug,
        author,
        description,
        mainImage,
        categories[]->{title},
        pubDate,
        content,
        tags,
        featured
    }`;
    return await sanityClient.fetch(query, { slug });
}

export async function getProjects(): Promise<Project[]> {
    const query = `*[_type == "project"] | order(order asc)`;
    return await sanityClient.fetch(query);
}
