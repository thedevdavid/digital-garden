import { Tag } from "@/.contentlayer/generated";
import { TagCount } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200; // Average humans read about 200-250 words per minute.
  const noOfWords = text.split(/\s/g).length;

  const minutes = noOfWords / wordsPerMinute;
  const readTime = Math.ceil(minutes);

  return readTime;
};

// Based on https://gist.github.com/codeguy/6684588
export const slugify = (text: string): string => {
  return text
    .toString()
    .normalize("NFKD")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\_/g, "-")
    .replace(/\-\-+/g, "-")
    .replace(/\-$/g, "");
};

export const normalizeAndCountTags = (tagsArray: (Tag[] | undefined)[]) => {
  if (!tagsArray || tagsArray.length === 0) {
    return [];
  }
  const tagCounts = tagsArray.flat().reduce((acc, tag) => {
    const slug = tag.slug.toLowerCase();
    const existingTagIndex = acc.findIndex((t) => t.slug === slug);
    if (existingTagIndex !== -1) {
      const existingTag = acc[existingTagIndex];
      const updatedTag = {
        ...existingTag,
        count: existingTag.count + 1,
      };
      return [...acc.slice(0, existingTagIndex), updatedTag, ...acc.slice(existingTagIndex + 1)];
    } else {
      const newTag = {
        slug,
        title: tag.title,
        count: 1,
      };
      return [...acc, newTag];
    }
  }, [] as TagCount[]);
  return tagCounts;
};
