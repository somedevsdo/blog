import { expect, test } from "@playwright/test";

test("navigates to a post", async ({ page }) => {
  await page.goto("/");

  await page.locator('a[href*="post"]').first().click();

  await expect(page).toHaveURL(/\/post/);
});
