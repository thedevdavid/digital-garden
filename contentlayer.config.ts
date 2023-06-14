import { makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { Page } from "./lib/content-definitions/page";
import { Post } from "./lib/content-definitions/post";

export const HEADING_LINK_ANCHOR = `before:content-['#'] before:italic before:-ml-1 before:text-muted-foreground-100/0 hover:before:text-muted-foreground-100/50 pl-1 -ml-1`;

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page],

  mdx: {
    esbuildOptions(options) {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [
      [rehypeSlug],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: [HEADING_LINK_ANCHOR],
          },
        },
      ],
    ],
  },
});
