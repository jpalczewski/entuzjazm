import { z, defineCollection, reference } from "astro:content";
import { languageType } from "../schemas/languageType";
import projectSchema from "src/schemas/projectSchema";
import { dateType } from "../schemas/dateType";

const metadataSchema = {
  title: z.string(),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  language: languageType,
  date: dateType,
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

const projectCollection = defineCollection({
  type: "data",
  schema: projectSchema,
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  insight: insightCollection,
  personal: personalCollection,
  project: projectCollection,
};
