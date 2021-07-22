import authors from "../data/authors.json";

/**
 * Defines what an author looks like.
 */
export interface IAuthor {
  /**
   * This is the "slug"/"id" which relates to the name of the file in
   * "/data/authors".
   */
  id: string;

  /**
   * The authors name.
   */
  name: string;

  /**
   * The authors role
   */
  role: string;

  /**
   * The profile picture location.
   */
  profilePicture: string;

  /**
   * An array of social media links.
   */
  social: string[];

  /**
   * An summary of the person and what they do
   */
  summary: string;
}

/**
 * Get all of the Author "slugs". The Slug will be the URL, and also
 * the name of the data/author/[slug].json.
 *
 * @returns all author "slugs"
 */
export const getAllAuthorSlugs = (): { params: { id: string } }[] => {
  return authors.map((author: IAuthor) => {
    return {
      params: {
        id: author.id,
      },
    };
  });
};

/**
 * Get the contents of the author file.
 *
 * @param id the ID of the author
 * @returns the author data
 */
export const getAuthorData = (id: string): IAuthor => {
  return authors.find((author: IAuthor) => author.id === id) as IAuthor;
};
