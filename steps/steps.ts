import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "./generalSteps";
import { expect } from '@playwright/test'
import  mainPage  from "../pageObject/mianPageObj";

Given("I am on {string} page", async (string) => {
    const accountLoginBtn =  page.locator('[data-title="Account / Sign In"]');
    await accountLoginBtn.waitFor({ state: 'visible', timeout: 10000 });
    expect(accountLoginBtn.isVisible()).toBeTruthy();
  
});

Then('the user selects the store {string} with language {string}', async (string, string2) => {
  
  switch (string2.toLowerCase()) {
    case "fr":
      const frenchStore =  page.locator('[data-automation-id="store-finder-store-0"]');
      await frenchStore.click();
      break;
    case "en":
      const searchBtn = page.locator('[title="Search"]');
      await searchBtn.waitFor({ state: 'visible', timeout: 10000 });
      const storeSearch =  page.locator('[placeholder="Postal Code, City, or Store Number"]');
      await storeSearch.clear();
      await storeSearch.fill(string);
      await searchBtn.click();
     // await page.locator('h3:text("Found")').waitFor({ state: 'visible', timeout: 10000 });
      const selectStoreBtn =  page.locator('button:has-text("Select")').nth(0);
      await selectStoreBtn.waitFor({ state: 'visible', timeout: 10000 });
      await selectStoreBtn.click();
      await expect( page.locator('span:text("My Store:")').isVisible()).toBeTruthy()
      break;
    default:
      console.log("Please select a valid language");
  }
});

Then("the user accepts all cookies", async () => {
  const cookiesManagerPopUp =  page.locator('#onetrust-accept-btn-handler');
  await cookiesManagerPopUp.click();
  await cookiesManagerPopUp.waitFor({ state: 'detached', timeout: 10000 });
  await cookiesManagerPopUp.waitFor({ state: 'hidden', timeout: 10000 });

  await page.locator('.acl-icon.acl-icon--size--medium').waitFor({ state: 'visible', timeout: 10000 });
  
});

When('I search for a product', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
 
Then('I see the product details', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
  
Then('the user clicks on link {string}', async (string) => {
  const cookiesManagerPopUp =  mainPage.buldSelector("xpath",string);
  await cookiesManagerPopUp?.click();
});

Then('the user waits for text {string} with attibute {string} to be visible', async (string,string2) =>  {
   await page.locator('[' + string2 + '="' + string + '"]').waitFor({state: 'visible', timeout: 10000});
});

Then('the user waits for {string} seconds', async (string) =>  {
  await page.waitForTimeout(parseInt(string)*1000);
});

Then('the user waits for page to be reloaded', async () => {
  await page.waitForLoadState("load");
  await page.waitForLoadState("domcontentloaded");
});
