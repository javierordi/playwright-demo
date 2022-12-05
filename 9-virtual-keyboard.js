/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
const { chromium } = require('playwright');

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false, slowMo: 400 });
  // Create a page inside browser
  const page = await browser.newPage();
  // Navigate to site
  await page.goto('https://the-internet.herukoapp.com/key-presses');

  await page.click('input');
  await page.keyboard.type('one does not simply exit vim');
  await page.keyboard.down('Shift');
  for (let i = 0; i < ' exit vim'.length; i++) {
    await page.keyboard.press('ArrowLeft');
  }
  await page.keyboard.up('Shift');
  await page.keyboard.press('Backspace');
  await page.keyboard.type(' walk into mordor');

  // Close browser
  await browser.close();
})();
