import { terminalLog } from "../support";

describe("About", () => {
  beforeEach(() => {
    cy.visit("/about");
    cy.injectAxe();
  });

  it("should render correctly", () => {
    cy.get("h1").should("contain", "About us");
    cy.checkA11y(undefined, undefined, terminalLog);
  });

  it("should navigate correctly", () => {
    cy.get("a").eq(0).click();
    cy.url().should("include", "/");
  });
});
