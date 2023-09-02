import Image from "next/image";
import Link from "next/link";
import { allPages, allPosts } from "contentlayer/generated";
import { ArrowRight } from "lucide-react";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";
import { sortByDate } from "@/lib/utils";
import { HeroImage } from "@/components/hero-image";
import { HeroMinimal } from "@/components/hero-minimal";
import { HeroSimple } from "@/components/hero-simple";
import { HeroVideo } from "@/components/hero-video";
import { Sidebar } from "@/components/home-sidebar";
import { Mdx } from "@/components/mdx";
import NewsletterSubscribe from "@/components/newsletter-subscribe";
import PostPreview from "@/components/post-preview";

async function getAboutPage() {
  const aboutPage = allPages.find((page) => page.slug === "about");

  if (!aboutPage) {
    null;
  }

  return aboutPage;
}

export default async function Home() {
  const aboutPage = await getAboutPage();
  const posts = allPosts
    .filter((post) => post.status === "published")
    .sort(sortByDate)
    .slice(0, siteMetadata.postsOnHomePage);

  return (
    <div className="pb-10">
      <HeroSimple
        title="Building hackin’ cool digital products around the world 🌴."
        subtitle="I'm Amy. Frontend engineer writing code and blog on the internet."
      />
      <div className="container mt-12 max-w-6xl">
        <div className="grid grid-cols-1 place-items-start justify-between gap-12 lg:grid-cols-3">
          <div className="col-span-1 w-full lg:col-span-2">
            <div className="grid grid-flow-row gap-2">
              {posts.map((post) => (
                <PostPreview key={post._id} post={post} />
              ))}
            </div>
            <Link
              href="/posts"
              className="mt-10 flex items-center py-2 text-sm text-accent-foreground underline-offset-4 hover:text-muted-foreground hover:underline"
            >
              See all posts <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          <aside className="w-full">
            <Sidebar />
          </aside>
        </div>
      </div>
      {siteMetadata.newsletterUrl && (
        <NewsletterSubscribe
          title="I also write deep dives in email"
          description="I write about coding, design, digital nomad life, and solopreneurship. Join over 1,000 other developers in
            getting better in business. Unsubscribe whenever."
          buttonText="Send me the emails"
        />
      )}
      {aboutPage && (
        <div className="container max-w-6xl">
          <h2 className="mb-8 font-heading text-4xl font-bold">Who&apos;s this girl again?</h2>
          <div className="grid grid-cols-1 place-items-start justify-between gap-12 lg:grid-cols-3">
            <div className="col-span-1 mx-auto flex flex-col items-center justify-center">
              <Image
                src="/avatar-home.png"
                alt={defaultAuthor.name}
                width={400}
                height={498}
                className="h-auto w-72 -rotate-1 hover:rotate-3"
              />
              <div className="text-center">
                <h1 className="font-heading text-2xl font-bold">{defaultAuthor.name}</h1>
                <p className="text-muted-foreground">{defaultAuthor.jobTitle}</p>
                <p className="text-muted-foreground">{defaultAuthor.company}</p>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-2">
              <article className="prose mx-auto max-w-5xl dark:prose-invert prose-headings:mb-3 prose-headings:mt-8 prose-headings:font-heading prose-headings:font-bold prose-headings:leading-tight hover:prose-a:text-accent-foreground prose-a:prose-headings:no-underline">
                <Mdx code={aboutPage.body.code} />
                <Link
                  href="/now"
                  className="mt-10 flex items-center py-2 text-sm text-accent-foreground underline-offset-4 hover:text-muted-foreground hover:underline"
                >
                  See what I&apos;m up to now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
