import { Page, Locator } from '@playwright/test';

export class SearchHomePage {
  readonly page: Page;
  readonly cityInput: Locator;
  readonly searchButton: Locator;
  readonly weatherTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cityInput = page.locator('//*[@id="__next"]/div/div/input');
    this.searchButton = page.locator('//*[@id="__next"]/div/div/button');
    this.weatherTitle = page.locator('//*[@id="__next"]/div/div[2]/h2');
  }

  async goTo() {
    await this.page.goto('http://localhost:3000'); // Altere se necessário
  }

  async searchCity(city: string) {
    await this.cityInput.fill(city);
    await this.searchButton.click();
  }

  async getWeatherTitle() {
    return this.weatherTitle.innerText();
  }
}
