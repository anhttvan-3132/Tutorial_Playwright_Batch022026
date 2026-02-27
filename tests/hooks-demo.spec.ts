import { test, expect } from '@playwright/test';

test.describe('Demo Hooks order', () => {

  test.beforeAll(async () => {
    console.log('🔵 beforeAll: Bắt đầu chạy nhóm test');
  });

  test.beforeEach(async ({ page }) => {
    console.log('🟡 beforeEach: Login');

    await page.goto('https://www.saucedemo.com/');
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
  });

  test.afterEach(async ({ page }, testInfo) => {
    console.log('🟠 afterEach: Kết thúc 1 test');

    // Chỉ chụp screenshot khi FAIL
    if (testInfo.status !== testInfo.expectedStatus) {
      console.log('🔴 Test FAIL → chụp screenshot');

      await page.screenshot({
        path: `screenshots/${testInfo.title}.png`,
        fullPage: true,
      });
    }
  });

  test.afterAll(async () => {
    console.log('🟢 afterAll: Kết thúc nhóm test');
  });

  // ===== TEST PASS =====
  test('Test PASS - thấy inventory', async ({ page }) => {
    await expect(page).toHaveURL(/inventory/);
  });

  // ===== TEST FAIL (cố tình) =====
  test('Test FAIL - URL sai', async ({ page }) => {
    await expect(page).toHaveURL(/this-will-fail/);
  });

});
