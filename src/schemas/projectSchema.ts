import { z } from "astro:content";
import { languageType } from "./languageType";
import { dateType } from "./dateType";

const projectTypes = z.enum(["project", "certificate"]);
const translatedStringType = z
  .array(
    z.object({
      language: languageType,
      string: z.string(),
    }),
  )
  .transform((item) =>
    Object.assign({}, ...item.map((el) => ({ [el.language]: el.string }))),
  );

const projectSchema = z.object({
  type: projectTypes,
  name: translatedStringType,
  description: translatedStringType,
  link: z.string(),

  startDate: dateType,
  endDate: dateType.optional(),
});

export default projectSchema;
