// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";

const languageType = z.enum(["pl", "en"]);
// 2. Define a `type` and `schema` for each collection
const insightCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    language: languageType,
    date: z.string().datetime(),
    relatedInsights: z.array(reference("insight")).optional(),
    referencedUrls: z
      .array(z.object({ description: z.string(), url: z.string().url() }))
      .optional(),
  }),
});

const personalCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()).optional(),
    language: languageType,
    date: z
      .string()
      .datetime()
      .transform((date) => new Date(date)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  insight: insightCollection,
  personal: personalCollection,
};
