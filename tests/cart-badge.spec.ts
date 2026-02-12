import { test, expect } from '@playwright/test';

test('Kiểm tra badge giỏ hàng tăng dần khi thêm sản phẩm', async ({ page }) => {
  // Login
  await page.goto('https://www.saucedemo.com/');
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory/);

  const cartBadge = page.locator('.shopping_cart_badge');

  // 1. Thêm sản phẩm thứ nhất
  await page
    .locator('.inventory_item')
    .nth(0)
    .getByRole('button', { name: /add to cart/i })
    .click();

  // Assert badge = 1
  await expect(cartBadge).toHaveText('1');

  // 2. Thêm sản phẩm thứ hai
  await page
    .locator('.inventory_item')
    .nth(1)
    .getByRole('button', { name: /add to cart/i })
    .click();

  // Assert badge = 2
  await expect(cartBadge).toHaveText('2');
});
