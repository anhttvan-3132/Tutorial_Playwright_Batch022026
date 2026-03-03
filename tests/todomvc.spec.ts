import { test, expect } from '@playwright/test';

test('Create, complete and delete todo task', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');

  const todoInput = page.getByPlaceholder('What needs to be done?');
  const todoItem = page.getByText('Học Playwright');

  // 1️⃣ Create task
  await todoInput.fill('Học Playwright');
  await todoInput.press('Enter');

  // ✅ Verify task appears
  await expect(todoItem).toBeVisible();

  // 2️⃣ Complete task
  await page.getByRole('checkbox').check();

  // ✅ Verify task is completed (có class completed)
  await expect(todoItem.locator('xpath=..')).toHaveClass(/completed/);

  // 3️⃣ Delete task
  await todoItem.hover();
  await page.getByRole('button', { name: '×' }).click();

  // ✅ Verify task is removed
  await expect(todoItem).toHaveCount(0);
});