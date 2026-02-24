import { test, expect } from '@playwright/test';

test('Submit DemoQA form successfully', async ({ page }) => {
  await page.goto('https://demoqa.com/automation-practice-form');

  await page.locator('#firstName').fill('Van');
  await page.locator('#lastName').fill('Anh');
  await page.locator('#userEmail').fill('vananh@test.com');
  await page.locator('#userNumber').fill('0123456789');
});
