import { test, expect } from '@playwright/test';

test('Register and Login flow', async ({ page }) => {
  // =========================
  // STEP 1: Open Register page
  // =========================
  await page.goto('https://buggy.justtestit.org/register');

  // =========================
  // STEP 2: Verify Register UI
  // =========================
  await expect(
    page.locator('h2')
  ).toHaveText('Register with Buggy Cars Rating');

  await expect(page.locator('#username')).toBeVisible();
  await expect(page.locator('#firstName')).toBeVisible();
  await expect(page.locator('#lastName')).toBeVisible();
  await expect(page.locator('#password')).toBeVisible();
  await expect(page.locator('#confirmPassword')).toBeVisible();

  // =========================
  // STEP 3: Prepare test data
  // =========================
  const username = `user_${Date.now()}`;
  const password = 'Test@1234';

  // =========================
  // STEP 4: Fill Register form
  // =========================
  await page.locator('#username').fill(username);
  await page.locator('#firstName').fill('Van');
  await page.locator('#lastName').fill('Anh');
  await page.locator('#password').fill(password);
  await page.locator('#confirmPassword').fill(password);

  // =========================
  // STEP 5: Submit Register
  // =========================
  await page.locator('button[type="submit"]').click();

  // =========================
  // STEP 6: Verify Register success
  // (không verify text chi tiết)
  // =========================
  await expect(
    page.locator('.result')
  ).toBeVisible();

  // =========================
  // STEP 7: Open Login page
  // =========================
  await page.goto('https://buggy.justtestit.org/');

  // =========================
  // STEP 8: Login with new account
  // =========================
  await page.locator('#username').fill(username);
  await page.locator('#password').fill(password);
  await page.locator('button[type="submit"]').click();

  // =========================
  // STEP 9: Verify Login success
  // =========================
  await expect(
    page.locator('span.nav-link')
  ).toContainText(username);
});
