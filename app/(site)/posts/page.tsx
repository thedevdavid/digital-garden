import { Metadata } from "next";
import Link from "next/link";
import { allPosts } from "@/.contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

import { defaultAuthor } from "@/lib/metadata";
import { cn } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Posts",
    description: `Posts by ${defaultAuthor.name}`,
  };
}

export default function Blog() {
  const posts = allPosts
    .filter((post) => post.status === "published")
    .sort((a, b) => compareDesc(new Date(a.publishedDate), new Date(b.publishedDate)));
  return (
    <div className="container">
      <div className="prose mx-auto max-w-5xl dark:prose-invert prose-headings:mb-3 prose-headings:mt-8 prose-headings:font-heading prose-headings:font-bold prose-headings:leading-tight hover:prose-a:text-accent-foreground prose-a:prose-headings:no-underline">
        <h1 className="mt-0 ">Latest Posts</h1>
        <hr className="my-4" />
        <div className="grid grid-flow-row gap-3">
          {posts.map((post) => (
            <article key={post._id} className="w-full">
              <Link
                href={`posts/${post.slug}`}
                className={cn(
                  "select-rounded-md block w-full rounded-md px-2 py-4 leading-none no-underline outline-none transition-colors hover:bg-foreground/20 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                )}
              >
                <h3 className="m-0 text-2xl font-bold leading-none text-foreground">{post.title}</h3>
                <div className="mb-4 mt-1 text-sm leading-snug text-muted-foreground">
                  <time dateTime={post.publishedDate}>{format(parseISO(post.publishedDate), "LLLL d, yyyy")}</time>
                  <span>{` // ${post.readTimeMinutes} mins read`}</span>
                </div>
                {post.description && (
                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{post.description}</p>
                )}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
