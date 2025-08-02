import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { calculateTotalPrice } from '../utils/priceCalculator';

test('Full End-to-End Purchase Flow', async ({ page }) => {
    console.log('Navigating to login page...');
  await page.goto('/');
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addToCart('sauce-labs-backpack');

  await page.click('#shopping_cart_container');

  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.checkout();

  const totalPriceText = await checkoutPage.getTotalPrice();
  if (totalPriceText === null) {
    throw new Error('Total price text is null');
  }

  const totalPrice = parseFloat(totalPriceText.split('$')[1]);
  const itemTotal = 29.99;
  const taxRate = 0.08;
  const expectedTotal = calculateTotalPrice(itemTotal, taxRate);

  await expect(totalPrice).toBeCloseTo(expectedTotal, 2);

  await checkoutPage.finishOrder();

  console.log('Checking thank you message...');
  const thankYouMessage = await checkoutPage.getThankYouMessage();
  if (thankYouMessage === null) {
    throw new Error('Thank you message is null');
  }

  await expect(thankYouMessage).toContain('Thank you for your order!');


});