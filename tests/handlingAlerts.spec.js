const {test, expect} = require('@playwright/test');

test.skip('Alert with OK', async ({ page }) =>{

    // Step1 : Navigate to the website with alert
    await page.goto('https://testautomationpractice.blogspot.com/');


    // Enabling alert handling // Dialog window handler

   page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('alert');  // what type of dialog it is
    // to verify alert message
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();  // to click on OK button
   })

   await page.click('#alertBtn');
   await page.waitForTimeout(5000); // wait for 5 seconds to see the alert handled
   console.log("Alert handled successfully");
   
});


test.skip('Confirm Dialog - Accept (OK)', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('I am an alert box!');
    await dialog.accept();  // ✅ Click OK
    console.log("Confirm dialog accepted");
  });

  await page.click('#confirmBtn'); // ✅ Actually click the confirm button
});


test('Prompt Dialog', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  page.on('dialog', async dialog => {
    expect(dialog.type()).toContain('prompt');
    expect(dialog.message()).toContain('Please enter your name:');
    expect(dialog.defaultValue()).toContain('Harry Potter');
    await dialog.accept('Rutika Masne');  // ✅ Click OK with input
    console.log("Prompt dialog handled with input");
  });

  await page.click('#promptBtn'); // ✅ Actually click the confirm button
  
});
