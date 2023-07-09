import { Post } from "@/.contentlayer/generated"
import { CalendarDays, Timer } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { format, parseISO } from "date-fns"

type PostPreviewProps = {
  post: Post
}

const PostPreview = ({ post }: PostPreviewProps) => {
  return (
    <article className="w-full">
    <Link
      href={`posts/${post.slug}`}
      className={cn(
        "select-rounded-md block w-full rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-foreground/10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
      )}
    >
      <h3 className="text-2xl font-bold text-foreground my-2">{post.title}</h3>
      <div className="text-sm leading-snug text-muted-foreground flex gap-2">
        <div className="flex gap-1 items-center">
          <CalendarDays size={16} />
          <time dateTime={post.publishedDate}>{format(parseISO(post.publishedDate), "LLLL d, yyyy")}</time>
        </div>
        <span className="opacity-50">|</span>
        <div className="flex gap-1 items-center">
          <Timer size={16} />
          <span>{`${post.readTimeMinutes} mins read`}</span>
        </div>
      </div>
      { post?.tags && 
        <ul className="flex flex-wrap gap-2 p-0 my-4">
          { post.tags.map((tag: any) => (
          <li className="inline-block list-none border rounded-full border-muted-foreground/50 px-3 py-1 text-xs text-muted-foreground m-0 bg-muted-foreground/10" key={tag.trim()}>
            {tag}
          </li>
          ))}
        </ul>
      }
      {post.description && (
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{post.description}</p>
      )}
    </Link>
  </article>
  )
}

export default PostPreview