import { render, screen } from "@testing-library/react";
import SocialLink from "./SocialLink";

describe("SocialLink", () => {
  it("should render correctly", () => {
    render(<SocialLink link="https://bobbins.com" />);
    expect(screen.getByTitle("Visit web page")).toBeInTheDocument();
  });

  it("should render a GitHub link correctly", () => {
    render(<SocialLink link="https://github.com/benmatselby" />);
    expect(screen.getByTitle("Visit GitHub page")).toBeInTheDocument();
  });

  it("should render a Twitter link correctly", () => {
    render(<SocialLink link="https://twitter.com/benmatselby" />);
    expect(screen.getByTitle("Visit Twitter page")).toBeInTheDocument();
  });

  it("should render a Dev.tp link correctly", () => {
    render(<SocialLink link="https://dev.to/benmatselby" />);
    expect(screen.getByTitle("Visit Dev.to page")).toBeInTheDocument();
  });
});
