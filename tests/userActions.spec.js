const {test, expect } = require ('@playwright/test');

test ('User Actions Test', async ({page}) =>{

    //Step 1: goto website
    await page.goto('https://www.saucedemo.com/');


    //Step2: username and password

    await page.fill('#user-name', 'standard_user');

    await page.fill('#password', 'secret_sauce');

    // Step 3 : click on login button

    await page.click('#login-button');

  //Step 4: verify login successful by checking presence of Products title

    await expect(page.locator('.title')).toHaveText('Products');
    
    // Step 5 : Take  screenshot

    await page.screenshot({path: 'saucedemo-login.png', fullPage: true});

    console.log("Login successful and screenshot captured!");

});
