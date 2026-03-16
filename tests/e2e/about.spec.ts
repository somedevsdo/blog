import { expect, test } from "@playwright/test";
import { expectNoA11yViolations } from "./accessibility";

test.describe("About", () => {
  test("renders correctly", async ({ page }) => {
    await page.goto("/about");

    await expect(page.getByRole("heading", { level: 1, name: "About us" })).toBeVisible();
    await expectNoA11yViolations(page);
  });

  test("navigates correctly", async ({ page }) => {
    await page.goto("/about");

    await page.locator("a").first().click();
    await expect(page).toHaveURL(/\/$/);
  });
});
