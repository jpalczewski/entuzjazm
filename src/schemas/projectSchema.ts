import { z } from "astro:content";
import { languageType } from "./languageType";
import { dateType } from "./dateType";

const projectTypes = z.enum(["project", "certificate"]);
const translatedStringType = z.map(languageType, z.string());

const projectSchema = z.object({
  type: projectTypes,
  name: translatedStringType,
  description: translatedStringType,
  link: z.string(),

  startDate: dateType,
  endDate: dateType,
});

export default projectSchema;
