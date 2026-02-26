import { test, expect } from '@playwright/test';

test.describe('SauceDemo - Login flow', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');

    await expect(page).toHaveURL(/inventory/);
  });

  test('Login thành công - vào trang Inventory', async ({ page }) => {
    await expect(page.locator('.title')).toHaveText('Products');
  });

  test('Logout thành công', async ({ page }) => {
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');

    await expect(page).toHaveURL('https://www.saucedemo.com/');
  });

  test.afterEach(async ({ page }, testInfo) => {
    await page.screenshot({
      path: `screenshots/${testInfo.title}.png`,
      fullPage: true,
    });
  });

});
test.describe('Invalid Login', () => {

  test.skip('Login with wrong password', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'wrong_password');
    await page.click('#login-button');

    await expect(
      page.locator('[data-test="error"]')
    ).toBeVisible();
  });

  test('Login with empty credentials', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.click('#login-button');

    await expect(
      page.locator('[data-test="error"]')
    ).toBeVisible();
  });

});