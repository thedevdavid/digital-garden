import { defineNestedType } from "contentlayer/source-files";

import { slugify } from "../utils";

const tags = [
  "starter",
  "development",
  "docs",
  "freelancing",
  "opinion",
  "jamstack",
  "frontend",
  "development",
  "javascript",
  "typescript",
  "react",
  "nextjs",
  "gatsby",
  "tailwindcss",
];

const tagSlugs = tags.map((tag) => slugify(tag));

export const Tag = defineNestedType(() => ({
  name: "Tag",
  fields: {
    title: {
      type: "enum",
      required: true,
      options: tags,
    },
    // Contentlayer does not support computed fields on nested types yet
    slug: {
      type: "enum",
      required: true,
      options: tagSlugs,
    },
  },
}));
