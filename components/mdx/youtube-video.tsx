import { cn } from "@/lib/utils";

type YouTubeVideoProps = {
  id: string;
};

export function YouTubeVideo({ id, className, ...props }: YouTubeVideoProps & React.HTMLAttributes<HTMLIFrameElement>) {
  return (
    <div className={cn("mx-auto aspect-video", className)}>
      <iframe
        className="h-full w-full"
        src={"https://www.youtube.com/embed/" + id}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        {...props}
      ></iframe>
    </div>
  );
}
