import authors from "../data/authors.json";

export type Author = {
  id: string;
  name: string;
  role: string;
  profilePicture: string;
  social?: string[];
  summary?: string;
};

export const getAuthorData = (id: string): Author => {
  return authors.find((author: Author) => author.id === id) as Author;
};
