import type { allPages, allPosts } from "content-collections";

export type Post = (typeof allPosts)[number];
export type Page = (typeof allPages)[number];

export type Series = NonNullable<Post["series"]>;
