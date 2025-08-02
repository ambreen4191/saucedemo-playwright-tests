import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage';

test('Handling Problematic UI', async ({ page }) => {
    console.log('Navigating to login page...');
  await page.goto('/');
  const loginPage = new LoginPage(page);
  await loginPage.login('problem_user', 'secret_sauce');

  const inventoryPage = new InventoryPage(page);
  // Implement a visual regression check or a functional check for broken images
  // This is a placeholder for visual regression or other checks
  const imageCount = await page.$$eval('.inventory_item_img', imgs => imgs.length);
  await expect(imageCount).toBe(12);
});