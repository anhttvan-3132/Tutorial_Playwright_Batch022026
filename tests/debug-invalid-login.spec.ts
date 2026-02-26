import { test, expect } from '@playwright/test';

test('Debug invalid login - SauceDemo', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'WRONG_PASSWORD'); // cố tình sai
  await page.click('#login-button');


// assertion chắc chắn fail
await expect(page).toHaveURL(/inventory/);
  // Assertion để test FAIL hoặc ít nhất dừng lại ở lỗi
  await expect(page.locator('[data-test="error"]')).toBeVisible();
});