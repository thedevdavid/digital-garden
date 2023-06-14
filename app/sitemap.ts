import { MetadataRoute } from "next";
import { allPages, allPosts } from "@/.contentlayer/generated";

import { BASE_URL } from "@/lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts
    .filter((post) => post.status === "published")
    .map((post) => ({
      url: `${BASE_URL}/posts/${post.slug}`,
      lastModified: post.lastUpdatedDate,
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
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/uses`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/social`,
      lastModified: new Date(),
    },
    ...pages,
    {
      url: `${BASE_URL}/posts`,
      lastModified: new Date(),
    },
    ...posts,
  ];
}
