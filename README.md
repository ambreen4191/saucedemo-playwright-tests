# Playwright Test Suite for Sauce Labs Demo

## Overview

This repository contains a Playwright test suite designed to automate the core user journeys of the Sauce Labs demo e-commerce website. The test suite is structured to be maintainable, scalable, and collaborative, adhering to best practices in test automation.

## Setup Instructions

1. **Clone the Repository**:

```bash
git clone https://github.com/yourusername/saucedemo-playwright-tests.git
cd saucedemo-playwright-tests
```
2. **Install Dependencies:**:

```bash
npm install
```
3. **Run the Tests:**:

```bash
npx playwright test
```
4. **View the Reports:**:
After running the tests, HTML reports will be generated in the test-results/reports directory. Open the index.html file in your browser to view the report.

## Project Architecture
### Directory Structure
- tests/: Contains all the test files.
- pages/: Contains page object models for each page.
- utils/: Contains utility functions for reusable logic.
- fixtures/: Contains fixtures for managing test states and dependencies.
- test-results/: Contains the generated test results and reports.

### Design Patterns
- Page Object Model (POM): Abstracts all page logic and selectors into dedicated page classes.
- Playwright Fixtures: Manages test states and dependencies, avoiding repetitive code.
- Utility Functions: Reusable logic that doesn't belong to a specific page object.

### Key Files
- playwright.config.ts: Configuration file for Playwright, including base URL and reporter settings.
- tests/login.spec.ts: Test file for login scenarios.
- tests/inventory.spec.ts: Test file for inventory sorting scenarios.
- tests/purchase.spec.ts: Test file for the full end-to-end purchase flow.
- pages/loginPage.ts: Page object model for the login page.
- pages/inventoryPage.ts: Page object model for the inventory page.
- pages/checkoutPage.ts: Page object model for the checkout page.
- utils/priceCalculator.ts: Utility function for calculating the total price.