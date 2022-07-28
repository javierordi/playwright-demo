const { chromium } = require('playwright');

(async () => {
  // Function code
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  const page = await browser.newPage();
  await page.goto('https://the-internet.herokuapp.com/forgot_password');

  // Code to type in email textbox
  const email = await page.$('#email');
  await email.type('izertis-prueba@mail.com');

  // Cose browser
  await browser.close();
})();
