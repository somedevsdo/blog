import { expect, test } from "@playwright/test";
import { expectNoA11yViolations } from "./accessibility";

test("post renders correctly", async ({ page }) => {
  await page.goto("/post/accessible-custom-focus-indicators");

  await expect(
    page.getByRole("heading", { level: 1, name: "Accessible custom focus indicators" })
  ).toBeVisible();
  await expectNoA11yViolations(page);
});
