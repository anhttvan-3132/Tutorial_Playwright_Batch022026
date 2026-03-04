import { test, expect } from './fixtures/login.fixture';

test('Inventory page loads', async ({ loggedInPage }) => {
  await expect(loggedInPage).toHaveURL(/inventory/);
});

test('Add product to cart', async ({ loggedInPage }) => {
  await loggedInPage.locator('.inventory_item button').first().click();

  await expect(
    loggedInPage.locator('.shopping_cart_badge')
  ).toBeVisible();
});