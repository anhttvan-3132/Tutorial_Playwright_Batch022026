import { test, expect } from '@playwright/test';

/**
 * BEFORE EACH
 * - Mở trang SauceDemo
 * - Login
 */
test.beforeEach(async ({ page }) => {
  console.log('🟡 beforeEach: Login');

  await page.goto('https://www.saucedemo.com/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
});

/**
 * AFTER EACH
 * - Chụp screenshot nếu FAIL
 * - Logout
 */
test.afterEach(async ({ page }, testInfo) => {
  console.log('🟠 afterEach: Teardown');

  // Chụp screenshot nếu FAIL
  if (testInfo.status !== testInfo.expectedStatus) {
    console.log('🔴 Test FAIL → chụp screenshot');

    await page.screenshot({
      path: `screenshots/${testInfo.title}.png`,
      fullPage: true,
    });
  }

  // Logout (nếu đang ở inventory)
  if (page.url().includes('inventory')) {
    await page.click('#react-burger-menu-btn');
    await page.click('#logout_sidebar_link');
  }
});

/**
 * TEST 1
 * Kiểm tra URL sau login chứa /inventory
 */
test('Test 1 - URL sau login chứa /inventory', async ({ page }) => {
  await expect(page).toHaveURL(/inventory/);
});

/**
 * TEST 2
 * Kiểm tra tên sản phẩm đầu tiên
 */
test('Test 2 - Sản phẩm đầu tiên hiển thị đúng tên', async ({ page }) => {
  const firstItem = page.locator('.inventory_item_name').first();
  /*await expect(firstItem).toHaveText('Sauce Labs Backpack');*/
  await expect(firstItem).toHaveText('Sai tên');
});
