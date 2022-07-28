const { chromium } = require('playwright');

(async () => {
  // Function code
  const browser = await chromium.launch({ headless: false, slowMo: 200 });
  const page = await browser.newPage();
  await page.goto('https://www.apronus.com/music/lessons/unit01.htm');

  // Click on the keynotes
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');

  // Cose browser
  await browser.close();
})();
