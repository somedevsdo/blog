describe("Home page", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("should navigate to a post", () => {
    cy.get('a[href*="post"]').eq(0).click();
    cy.url().should("include", "/post");
  });
});
