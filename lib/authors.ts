import fs from "fs";
import path from "path";

const dataDirectory = path.join(process.cwd(), "data/authors");

/**
 * Get all the authors data
 */
export function getAllAuthors() {
  const authors = [];
  const files = fs.readdirSync(dataDirectory);

  files.map((file) => {
    authors.push(JSON.parse(fs.readFileSync(`${dataDirectory}/${file}`) as unknown as string));
  });

  return authors;
}
