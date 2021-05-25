import { render, screen } from "@testing-library/react";
import SocialLink from "./SocialLink";

describe("SocialLink", () => {
  it("should render correctly", () => {
    render(<SocialLink link="https://bobbins.com" />);
    expect(screen.getByTitle("Web link")).toBeInTheDocument();
  });

  it("should render a GitHub link correctly", () => {
    render(<SocialLink link="https://github.com/benmatselby" />);
    expect(screen.getByTitle("GitHub link")).toBeInTheDocument();
  });

  it("should render a Twitter link correctly", () => {
    render(<SocialLink link="https://twitter.com/benmatselby" />);
    expect(screen.getByTitle("Twitter link")).toBeInTheDocument();
  });

  it("should render a Dev.tp link correctly", () => {
    render(<SocialLink link="https://dev.to/benmatselby" />);
    expect(screen.getByTitle("Dev.to link")).toBeInTheDocument();
  });
});
