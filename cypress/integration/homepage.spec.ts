describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render correctly", () => {
    cy.get("h1").should("contain", "[Insert amazing name here]");
  });

  it("should navigate correctly", () => {
    cy.get("a").eq(1).click();
    cy.url().should("include", "/post/test");
  });
});
