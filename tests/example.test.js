import { test, expect } from '@playwright/test';

test('Sign In from BBC news', async ({ page }) => {
	await page.goto('https://www.bbc.co.uk/news');

	// Element location by accessible name
	const signInBanner = page.getByLabel('Sign In Banner');

	// Location by accesible ARIA role, Locator composition
	const signInButton = signInBanner.getByRole('link', { name: 'Sign in' }); // Composition

	// Lazy evaluation and Smart Assertions (auto-waiting)
	await expect(signInButton).toBeVisible();

	// Issuing Actions, Smart Assertions, Regex matching
	await signInButton.click(); // Action
	await expect(page).toHaveURL(/^https:\/\/account.bbc.com\/auth/);
});
