import { Metadata } from "next";
import { allPosts } from "contentlayer/generated";

import { defaultAuthor } from "@/lib/metadata";
import { sortByDate } from "@/lib/utils";
import PostPreview from "@/components/post-preview";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Posts",
    description: `Posts by ${defaultAuthor.name}`,
  };
}

export default function Blog() {
  const posts = allPosts.filter((post) => post.status === "published").sort(sortByDate);

  return (
    <div className="container mb-4">
      <div className="prose mx-auto max-w-5xl dark:prose-invert prose-headings:font-heading prose-headings:font-bold prose-headings:leading-tight hover:prose-a:text-accent-foreground prose-a:prose-headings:no-underline">
        <h1 className="mt-0">Latest Posts</h1>
        <hr className="my-4" />
        <div className="grid grid-flow-row gap-2">
          {posts.map((post) => (
            <PostPreview post={post} key={post._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
