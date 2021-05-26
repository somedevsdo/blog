import { terminalLog } from "../support";

describe("Post", () => {
  beforeEach(() => {
    cy.visit("/post/recent");
    cy.injectAxe();
  });

  it("should render correctly", () => {
    cy.get("h1").should("contain", "Recent test page");
    cy.checkA11y(undefined, undefined, terminalLog);
  });
});
