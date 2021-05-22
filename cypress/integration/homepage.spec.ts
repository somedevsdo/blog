import { terminalLog } from "../support";

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("should render correctly", () => {
    cy.get("h1").should("contain", "[Insert amazing name here]");
    cy.checkA11y(undefined, undefined, terminalLog);
  });

  it("should navigate to about", () => {
    cy.get("a").eq(0).click();
    cy.url().should("include", "/about");
  });

  it("should navigate to a post", () => {
    cy.get("a").eq(2).click();
    cy.url().should("include", "/post/test");
  });
});
