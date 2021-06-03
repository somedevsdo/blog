import { terminalLog } from "../support";

describe("Authors", () => {
  beforeEach(() => {
    cy.visit("/authors");
    cy.injectAxe();
  });

  it("should render correctly", () => {
    cy.get("h1").should("contain", "Authors");
    cy.checkA11y(undefined, undefined, terminalLog);
  });

  it("should navigate correctly", () => {
    cy.get("a").eq(2).click();
    cy.url().should("include", "/author/ben");
  });
});
