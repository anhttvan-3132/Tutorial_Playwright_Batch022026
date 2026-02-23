import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/registerPage';

test('Register user successfully', async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.goto();
  await registerPage.registerUser();

  // Check radio + checkbox đã được chọn
  await expect(page.locator('//input[@value="male"]')).toBeChecked();
  await expect(page.locator('//input[@value="reading"]')).toBeChecked();
  await expect(page.locator('//input[@id="interested"]')).toBeChecked();

  // Check user hiển thị trong table
  const userRow = page.locator('//table//td[text()="testuser01"]');
  await expect(userRow).toBeVisible();
});
