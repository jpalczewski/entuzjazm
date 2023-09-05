import { getCollection } from "astro:content";

export async function GET() {
  const projects = await getCollection("project");
  const tagsSet = new Set<string>();

  projects.forEach((project) => {
    project.data.tags.forEach((tag) => tagsSet.add(tag));
  });

  return new Response(JSON.stringify(Array.from(tagsSet)));
}
