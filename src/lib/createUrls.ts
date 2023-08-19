import type { CollectionEntry } from "astro:content";
import createSlug from "./createSlug";

export function createInsightUrl(insight: CollectionEntry<"insight">) {
  const date = new Date(insight.data.date);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `/${
    insight.data.language
  }/insight/${date.getFullYear()}/${month}/${createSlug(insight.data.title)}`;
}

export function createPersonalUrl(personal: CollectionEntry<"personal">) {
  const month = (personal.data.date.getMonth() + 1).toString().padStart(2, "0");
  return `/${
    personal.data.language
  }/personal/${personal.data.date.getFullYear()}/${month}/${createSlug(
    personal.data.title,
  )}`;
}
