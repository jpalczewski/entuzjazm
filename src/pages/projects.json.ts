import { getCollection, type CollectionEntry } from "astro:content";

export async function GET() {
  const projects = await getCollection("project");
  return new Response(
    JSON.stringify(
      projects.map((entry: CollectionEntry<"project">) => ({
        [entry.id]: entry.data,
      })),
    ),
  );
}
