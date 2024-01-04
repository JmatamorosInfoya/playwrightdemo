import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "./hooks";
import { expect } from '@playwright/test'
import  mainPage  from "../pageObject/mainPageObj";

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
  
  const cookiesManagerPopUp = page.locator('#onetrust-accept-btn-handler');
  if (await cookiesManagerPopUp.isVisible()) {
    await cookiesManagerPopUp.click();
    await cookiesManagerPopUp.waitFor({ state: 'detached', timeout: 10000 });
    await cookiesManagerPopUp.waitFor({ state: 'hidden', timeout: 10000 });
  }
  await page.locator('.acl-icon.acl-icon--size--medium').waitFor({ state: 'visible', timeout: 10000 });
});

When('the user search for a product using sku {string}', async (string) => {
  const searchSkuBar = mainPage.buldSelector("attibute", 'placeholder,What can we help you find?');
  await searchSkuBar?.fill(string);
  const searchBtn = mainPage.buldSelector("attibute", 'classname,acl-action-button__icon');
  await searchBtn?.click();
  const productSearchText = mainPage.buldSelector("tag", 'h1');
  await productSearchText?.waitFor({ state: 'visible', timeout: 10000 });
  if(await productSearchText?.textContent() === "1 result for '"+string+"' "){
    await mainPage.buldSelector("class", 'acl-product-card__title-link')?.click();
  }
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

Then('the user waits for text {string} to be visible', async (string) => {
  const expectedTextElemt =  mainPage.buldSelector("xpath",string);
  await expectedTextElemt?.waitFor({state: 'visible', timeout: 10000});
});

Then('the user waits for {string} seconds', async (string) =>  {
  await page.waitForTimeout(parseInt(string)*1000);
});

Then('the user waits for page to be reloaded', async () => {
  await page.waitForLoadState("load");
  await page.waitForLoadState("domcontentloaded");
});
