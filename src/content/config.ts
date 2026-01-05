import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        challenge: z.string(),
        process: z.string(),
        techStack: z.array(z.string()),
        repoLink: z.string().url(),
        order: z.number(),
        homepage: z.boolean().default(false),
    }),
});

export const collections = {
    'projects': projectsCollection,
};
