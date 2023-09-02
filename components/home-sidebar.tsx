import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Pencil } from "lucide-react";

import siteMetadata, { defaultAuthor } from "@/lib/metadata";
import { projects } from "@/lib/projects-data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type CardProps = React.ComponentProps<typeof Card>;

export function Sidebar({ className, ...props }: CardProps) {
  return (
    <>
      <Card className={cn("mb-4", className)} {...props}>
        <CardHeader>
          <CardTitle>Where am I currently?</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center rounded-md pl-2 hover:bg-background/40 hover:backdrop-blur-lg">
            <MapPin />
            <p className="ml-2 mr-auto text-sm font-medium leading-none">{defaultAuthor.location.city}</p>
            <Image
              src={defaultAuthor.location.media}
              alt="Los Angeles"
              width={56}
              height={56}
              className="h-16 w-16 rounded-md object-cover"
            />
          </div>
        </CardContent>
        <Separator />
        <CardFooter>
          <Button variant="ghost" className="w-full" disabled>
            Digital Nomad diaries <ArrowRight className="mr-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
      <Card className={cn(className)} {...props}>
        <CardHeader>
          <CardTitle>What am I working on?</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          {projects.slice(0, siteMetadata.projectsOnHomePage).map((project) => (
            <Link
              href={project.href}
              target="_blank"
              key={project.title.trim()}
              className="flex items-center rounded-md pl-2 hover:bg-background/40 hover:backdrop-blur-lg"
            >
              <Pencil />
              <p className="ml-2 mr-auto text-sm font-medium leading-none">{project.title}</p>
              {project.mediaType === "video" ? (
                <video autoPlay loop muted playsInline className="h-16 w-16 rounded-md object-cover">
                  <source src="/project-garden.webm" type="video/webm" />
                  <source src="/project-garden.mp4" type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={project.mediaSrc}
                  alt={project.title}
                  width={56}
                  height={56}
                  className="h-16 w-16 rounded-md object-cover"
                />
              )}
            </Link>
          ))}
        </CardContent>
        <Separator />
        <CardFooter>
          <Button variant="ghost" className="w-full" asChild>
            <Link href="/projects">
              All projects <ArrowRight className="mr-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
