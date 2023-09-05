import { getCollection } from "astro:content";
import { createInsightUrl } from "src/lib/createUrls";

interface relatedInsight {
  title: string;
  url: string;
  tags: string[] | undefined;
}

export async function GET() {
  const insights = await getCollection("insight");

  const relatedProjectsDict: Record<string, relatedInsight[]> = {};

  insights.forEach((entry) => {
    entry.data.relatedProjects?.forEach((relatedProject) => {
      relatedProjectsDict[relatedProject.id] = [
        ...(relatedProjectsDict[relatedProject.id] || []),
        {
          title: entry.data.title,
          url: createInsightUrl(entry),
          tags: entry.data.tags,
        },
      ];
    });
  });

  return new Response(JSON.stringify(relatedProjectsDict));
}
