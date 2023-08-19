import { MetadataRoute } from "next";
import { allPages, allPosts } from "contentlayer/generated";

import { tagOptions } from "@/lib/content-definitions/post";
import { BASE_URL } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const loadedPosts = allPosts.filter((post) => post.status === "published");
  const tags = tagOptions.map((tag) => ({
    url: `${BASE_URL}/tags/${tag}`,
    lastModified: now,
  }));
  const posts = loadedPosts.map((post) => ({
    url: `${BASE_URL}/posts/${post.slug}`,
    lastModified: post.lastUpdatedDate || post.publishedDate,
  }));
  const pages = allPages
    .filter((page) => page.status === "published")
    .map((page) => ({
      url: `${BASE_URL}/${page.slug.split("/pages")}`,
      lastModified: page.lastUpdatedDate,
    }));
  return [
    {
      url: BASE_URL,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/uses`,
      lastModified: now,
    },
    {
      url: `${BASE_URL}/social`,
      lastModified: now,
    },
    ...pages,
    {
      url: `${BASE_URL}/posts`,
      lastModified: now,
    },
    ...posts,
    {
      url: `${BASE_URL}/tags`,
      lastModified: now,
    },
    ...tags,
  ];
}
