import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PostHeading } from "@/types";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { Home } from "lucide-react";

import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Mdx } from "@/components/mdx-components";

interface PostProps {
  params: {
    slug: string;
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const post = allPosts.find((post) => post.slug === params.slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({ params }: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: `/posts/${post._raw.flattenedPath}`,
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post || (process.env.NODE_ENV === "development" && post.status !== "published")) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: post?.title,
    description: post?.description,
  };

  return (
    <div className="container max-w-6xl pb-10">
      <nav aria-label="Breadcrumb">
        <ol role="list" className="hidden items-center gap-1 text-sm text-muted-foreground md:flex md:flex-row">
          <li>
            <Link href="/" className="block transition hover:text-muted-foreground/70" aria-label="Go to Home">
              <span className="sr-only"> Home </span>
              <Home size={14} />
            </Link>
          </li>

          <li className="rtl:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <Link href="/posts" className="block transition hover:text-muted-foreground/70">
              Blog
            </Link>
          </li>

          <li className="rtl:rotate-180">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </li>

          <li>
            <Link href="#" className="block transition hover:text-muted-foreground/70">
              {post.title}
            </Link>
          </li>
        </ol>
      </nav>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:hidden">
          <div className="mb-4 mt-1 text-sm leading-snug text-muted-foreground">
            <p className="mb-2">{`${post.readTimeMinutes} mins read`}</p>
            <time>Originally published: {format(parseISO(post.publishedDate), "LLLL d, yyyy")} </time>
            <br />
            {post.lastUpdatedDate && (
              <time> Last updated: {format(parseISO(post.lastUpdatedDate), "LLLL d, yyyy")}</time>
            )}
            d
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="table-of-contents">
              <AccordionTrigger>Table of Contents</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center rounded-md">
                  <ol className="list-none space-y-2" role="list">
                    {post.headings.map((heading: PostHeading) => (
                      <li key={heading.slug} className="list-none">
                        <Link
                          className={cn(
                            "text-sm font-bold",
                            heading.heading === 3 && "pl-6 font-normal",
                            heading.heading === 4 && "pl-8 font-normal"
                          )}
                          href={`#${heading.slug}`}
                        >
                          {heading.text}
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <article className="prose max-w-7xl dark:prose-invert prose-headings:mb-3 prose-headings:mt-8 prose-headings:font-heading prose-headings:font-bold prose-headings:leading-tight hover:prose-a:text-muted-foreground prose-a:prose-headings:no-underline lg:mr-auto lg:max-w-2xl">
          <h1 className="mb-2 font-heading">{post.title}</h1>
          {post.description && (
            <p className="mb-2 mt-0 text-xl text-slate-700 dark:text-slate-200">{post.description}</p>
          )}
          <hr className="my-4" />
          <Mdx code={post.body.code} />
          <hr className="my-4" />
          {post.tags && (
            <ul className="m-0 list-none space-x-2 p-0 text-sm text-muted-foreground">
              {post.tags.map((tag: any) => (
                <li className="inline-block p-0" key={tag.trim()}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </article>
        <aside className="hidden lg:block">
          <Card className={cn("sticky top-28 mb-4")}>
            <CardHeader>
              <CardTitle>Table of Contents</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center rounded-md pl-2">
                <ol className="list-none space-y-2" role="list">
                  {post.headings.map((heading: PostHeading) => (
                    <li key={heading.slug} className="list-none">
                      <Link
                        className={cn("text-sm font-bold", heading.heading === 3 && "pl-6 font-normal")}
                        href={`#${heading.slug}`}
                      >
                        {heading.text}
                      </Link>
                    </li>
                  ))}
                </ol>
              </div>
            </CardContent>
            <Separator />
            <CardFooter>
              <div className="mb-4 mt-1 text-sm leading-snug text-muted-foreground">
                <p className="mb-2">{`${post.readTimeMinutes} mins read`}</p>
                <time>Originally published: {format(parseISO(post.publishedDate), "LLLL d, yyyy")} </time>
                <br />
                {post.lastUpdatedDate && (
                  <time> Last updated: {format(parseISO(post.lastUpdatedDate), "LLLL d, yyyy")}</time>
                )}
              </div>
            </CardFooter>
          </Card>
        </aside>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
