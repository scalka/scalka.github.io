import { defineCollection, z } from "astro:content";

const notes = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
      date: z.date(),
      tags: z.array(z.string()).optional(),
    })
    .passthrough(),
});

const work = defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
      date: z.date().optional(),
      description: z.string().optional(),
    })
    .passthrough(),
});

export const collections = { notes, work };
