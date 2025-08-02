import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage';

test('Handling Performance Issues', async ({ page }) => {
    console.log('Navigating to login page...');
  await page.goto('/');
  const loginPage = new LoginPage(page);
  await loginPage.login('performance_glitch_user', 'secret_sauce');

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addToCart('sauce-labs-backpack');

  // Use Playwright's built-in retries or wait for the item to be added to the cart
  await page.waitForSelector('#shopping_cart_container >> text="1"');
});