import type { CollectionEntry } from "astro:content";
import createSlug from "./createSlug";

export default function (insight: CollectionEntry<"insight">) {
  const date = new Date(insight.data.date);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `/${
    insight.data.language
  }/insight/${date.getFullYear()}/${month}/${createSlug(insight.data.title)}`;
}
