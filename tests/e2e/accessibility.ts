import AxeBuilder from "@axe-core/playwright";
import { expect, type Page } from "@playwright/test";

export const expectNoA11yViolations = async (page: Page) => {
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  expect(accessibilityScanResults.violations).toEqual([]);
};
