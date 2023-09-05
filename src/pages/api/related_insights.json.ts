import { getCollection } from "astro:content";

export async function GET() {
  const insights = await getCollection("insight");

  const relatedProjectsDict: Record<string, string[]> = {};

  insights.forEach((entry) => {
    entry.data.relatedProjects?.forEach((relatedProject) => {
      relatedProjectsDict[relatedProject.id] = [
        ...(relatedProjectsDict[relatedProject.id] || []),
        entry.id,
      ];
    });
  });

  return new Response(JSON.stringify(relatedProjectsDict));
}
