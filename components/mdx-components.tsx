import Image from "next/image";
import Link from "next/image";
import { Code } from "bright";
import { useMDXComponent } from "next-contentlayer/hooks";

import { fileIcons } from "@/lib/bright-config";
import CTA from "@/components/cta";

function YouTubeVideo({ id }: { id: string }) {
  return (
    <div>
      <iframe
        className="aspect-video w-full"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function CustomLink(props: any) {
  const href = props.href;
  const isExternalLink = href && href.startsWith("http");

  if (isExternalLink) {
    return <a target="_blank" {...props} />;
  }
  return (
    // TODO: Figure out how to type this
    // @ts-expect-error
    <Link href={href}>{props.children}</Link>
  );
}

Code.theme = {
  dark: "github-dark",
  light: "github-light",
  lightSelector: "html.light",
};
Code.extensions = [fileIcons as any];
Code.lineNumbers = true;

const components = {
  Image,
  CTA,
  YouTubeVideo,
  pre: Code,
  // a: CustomLink,
};

interface MdxProps {
  code: string;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  // TODO: Figure out how to type this
  return <Component components={components as any} />;
}
