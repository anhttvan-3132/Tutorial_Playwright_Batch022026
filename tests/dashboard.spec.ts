import { expect } from '@playwright/test';
import { test } from './fixtures/login.fixture';

// Test 1: Kiểm tra dashboard sau khi login
test('Kiểm tra dashboard hiển thị đúng', async ({ loggedInPage }) => {
  await expect(loggedInPage.getByText('Swag Labs')).toBeVisible();
});

test('verify sauce inventory products', async ({ loggedInPage }) => {
  // Verify we're on inventory page
  await expect(loggedInPage.getByText('Products')).toBeVisible();

  // Verify all 6 products are displayed
  const inventoryItems = loggedInPage.locator('[data-test="inventory-item"]');
  await expect(inventoryItems).toHaveCount(6);

  // Verify specific products exist
  await expect(loggedInPage.getByText('Sauce Labs Backpack')).toBeVisible();
  await expect(loggedInPage.getByText('Sauce Labs Bike Light')).toBeVisible();
  await expect(loggedInPage.getByText('Sauce Labs Fleece Jacket')).toBeVisible();
  await expect(loggedInPage.getByText('Sauce Labs Onesie')).toBeVisible();
  await expect(loggedInPage.getByText('Test.allTheThings() T-Shirt (Red)')).toBeVisible();
});
test('add product to cart', async ({ loggedInPage }) => {
  await loggedInPage
    .locator('.inventory_item button')
    .first()
    .click();

  await expect(
    loggedInPage.locator('.shopping_cart_badge')
  ).toHaveText('1');
});

test('cart page shows added product', async ({ loggedInPage }) => {
  // Add product
  await loggedInPage
    .locator('.inventory_item button')
    .first()
    .click();

  // Go to cart
  await loggedInPage.locator('.shopping_cart_link').click();

  // Verify we're on cart page
  await expect(loggedInPage).toHaveURL(/cart/);

  // Verify product exists in cart
  await expect(
    loggedInPage.locator('.cart_item')
  ).toHaveCount(1);
});