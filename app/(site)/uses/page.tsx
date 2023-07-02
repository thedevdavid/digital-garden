import { Metadata } from "next";
import { format, parseISO } from "date-fns";
import { AlertTriangle } from "lucide-react";

import { hardware, software } from "@/lib/uses-data";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Uses",
    description: "Stuff I use",
  };
}

export default async function SocialPage() {
  return (
    <div className="container pb-10">
      <article className="prose mx-auto max-w-5xl dark:prose-invert prose-headings:mb-3 prose-headings:mt-8 prose-headings:font-heading prose-headings:font-bold prose-headings:leading-tight hover:prose-a:text-accent-foreground prose-a:prose-headings:no-underline">
        <h1 className="mt-0">Uses</h1>
        <p className="m-0 text-xl ">
          <p>
            These are the tools I use to get my work done. Links marked with (*) are affiliate links. It does not cost
            you anything to use them, but I get a small commission if you do.
          </p>
          <AlertTriangle className="inline h-5 w-5 text-amber-500" /> Note: This page is heavily under construction!{" "}
          <AlertTriangle className="inline h-5 w-5 text-amber-500" />
        </p>
        <time className="text-sm text-slate-500">Last updated: {format(parseISO("2023-06-11"), "LLLL d, yyyy")}</time>
        <hr className="my-4" />
        <h2>Software</h2>
        <ul>
          {software.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <h2>Hardware</h2>
        <ul>
          {hardware.map((item) => (
            <li key={item.href}>
              <a href={item.href} target="_blank">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
