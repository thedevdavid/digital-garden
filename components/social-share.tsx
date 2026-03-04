import Link from "next/link";
import { SocialProfile } from "@/types";
import { Mail } from "lucide-react";
import { siFacebook, siX, siYcombinator } from "simple-icons";

import { Button, ButtonProps } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface SocialShareProps {
  url: string;
  text?: string;
}
export const SocialShare = ({ url, text }: SocialShareProps) => {
  const encodedUrl = encodeURIComponent(url);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Share</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Share Post</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="mr-2 h-3 w-3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={siX.path}></path>
            </svg>
            Twitter
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="mr-2 h-3 w-3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={siFacebook.path}></path>
            </svg>
            Facebook
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="mr-2 h-3 w-3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
            </svg>
            LinkedIn
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href={`https://news.ycombinator.com/submitlink?u=${encodedUrl}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="mr-2 h-3 w-3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={siYcombinator.path}></path>
            </svg>
            Hacker News
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href={`mailto:info@example.com?&subject=&cc=&bcc=&body=${encodedUrl}%20${text}`}
            rel="noreferrer noopener"
            target="_blank"
          >
            <Mail className="mr-2 h-3 w-3" />
            Email
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
