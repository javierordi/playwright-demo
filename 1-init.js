const { chromium } = require('playwright');

(async () => {
  // Function code
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();
  await page.goto('http://google.com');

  // Close browser
  await browser.close();
})();
