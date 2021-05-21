describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("should render correctly", () => {
    cy.get("h1").should("contain", "[Insert amazing name here]");
    cy.checkA11y();
  });

  it("should navigate correctly", () => {
    cy.get("a").eq(1).click();
    cy.url().should("include", "/post/test");
  });
});
