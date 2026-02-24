import { test, expect } from '@playwright/test';

test('Dynamic Loading - wait Hello World', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  // Click Start
  await page.locator('button').click();

  // Chờ text Hello World xuất hiện
  const helloText = page.locator('#finish h4');
  await helloText.waitFor({ state: 'visible' });

  // Assert
  await expect(helloText).toHaveText('Hello World!');
});
