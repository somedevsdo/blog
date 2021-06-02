import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { getAuthorData, IAuthor } from "./authors";

const postsDirectory = path.join(process.cwd(), "posts");

/**
 * Defines what a post looks like.
 */
export interface IPost {
  /**
   * The authors profile.
   */
  authorProfile: IAuthor;

  /**
   * The category of the post
   */
  category: string;

  /**
   * The date the post was published.
   */
  date: string;

  /**
   * The image on the post header
   */
  featuredImage: string;

  /**
   * The content of the post.
   */
  fileContents: string;

  /**
   * The ID of the post. This is the name of the post file, minus the ".md" bit.
   */
  id: string;

  /**
   * The title of the post.
   */
  title: string;
}

/**
 * Get sorted posts
 *
 * @returns all posts sorted by date
 */
export const getSortedPostsData = async (): Promise<IPost[]> => {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      const authorProfile = await getAuthorData(matterResult.data.author);

      const { category, date, featuredImage, title } = matterResult.data;

      // Combine the data with the id
      return {
        authorProfile,
        category,
        date,
        featuredImage,
        id,
        title,
      } as IPost;
    })
  );

  // Sort posts by date
  return allPostsData.sort((a: IPost, b: IPost): number => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
};

/**
 * Get all of the post IDs
 *
 * @returns a list of post IDs
 */
export const getAllPostIds = (): { params: { id: string } }[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
};

/**
 * Get post data
 *
 * @param id the ID of the post to get
 * @returns the post data
 */
export const getPostData = async (id: string): Promise<IPost> => {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  const authorProfile = await getAuthorData(matterResult.data.author);

  // Combine the data with the id and contentHtml
  return {
    id,
    fileContents: matterResult.content,
    authorProfile,
    ...(matterResult.data as {
      category: string;
      date: string;
      featuredImage: string;
      title: string;
    }),
  };
};
