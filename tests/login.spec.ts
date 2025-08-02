import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Successful Login', async ({ page }) => {
  console.log('Navigating to login page...');
  await page.goto('/');
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});

test('Locked-Out User', async ({ page }) => {
    console.log('Navigating to login page...');
  await page.goto('/');
  const loginPage = new LoginPage(page);
  await loginPage.login('locked_out_user', 'secret_sauce');
  const errorMessage = await loginPage.getErrorMessage();
  await expect(errorMessage).toContain('Sorry, this user has been locked out.');
});

test('Invalid Password', async ({ page }) => {
    console.log('Navigating to login page...');
  await page.goto('/');
  const loginPage = new LoginPage(page);
  await loginPage.login('standard_user', 'wrong_password');
  const errorMessage = await loginPage.getErrorMessage();
  await expect(errorMessage).toContain('Epic sadface: Username and password do not match any user in this service');
});