import { test, expect } from '@playwright/test';

test('Assertions เชิงลึก', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('wrong_password');
  await page.locator('[data-test="login-button"]').click();

  const errorMsg = page.locator('[data-test="error"]');


  await expect(errorMsg).toBeVisible();

 
  await expect(errorMsg).toContainText('do not match');

 
  const usernameField = page.locator('[data-test="username"]');
  await expect(usernameField).toHaveClass(/input_error/);


  await page.locator('.error-button').click();
  await expect(errorMsg).not.toBeVisible();
});