import { test, expect } from '@playwright/test';
import { SearchHomePage } from './pages/searchWeatherPage';
import { WeatherPageResults } from './pages/weatherPageResults';
import { generateFakeCity } from './testWithFakeForm';

test.describe('WeatherFun App', () => {

  test('should search for a city and display weather', async ({ page }) => {
    const homePage = new SearchHomePage(page);
    const weatherPage = new WeatherPageResults(page);

    await homePage.goTo();
    await homePage.searchCity('');

    // Verifica se o título da previsão do tempo contém "New York"
    const weatherTitle = await homePage.getWeatherTitle();
    expect(weatherTitle).toContain('');
  });

  test('should add city to favorites', async ({ page }) => {
    const homePage = new SearchHomePage(page);
    const weatherPage = new WeatherPageResults(page);

    await homePage.goTo();
    await homePage.searchCity('');

    await weatherPage.addToFavorites();

    // Verifica se a cidade foi adicionada aos favoritos
    expect(await weatherPage.isCityInFavorites('')).toBeTruthy();
  });

});
