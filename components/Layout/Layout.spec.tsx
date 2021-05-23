import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Layout", () => {
  it("should render correctly", () => {
    render(
      <Layout>
        <p>Test</p>
      </Layout>
    );
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
