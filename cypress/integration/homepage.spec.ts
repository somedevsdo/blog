import { terminalLog } from "../support";

describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("should render correctly", () => {
    cy.get("h1").should("contain", "somedevsdo");
    cy.checkA11y(undefined, undefined, terminalLog);
  });

  it("should navigate to about", () => {
    cy.get('[data-testid="link-about"]').eq(0).click();
    cy.url().should("include", "/about");
  });

  it("should navigate to authors", () => {
    cy.get('[data-testid="link-authors"]').eq(0).click();
    cy.url().should("include", "/authors");
  });

  it("should navigate to a post", () => {
    cy.get('a[href*="post"]').eq(0).click();
    cy.url().should("include", "/post");
  });
});
