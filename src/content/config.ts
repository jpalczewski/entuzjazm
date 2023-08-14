// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const insightCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    language: z.enum(["pl", "en"]),
    date: z.string().datetime(),
    relatedInsights: z.array(reference('insight')).optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  insight: insightCollection,
};
