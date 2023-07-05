import Link from "next/link";
import { Post } from "@/.contentlayer/generated";

import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface PostSeriesProps extends Post {
  title: string;
  posts: [
    {
      title: string;
      slug: string;
      status: string;
      isCurrent: boolean;
    }
  ];
}

export const PostSeries = ({ data }: { data: any }) => {
  const currentIndex = data.posts.findIndex((post) => post.isCurrent) + 1;

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle>Series: {data.title}</CardTitle>
      </CardHeader>
      <CardContent>
        Episodes: ({currentIndex}/{data.posts.length})
        <ul>
          {data.posts.map((p) => (
            <li
              key={p.slug}
              className={cn(
                "relative my-3 list-none pl-7 text-sm before:absolute before:left-1 before:top-[9px] before:h-1.5 before:w-1.5 before:rounded-full",
                p.isCurrent &&
                  "before:bg-accent-foreground/90 before:ring-[3px] before:ring-purple-400/20 before:ring-offset-1 before:ring-offset-black/10",
                !p.isCurrent &&
                  "font-bold before:bg-primary/30 hover:before:bg-accent-foreground/90 hover:before:ring-[3px] hover:before:ring-purple-400/20 hover:before:ring-offset-1 hover:before:ring-offset-black/10"
              )}
            >
              {p.status === "published" ? (
                p.isCurrent ? (
                  <span>{p.title}</span>
                ) : (
                  <Link
                    className="transition-colors duration-200 ease-in-out hover:text-accent-foreground"
                    href={`/posts/${p.slug}`}
                  >
                    {p.title}
                  </Link>
                )
              ) : (
                <span>{p.title}</span>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
