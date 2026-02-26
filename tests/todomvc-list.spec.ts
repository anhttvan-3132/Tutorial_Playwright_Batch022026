import { test, expect } from '@playwright/test';

test('Manage Todo list', async ({ page }) => {
  // 1. Open TodoMVC
  await page.goto('https://demo.playwright.dev/todomvc');

  const input = page.locator('.new-todo');

  // 2. Add 3 tasks
  await input.fill('Task A');
  await input.press('Enter');

  await input.fill('Task B');
  await input.press('Enter');

  await input.fill('Task C');
  await input.press('Enter');

  const items = page.locator('.todo-list li');

  // 3. Tick task thứ 2 (Task B)
  await items.nth(1).locator('.toggle').check();

  // 4. Verify task đầu tiên là Task A
  await expect(items.first()).toHaveText('Task A');

  // 5. Hover và xoá Task C
  const taskC = items.filter({ hasText: 'Task C' });
  await taskC.hover();
  await taskC.locator('.destroy').click();

  // Optional verify: chỉ còn 2 task
  await expect(items).toHaveCount(2);
});