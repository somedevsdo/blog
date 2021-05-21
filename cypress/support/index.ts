// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "cypress-axe";

// Alternatively you can use CommonJS syntax:
// require('./commands')

/**
 * @param violations
 */
export function terminalLog(violations: { description: any; id: any; impact: any; nodes: any }[]) {
  cy.task(
    "log",
    `${violations.length} accessibility violation${violations.length === 1 ? "" : "s"} ${
      violations.length === 1 ? "was" : "were"
    } detected`
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(({ description, id, impact, nodes }) => ({
    description,
    id,
    impact,
    nodes: nodes.length,
  }));

  cy.task("table", violationData);
}
