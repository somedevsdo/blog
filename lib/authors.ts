import fs from "fs";
import path from "path";

const dataDirectory = path.join(process.cwd(), "data/authors");

/**
 * Get all the authors data
 *
 * @returns all author data
 */
export const getAllAuthors = () => {
  const authors = {};
  const files = fs.readdirSync(dataDirectory);

  files.forEach((file) => {
    const slug = file.replace(/\.json$/, "");
    const author = JSON.parse(fs.readFileSync(`${dataDirectory}/${file}`, "utf8"));

    authors[slug] = author;
  });

  return authors;
};

/**
 * Get all of the Author "slugs". The Slug will be the URL, and also
 * the name of the data/author/[slug].json.
 *
 * @returns all author "slugs"
 */
export const getAllAuthorSlugs = () => {
  const authors = fs.readdirSync(dataDirectory);
  return authors.map((author) => {
    return {
      params: {
        id: author.replace(/\.json$/, ""),
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
export const getAuthorData = async (id: string) => {
  const fullPath = path.join(dataDirectory, `${id}.json`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const author = JSON.parse(fileContents);

  return {
    id,
    ...author,
  };
};
