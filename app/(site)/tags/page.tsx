import { Metadata } from "next";
import Link from "next/link";
import { allPosts, Tag } from "@/.contentlayer/generated";
import { TagCount } from "@/types";

import siteMetadata from "@/lib/metadata";
import { normalizeAndCountTags } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tags",
    description: `All tags in ${siteMetadata.title}`,
  };
}

export default function TagsPage() {
  const tags: (Tag[] | undefined)[] = allPosts.filter((post) => post.tags).map((post) => post.tags);

  if (!tags || tags.length === 0) {
    return null;
  }

  const normalizedTags: TagCount[] = normalizeAndCountTags(tags);

  return (
    <div className="container mb-4">
      <div className="prose mx-auto max-w-5xl dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-headings:leading-tight hover:prose-a:text-accent-foreground prose-a:prose-headings:no-underline">
        <h1 className="mt-0">All posts in TAG</h1>
        <hr className="my-4" />
        <div className="grid grid-flow-row gap-2">
          <ul className="m-0 list-none space-x-2 p-0 text-sm text-muted-foreground">
            {normalizedTags.map((tag) => (
              <li className="inline-block p-0" key={tag.slug}>
                <Link href={`/tags/${tag.slug}`} className="inline-block transition hover:text-muted-foreground/70">
                  {tag.title}
                </Link>{" "}
                &middot; {tag.count}
              </li>
            ))}
          </ul>
          <ul></ul>
        </div>
      </div>
    </div>
  );
}
