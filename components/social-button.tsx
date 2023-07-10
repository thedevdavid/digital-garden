import Link from "next/link";
import { SocialProfile } from "@/types";
import type { SimpleIcon } from "simple-icons";
import * as Icons from "simple-icons";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";

interface SocialButtonProps extends ButtonProps {
  platform: SocialProfile;
}

export function SocialButton({ platform, ...props }: SocialButtonProps) {
  const platformCamel = platform.name.toLocaleLowerCase().charAt(0).toUpperCase() + platform.name.slice(1);

  const platformIconIdentifier = `si${platformCamel}`;

  const renderIcon = () => {
    const icon: SimpleIcon = Icons[platformIconIdentifier as keyof typeof Icons];
    if (!icon) {
      return null;
    }
    return (
      <svg role="img" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d={icon.path}></path>
      </svg>
    );
  };

  return (
    <Button asChild {...props}>
      <Link href={platform.link} rel={platform.name === "mastodon" ? "me" : "noreferrer noopener"} target="_blank">
        {renderIcon()}
        <span className={cn(props.size === "icon" ? "sr-only" : "ml-2")}>Go to my {platformCamel} profile</span>
      </Link>
    </Button>
  );
}
