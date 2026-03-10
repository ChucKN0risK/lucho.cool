// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Define a `type` and `schema` for each collection
const blog = defineCollection({
	loader: glob({ base: "./src/content/posts", pattern: "**/*.{md,mdx}" }),
	schema: ({ image }) =>
		z
			.object({
				title: z.string(),
				date: z.coerce.date(),
				description: z.string(),
				author: z.string(),
				coverImage: image(),
				tags: z.array(z.string()),
				readingTime: z.string(),
			})
			.strict(),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
	blog,
};
