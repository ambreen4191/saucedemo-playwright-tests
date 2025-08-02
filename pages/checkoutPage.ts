import { Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async checkout() {
    await this.page.click('#checkout');
    await this.page.fill('#first-name', 'John');
    await this.page.fill('#last-name', 'Doe');
    await this.page.fill('#postal-code', '12345');
    await this.page.click('#continue');
  }

  async finishOrder() {
    await this.page.click('#finish');
    await this.page.waitForSelector('h2.complete-header');
  }

  async getThankYouMessage(): Promise<string | null> {
    const text = await this.page.textContent('h2.complete-header');
    return text || null;
  }

  async getTotalPrice() {
    return await this.page.textContent('.summary_total_label');
  }
}