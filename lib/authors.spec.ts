import { getAllAuthorSlugs, getAuthorData } from "./authors";

describe("getAllAuthorSlugs", () => {
  it("should return an array of slugs", () => {
    const authors = getAllAuthorSlugs();

    expect(authors).toBeDefined();
    expect(authors[0].params.id).toBeDefined();
  });
});

describe("getAuthorData", () => {
  it("should return the author data", async () => {
    const author = await getAuthorData("ben");

    expect(author).toBeDefined();
    expect(author.id).toBe("ben");
    expect(author.name).toBe("Ben Selby");
    expect(author.profile).toBe("/authors/benmatselby.jpg");
    expect(author.social).toStrictEqual([
      "https://benmatselby.dev",
      "https://github.com/benmatselby",
      "https://twitter.com/benmatselby",
      "https://dev.to/benmatselby",
    ]);
  });
});
