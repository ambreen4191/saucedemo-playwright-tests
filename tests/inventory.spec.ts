import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage';

test('Inventory Sorting', async ({ page }) => {
  console.log('Navigating to login page...');
  await page.goto('/');
  
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.sortItemsByPriceLowToHigh();
  const firstItemLowToHigh = await page.textContent('.inventory_item_price >> nth=0');
  await expect(firstItemLowToHigh).toBe('$7.99');

  await inventoryPage.sortItemsByPriceHighToLow();
  const firstItemHighToLow = await page.textContent('.inventory_item_price >> nth=0');
  await expect(firstItemHighToLow).toBe('$49.99');
});