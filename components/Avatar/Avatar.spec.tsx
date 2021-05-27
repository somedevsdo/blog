import { render, screen } from "@testing-library/react";
import Avatar from "./Avatar";

describe("Layout", () => {
  it("should render correctly", () => {
    render(<Avatar src="/test.jpg" />);
    expect(screen.getByAltText("Avatar")).toBeInTheDocument();
  });

  it("should be large by default", () => {
    render(<Avatar src="/test.jpg" />);
    expect(document.getElementsByClassName("avatar")[0].childNodes[1]).toHaveStyle("width: 152px");
  });

  it("should be the right size for small", () => {
    render(<Avatar size="medium" src="/test.jpg" />);
    expect(document.getElementsByClassName("avatar")[0].childNodes[1]).toHaveStyle("width: 77px");
  });

  it("should be the right size for small", () => {
    render(<Avatar size="small" src="/test.jpg" />);
    expect(document.getElementsByClassName("avatar")[0].childNodes[1]).toHaveStyle("width: 52px");
  });

  it("should be the right size for x-small", () => {
    render(<Avatar size="x-small" src="/test.jpg" />);
    expect(document.getElementsByClassName("avatar")[0].childNodes[1]).toHaveStyle("width: 40px");
  });

  it("should have a border", () => {
    render(<Avatar border src="/test.jpg" />);
    expect(document.getElementsByClassName("avatar")[0]).toHaveClass("avatarBorder");
  });
});
