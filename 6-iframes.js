const { webkit } = require('playwright');

(async () => {
  // Launch the browser
  const browser = await webkit.launch({ headless: false, slowMo: 400 });
  // Create a page inside browser
  const page = await browser.newPage();
  // Navigate to site
  await page.goto('https://demoqa.com/frames');

  // Logic to handle iframes
  const frame1 = await page.frame({ url: /\/sample/ });
  const heading1 = await frame1.$('h1');
  console.log(await heading1.innerText());

  // Close browser
  await browser.close();
})();
