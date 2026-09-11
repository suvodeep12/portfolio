import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		status: z.enum(['Shipped', 'In progress', 'Archived', 'Shelved']),
		summary: z.string(),
		order: z.number(),
		placement: z.enum(['featured', 'archive']),
		presentation: z.enum(['immersive', 'playable', 'evidence']),
		preview: z.enum(['live', 'image', 'none']),
		liveUrl: z.url().optional(),
		sourceUrl: z.url(),
		fallbackImage: z.url().optional(),
		fallbackAlt: z.string().optional(),
		related: z.array(z.string()).default([]),
	}),
});

export const collections = { projects };
