import type { MarkdownInstance } from "astro";

export type Frontmatter = {
  slug: string;
  title: string;
  date: string;
  category: string;
  canonical: string;
  featuredImage: string;
  author: string;
};

export const getSortedPosts = (
  posts: MarkdownInstance<Frontmatter>[]
): MarkdownInstance<Frontmatter>[] =>
  [...posts].sort((a, b): number => {
    if (new Date(a.frontmatter.date) < new Date(b.frontmatter.date)) {
      return 1;
    }
    return -1;
  });
