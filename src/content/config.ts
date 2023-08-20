import { z, defineCollection, reference } from "astro:content";

const languageType = z.enum(["pl", "en"]);
const metadataSchema = {
  title: z.string(),
  tags: z.array(z.string()).optional(),
  language: languageType,
  date: z
    .string()
    .datetime({ offset: true })
    .transform((date) => new Date(date)),
  referencedUrls: z
    .array(z.object({ description: z.string(), url: z.string().url() }))
    .optional(),
  urlsDescription: z.string().optional(),
};

const insightCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    ...metadataSchema,
    relatedInsights: z.array(reference("insight")).optional(),
  }),
});

const personalCollection = defineCollection({
  type: "content",
  schema: z.object({
    ...metadataSchema,
    youtubeVideoId: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  insight: insightCollection,
  personal: personalCollection,
};
