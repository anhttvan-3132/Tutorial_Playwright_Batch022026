import { test, expect } from '@playwright/test';

test('Check redirect after login', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await page.waitForURL('**/inventory.html');

  const currentUrl = page.url();
  console.log('Current URL:', currentUrl);

  await page.reload();
  await expect(page).toHaveURL(currentUrl);
});
