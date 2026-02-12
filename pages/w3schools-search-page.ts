import { test } from '@playwright/test';
import { W3SchoolsSearchPage } from '../pages/w3schools-search-page';

test('Search on W3Schools homepage', async ({ page }) => {
  const w3schoolsPage = new W3SchoolsSearchPage(page);

  await w3schoolsPage.goto();
  await w3schoolsPage.search('Playwright');
});
