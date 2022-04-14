import { getAllAuthorSlugs, getAuthorData } from "./authors";

describe("getAllAuthorSlugs", () => {
  it("should return an array of slugs", () => {
    const authors = getAllAuthorSlugs();

    expect(authors).toBeDefined();
    expect(authors[0].params.id).toBeDefined();
  });
});

describe("getAuthorData", () => {
  it("should return the author data", () => {
    const author = getAuthorData("andy");

    expect(author).toBeDefined();
    expect(author.id).toBe("andy");
    expect(author.name).toBe("Andy Barnes");
    expect(author.profilePicture).toBe("/authors/andy.png");
    expect(author.social).toStrictEqual([
      "https://andrewbarnes.info",
      "https://github.com/andrewbarnesweb",
      "https://twitter.com/AndrewBarnesWeb",
      "https://andrew-barnes.medium.com/",
      "https://www.polywork.com/andrewbarnes",
    ]);
  });
});
