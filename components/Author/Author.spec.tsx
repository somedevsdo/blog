import { render, screen } from "@testing-library/react";
import { IAuthor } from "../../lib/authors";
import Author from "./Author";

describe("Author", () => {
  const author: IAuthor = {
    id: "ben",
    name: "Ben Selby",
    profile: "/authors/benmatselby.jpg",
    social: [],
  };

  it("should render correctly", () => {
    render(
      <Author
        author={author}
        avatarBorder
        avatarSize="medium"
        colorScheme="light"
        layout="horizontal"
      />
    );
    expect(screen.getByTitle("Author profile for Ben Selby")).toBeInTheDocument();
  });

  it("should add the horizontal modifier class if we want the horizontal layout", () => {
    const { container } = render(
      <Author
        author={author}
        avatarBorder
        avatarSize="medium"
        colorScheme="light"
        layout="horizontal"
      />
    );
    expect(container.firstChild).toHaveClass("horizontal");
  });

  it("should add the vertical modifier class if we want the vertical layout", () => {
    const { container } = render(
      <Author
        author={author}
        avatarBorder
        avatarSize="medium"
        colorScheme="light"
        layout="vertical"
      />
    );
    expect(container.firstChild).toHaveClass("vertical");
  });

  it("should add the dark modifier class if we want the dark colour scheme", () => {
    const { container } = render(
      <Author
        author={author}
        avatarBorder
        avatarSize="medium"
        colorScheme="dark"
        layout="horizontal"
      />
    );
    expect(container.firstChild).toHaveClass("dark");
  });

  it("should add the light modifier class if we want the light colour scheme", () => {
    const { container } = render(
      <Author
        author={author}
        avatarBorder
        avatarSize="medium"
        colorScheme="light"
        layout="horizontal"
      />
    );
    expect(container.firstChild).toHaveClass("light");
  });
});
