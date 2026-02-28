import { test, expect } from '@playwright/test';

test('Filter & Cart', async ({ page }) => {
  
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();


  const backpackAddBtn = page.locator('[data-test="inventory-item"]')
    .filter({ hasText: 'Sauce Labs Backpack' })
    .locator('button');

  await backpackAddBtn.click();

 
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

 
  const bikeLightAddBtn = page.locator('[data-test="inventory-item"]')
    .filter({ hasText: 'Sauce Labs Bike Light' })
    .locator('button');

  await bikeLightAddBtn.click();

 
  await expect(page.locator('.shopping_cart_badge')).toHaveText('2');

  
  const removeBackpackBtn = page.locator('[data-test="inventory-item"]')
    .filter({ hasText: 'Sauce Labs Backpack' })
    .locator('button');

  await removeBackpackBtn.click();

  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
});