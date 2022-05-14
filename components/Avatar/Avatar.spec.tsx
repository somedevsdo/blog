import { render } from "@testing-library/react";
import Avatar from "./Avatar";
import ImageWithPlaceholder from "../ImageWithPlaceholder/ImageWithPlaceholder";
import Image from "next/image";

jest.mock("../ImageWithPlaceholder/ImageWithPlaceholder");

(ImageWithPlaceholder as jest.Mock).mockReturnValue(
  <Image alt="avatar" layout="fill" src="/test.jpg" />
);

describe("Avatar", () => {
  it("should be large by default", () => {
    render(<Avatar src="/test.jpg" />);
    expect(document.getElementsByClassName("avatar")[0]).toHaveStyle("width: 120px");
  });

  it("should be the right size for small", () => {
    render(<Avatar size="medium" src="/test.jpg" />);
    expect(document.getElementsByClassName("avatar")[0]).toHaveStyle("width: 77px");
  });

  it("should be the right size for small", () => {
    render(<Avatar size="small" src="/test.jpg" />);
    expect(document.getElementsByClassName("avatar")[0]).toHaveStyle("width: 52px");
  });

  it("should be the right size for x-small", () => {
    render(<Avatar size="x-small" src="/test.jpg" />);
    expect(document.getElementsByClassName("avatar")[0]).toHaveStyle("width: 40px");
  });
});
