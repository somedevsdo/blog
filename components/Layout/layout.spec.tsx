import { render, screen } from "@testing-library/react";
import Layout from "./layout";

describe("Layout", () => {
  it("should render correctly", () => {
    render(<Layout children={<p>Test</p>} />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
