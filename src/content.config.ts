import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    github: z.string().url(),
    liveDemo: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { projects };
