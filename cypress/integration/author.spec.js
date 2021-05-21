import { terminalLog } from "../support";

describe("Author", () => {
  beforeEach(() => {
    cy.visit("/author/ben");
    cy.injectAxe();
  });

  it("should render correctly", () => {
    cy.get("h1").should("contain", "Ben Selby");
    cy.checkA11y(undefined, undefined, terminalLog);
  });
});
