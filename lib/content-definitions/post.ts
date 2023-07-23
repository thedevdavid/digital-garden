// Inspired by https://delba.dev/blog/next-blog-build-time-syntax-highlighting
import { defineDocumentType } from "contentlayer/source-files";
import GithubSlugger from "github-slugger";

import { calculateReadingTime } from "../utils";
import { Author } from "./author";
import { Series } from "./series";

export const tagOptions = [
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

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    publishedDate: {
      type: "date",
      required: true,
    },
    lastUpdatedDate: {
      type: "date",
    },
    tags: {
      type: "list",
      of: { type: "string", options: tagOptions },
      required: false,
    },
    series: {
      type: "nested",
      of: Series,
    },
    author: {
      type: "nested",
      of: Author,
    },
    status: {
      type: "enum",
      options: ["draft", "published"],
      required: true,
    },
  },
  computedFields: {
    tagSlugs: {
      type: "list",
      resolve: async (doc) => {
        if (doc.tags) {
          // make a new array of tags to use them in computedFields https://github.com/contentlayerdev/contentlayer/issues/149
          const tags = [...(doc?.tags ?? ([] as string[]))];
          const slugger = new GithubSlugger();

          return tags.map((tag) => slugger.slug(tag));
        }
        return null;
      },
    },
    readTimeMinutes: {
      type: "number",
      resolve: (doc) => calculateReadingTime(doc.body.raw),
    },
    headings: {
      type: "json",
      resolve: async (doc) => {
        // use same package as rehypeSlug so toc and sluggified headings match
        // https://github.com/rehypejs/rehype-slug/blob/main/package.json#L36
        const slugger = new GithubSlugger();

        // https://stackoverflow.com/a/70802303
        const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g;

        const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            heading: flag?.length,
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          };
        });

        return headings;
      },
    },
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));
