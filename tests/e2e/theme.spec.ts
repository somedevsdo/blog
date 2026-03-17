import { expect, test } from "@playwright/test";

test("theme toggle works after client navigation", async ({ page }) => {
  await page.goto("/");

  const getTheme = () => page.locator("html").getAttribute("data-theme");

  const initialTheme = await getTheme();
  await page.locator("#theme-button").click();
  await expect.poll(async () => await getTheme()).not.toBe(initialTheme);

  const afterFirstToggle = await getTheme();
  await page.locator('a[href*="post/"]').first().click();
  await expect(page).toHaveURL(/\/post\//);

  await page.locator("#theme-button").click();
  await expect.poll(async () => await getTheme()).not.toBe(afterFirstToggle);
});
