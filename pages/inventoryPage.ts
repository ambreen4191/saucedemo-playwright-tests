import { Page } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async sortItemsByPriceLowToHigh() {
    // await this.page.click('select[data-test="product-sort-container"]');
    // await this.page.click('option[value="lohi"]');
    await this.page.selectOption('select[data-test="product-sort-container"]', 'lohi');
}

  async sortItemsByPriceHighToLow() {
    // await this.page.click('select[data-test="product-sort-container"]');
    // await this.page.click('option[value="hilo"]');
    await this.page.selectOption('select[data-test="product-sort-container"]', 'hilo');
}

  async addToCart(itemName: string) {
    await this.page.click(`button[data-test="add-to-cart-${itemName}"]`);
  }
}