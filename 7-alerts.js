const { chromium } = require('playwright');

(async () => {
  // Launch the browser
  const browser = await chromium.launch({ headless: false, slowMo: 400 });
  // Create a page inside browser
  const page = await browser.newPage();
  // Navigate to site
  await page.goto('https://demoqa.com/alerts');

  // Code to handle the alerts
  page.once('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.accept();
  });

  await page.click('#confirmButton');
  page.once('dialog', async (dialog) => {
    console.log(dialog.message());
    await dialog.accept('Hola buenos días');
  });
  await page.click('#promtButton');

  // Close browser
  await browser.close();
})();
