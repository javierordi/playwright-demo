/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
const { chromium } = require('playwright');

(async () => {
  // Function code
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  const dropdown = await page.$('#dropdown');

  // Value
  await dropdown.selectOption({ value: '1' });

  // Label
  await dropdown.selectOption({ label: 'Option 2' });

  // Index
  await dropdown.selectOption({ index: 1 });

  // Values inside the select
  const availableOptions = await dropdown.$$('option');
  for (let i = 0; i < availableOptions.length; i++) {
    console.log(await availableOptions[i].innerText());
  }

  // Close browser
  await browser.close();
})();
