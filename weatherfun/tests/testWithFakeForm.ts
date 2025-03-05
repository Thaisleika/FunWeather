import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';


// Função para gerar uma cidade aleatória
function generateFakeCity() {
  return faker.location.city();
}

test('User can search for a city and see the weather', async ({ page }) => {
  // Acessa a página inicial
  await page.goto('http://localhost:3000');

  // Gera uma cidade aleatória
  const city = generateFakeCity();
  console.log(`Testing with city: ${city}`);

  // Preenche o campo de busca (usando seletor mais estável)
  await page.fill('input[name="search"]', city);

  // Clica no botão de busca
  await page.click('button[type="submit"]');

  // Aguarda a exibição do resultado (com timeout)
  await page.waitForSelector('h2.weather-result', { timeout: 5000 });

  // Verifica se o nome da cidade aparece no resultado
  const resultText = await page.textContent('h2.weather-result');
  expect(resultText).toContain(city);
});
