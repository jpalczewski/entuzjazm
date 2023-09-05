import { z } from "astro:content";

export const dateType = z
  .string()
  .datetime({ offset: true })
  .transform((date) => new Date(date));
