import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

export const loggedInPage = async ({ page, username, password }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(username, password);
  await expect(page).toHaveURL(/inventory/);
  return page;
};