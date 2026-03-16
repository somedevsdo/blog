import { expect, test } from "@playwright/test";
import { expectNoA11yViolations } from "./accessibility";

test("author renders correctly", async ({ page }) => {
  await page.goto("/author/david");

  await expect(page.getByRole("heading", { level: 1, name: "David Norman" })).toBeVisible();
  await expectNoA11yViolations(page);
});
