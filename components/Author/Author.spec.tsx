import { render, screen } from "@testing-library/react";
import { IAuthor } from "../../lib/authors";
import Author from "./Author";

describe("Author", () => {
  const author: IAuthor = {
    id: "andy",
    role: "Superman",
    name: "Andy Barnes",
    profilePicture: "/authors/andy.png",
    social: [],
    summary: "Shh, it's a secret",
  };

  it("should render correctly", () => {
    render(<Author author={author} avatarSize="medium" />);
    expect(screen.getByTitle("Author profile for Andy Barnes")).toBeInTheDocument();
  });

  it("should add the vertical modifier class if we want the vertical layout", () => {
    const { container } = render(<Author author={author} avatarSize="medium" vertical />);
    expect(container.firstChild).toHaveClass("vertical");
  });

  it("should use dark text if we want it", () => {
    const { container } = render(<Author author={author} avatarSize="medium" textTheme="dark" />);
    expect(container.getElementsByTagName("p")[0]).toHaveClass("dark");
  });

  it("should use light text if we want it", () => {
    const { container } = render(<Author author={author} avatarSize="medium" textTheme="light" />);
    expect(container.getElementsByTagName("p")[0]).toHaveClass("light");
  });
});
