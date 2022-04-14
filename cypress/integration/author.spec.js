import { terminalLog } from "../support";

describe("Author", () => {
  beforeEach(() => {
    cy.visit("/author/dave");
    cy.injectAxe();
  });

  it("should render correctly", () => {
    cy.get("h1").should("contain", "David Norman");
    cy.checkA11y(undefined, undefined, terminalLog);
  });
});
