import { getCollection } from "astro:content";
import type { contentType } from "./contentType";

export default async function (collectionName: contentType) {
  const posts = await getCollection(collectionName);

  const paths = posts.flatMap((post) => {
    const lang = post.data.language;
    const uniqueTags = Array.from(new Set(post.data.tags || []));

    return uniqueTags.map((tag) => {
      const filteredPosts = posts.filter(
        (p) => p.data.language === lang && p.data.tags?.includes(tag),
      );

      return {
        params: { tag: tag, lang: lang },
        props: { posts: filteredPosts },
      };
    });
  });

  return paths;
}
