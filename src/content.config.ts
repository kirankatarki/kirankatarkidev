import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    github: z.url(),
    liveDemo: z.url().optional(),
    featured: z.boolean().default(false),
    order: z.number().optional(),
    coverImage: z.string().optional(),
  }),
});

export const collections = { projects };
