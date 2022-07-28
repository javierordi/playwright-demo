import { chromium } from 'playwright';

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false, slowMo: 400 });
  // Create a page inside browser
  const page = await browser.newPage();
  // Navigate to site
  await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');

  // Accept cookies
  await page.click('#accept-choices');

  // Check the second checkbox
  const checks = await page.$$('#main > div.w3-row > div:nth-child(1) > input[type=checkbox]');
  await checks[1].check();
  await checks[0].uncheck();

  // Select the second radio button
  const radios = await page.$$('#main > div.w3-row > div:nth-child(1) > input[type=radio]');
  await radios[1].check();

  // Close browser
  await browser.close();
})();
