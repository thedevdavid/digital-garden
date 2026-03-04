import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import GithubSlugger from "github-slugger";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { z } from "zod";

export const HEADING_LINK_ANCHOR = `anchor-heading-link`;

const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const noOfWords = text.split(/\s/g).length;
  const minutes = noOfWords / wordsPerMinute;
  return Math.ceil(minutes);
};

const mdxOptions = {
  remarkPlugins: [remarkGfm, remarkMath],
  rehypePlugins: [
    rehypeKatex,
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: "wrap",
        properties: {
          className: [HEADING_LINK_ANCHOR],
        },
      },
    ],
    [
      rehypePrettyCode,
      {
        theme: "github-dark",
        onVisitLine(node: any) {
          if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }];
          }
          node.properties.className = ["line"];
        },
        onVisitHighlightedLine(node: any) {
          node.properties.className?.push("line--highlighted");
        },
      },
    ],
  ],
};

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedDate: z.string(),
    lastUpdatedDate: z.string().optional(),
    tags: z.array(z.string()).optional(),
    series: z
      .object({
        title: z.string(),
        order: z.number(),
      })
      .optional(),
    author: z
      .object({
        name: z.string(),
        image: z.string().optional(),
      })
      .optional(),
    status: z.enum(["draft", "published"]),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, mdxOptions as any);

    const slugger = new GithubSlugger();
    const tagSlugs = document.tags
      ? document.tags.map((tag) => {
          slugger.reset();
          return slugger.slug(tag);
        })
      : null;

    const readTimeMinutes = calculateReadingTime(document.content);

    const headingSluger = new GithubSlugger();
    const regXHeader = /\n\n(#{1,6})\s+(.+)/g;
    const headings = Array.from(document.content.matchAll(regXHeader)).map((match) => {
      const flag = match[1];
      const headingContent = match[2];
      return {
        heading: flag?.length,
        text: headingContent,
        slug: headingContent ? headingSluger.slug(headingContent) : undefined,
      };
    });

    const slug = document._meta.fileName.replace(/\.mdx$/, "");

    return {
      ...document,
      mdx,
      slug,
      tagSlugs,
      readTimeMinutes,
      headings,
      _id: document._meta.filePath,
      _raw: {
        sourceFilePath: document._meta.filePath,
        sourceFileName: document._meta.fileName,
        sourceFileDir: document._meta.directory,
        flattenedPath: document._meta.path,
        contentType: "mdx",
      },
    };
  },
});

const pages = defineCollection({
  name: "pages",
  directory: "content/pages",
  include: "**/*.mdx",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lastUpdatedDate: z.string().optional(),
    status: z.enum(["draft", "published"]),
    content: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, mdxOptions as any);
    const slug = document._meta.fileName.replace(/\.mdx$/, "");

    return {
      ...document,
      mdx,
      slug,
      _id: document._meta.filePath,
      _raw: {
        sourceFilePath: document._meta.filePath,
        sourceFileName: document._meta.fileName,
        sourceFileDir: document._meta.directory,
        flattenedPath: document._meta.path,
        contentType: "mdx",
      },
    };
  },
});

export default defineConfig({
  content: [posts, pages],
});
