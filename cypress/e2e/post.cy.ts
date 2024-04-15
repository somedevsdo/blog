import { terminalLog } from "../support";

describe("Post", () => {
  beforeEach(() => {
    cy.visit("/posts/accessible-custom-focus-indicators");
    cy.injectAxe();
  });

  it("should render correctly", () => {
    cy.get("h1").should("contain", "Accessible custom focus indicators");
    cy.checkA11y(undefined, undefined, terminalLog);
  });
});
