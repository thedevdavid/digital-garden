import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import siteMetadata from "@/lib/metadata";
import { getTagsWithCount } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tags",
    description: `All tags in ${siteMetadata.title}`,
  };
}

export default function TagsPage() {
  const posts = allPosts.filter((post) => post.status === "published");

  const tags = getTagsWithCount(posts);

  if (!tags || Object.keys(tags).length === 0) {
    notFound();
  }

  return (
    <div className="container mb-4">
      <div className="prose mx-auto max-w-5xl dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-headings:leading-tight hover:prose-a:text-accent-foreground prose-a:prose-headings:no-underline">
        <h1 className="mt-0">All tags</h1>
        <hr className="my-4" />
        <div className="grid grid-flow-row gap-2">
          <ul className="flex list-none flex-wrap gap-2 p-0">
            {Object.keys(tags).map((tag) => {
              return (
                <li className="list-none" key={tag}>
                  <Link href={`/tags/${tag}`} className="group">
                    <Badge
                      variant="outline"
                      className="inline-block rounded-full border border-muted-foreground/50 bg-muted-foreground/10 px-3 py-1 text-base font-medium text-muted-foreground transition hover:bg-muted-foreground hover:text-foreground"
                    >
                      <span>
                        {tag} &middot; ({tags[tag]})
                      </span>
                    </Badge>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
