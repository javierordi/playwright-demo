const { chromium } = require('playwright');

(async () => {
  // Launch the browser
  const browser = await chromium.launch();
  // Create a page inside browser
  const page = await browser.newPage();
  // Navigate to site
  await page.goto('https://demoqa.com/automation-practice-form');

  // Print the element state
  const firstName = await page.$('#firstName');
  const sportsCheck = await page.$('#hobbies-checkbox-1');
  const submitBtn = await page.$('#submit');

  console.log(await firstName.isDisabled());
  console.log(await firstName.isEnabled());
  console.log(await firstName.isEditable());
  console.log(await sportsCheck.isChecked());
  console.log(await sportsCheck.isVisible());
  console.log(await submitBtn.isHidden());
  console.log(await submitBtn.isVisible());

  // Close browser
  await browser.close();
})();
