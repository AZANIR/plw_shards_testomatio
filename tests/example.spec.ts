import { test, expect } from '@playwright/test';

/**
 * Example test file demonstrating Playwright with Testomat.io reporter
 * 
 * When running with sharding, Playwright will automatically distribute
 * these tests across shards based on the --shard parameter.
 */

test('should pass - example test 1', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});

test('should pass - example test 2', async ({ page }) => {
  await page.goto('https://example.com');
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
});

test('should pass - example test 3', async ({ page }) => {
  await page.goto('https://example.com');
  const link = page.locator('a');
  await expect(link).toHaveAttribute('href', 'https://www.iana.org/domains/example');
});

test('should pass - example test 4', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.locator('body')).toContainText('Example Domain');
});

test('should pass - example test 5', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveURL(/example\.com/);
});

test('should pass - example test 6', async ({ page }) => {
  await page.goto('https://example.com');
  const paragraph = page.locator('p');
  await expect(paragraph.first()).toBeVisible();
});

