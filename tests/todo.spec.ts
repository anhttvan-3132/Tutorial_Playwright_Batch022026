import { test, expect } from '@playwright/test';

test('TodoMVC - add, complete and delete task', async ({ page }) => {
  // 1. Truy cập TodoMVC
  await page.goto('https://demo.playwright.dev/todomvc');

  const newTodo = page.locator('.new-todo');
  const todoItems = page.locator('.todo-list li');

  // 2. Thêm task
  await newTodo.fill('Học Playwright');
  await newTodo.press('Enter');

  // ✅ Assert: task được thêm
  await expect(todoItems).toHaveCount(1);
  await expect(todoItems.first()).toHaveText('Học Playwright');

  // 3. Đánh dấu task là hoàn thành
  await todoItems.first().locator('.toggle').check();

  // ✅ Assert: task có class completed
  await expect(todoItems.first()).toHaveClass(/completed/);

  // 4. Xóa task
  await todoItems.first().hover();
  await todoItems.first().locator('.destroy').click();

  // ✅ Assert: task đã bị xóa
  await expect(todoItems).toHaveCount(0);
});