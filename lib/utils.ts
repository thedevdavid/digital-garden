import { clsx, type ClassValue } from "clsx";
import { Post } from "contentlayer/generated";
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

export const getTagsWithCount = (posts: Post[]) =>
  posts.reduce((acc: any, post: Post) => {
    post.tags?.forEach((tag: any) => {
      if (acc[tag]) {
        acc[tag] += 1;
      } else {
        acc[tag] = 1;
      }
    });
    return acc;
  }, {});
