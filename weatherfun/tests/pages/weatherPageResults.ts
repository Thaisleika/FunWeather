import { Page, Locator } from '@playwright/test';

export class WeatherPageResults {
  readonly page: Page;
  readonly weatherDetails: Locator;
  readonly addFavoriteButton: Locator;
  readonly favoritesList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.weatherDetails = page.locator('//*[@id="__next"]/div/div[2]/h2'); // Ajuste conforme necessário
    this.addFavoriteButton = page.locator('text=⭐ Add to Favorites');
    this.favoritesList = page.locator('ul');
  }

  async getWeatherDetails() {
    return this.weatherDetails.innerText();
  }

  async addToFavorites() {
    await this.addFavoriteButton.click();
  }

  async isCityInFavorites(city: string) {
    return await this.favoritesList.innerText() === city;
  }
}
