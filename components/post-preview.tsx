import Link from "next/link";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { CalendarDays, Timer } from "lucide-react";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

type PostPreviewProps = {
  post: Post;
};

const PostPreview = ({ post }: PostPreviewProps) => {
  return (
    <article className="w-full">
      <Link
        href={`/posts/${post.slug}`}
        className={cn(
          "select-rounded-md block w-full rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-foreground/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        )}
      >
        <h3 className="my-2 text-2xl font-bold text-foreground">{post.title}</h3>
        <div className="flex gap-2 text-sm leading-snug text-muted-foreground">
          <div className="flex items-center gap-1">
            <CalendarDays size={16} />
            <time dateTime={post.publishedDate}>{format(parseISO(post.publishedDate), "LLLL d, yyyy")}</time>
          </div>
          <span className="opacity-50">|</span>
          <div className="flex items-center gap-1">
            <Timer size={16} />
            <span>{`${post.readTimeMinutes} mins read`}</span>
          </div>
        </div>
        {post?.tags && (
          <ul className="my-4 flex list-none flex-wrap gap-2 p-0">
            {post.tags.map((tag: string) => (
              <li key={tag}>
                <Badge
                  variant="outline"
                  className="inline-block rounded-full border border-muted-foreground/50 bg-muted-foreground/10 px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {tag}
                </Badge>
              </li>
            ))}
          </ul>
        )}
        {post.description && (
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{post.description}</p>
        )}
      </Link>
    </article>
  );
};

export default PostPreview;
