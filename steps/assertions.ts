import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "./hooks";
import { expect } from '@playwright/test'
import mainPage  from "../pageObject/mainPageObj";

Then('the user validates element {string} with attibute {string} has text {string}', async (string, string2, string3) => {
     const selector =  mainPage.buldSelector(string, string2); 
     expect(await selector?.textContent()).toBe(string3);
});
  

Then('the user validates if text {string} is visible', async (string) => {
   const selector = mainPage.buldSelector("xpath", string);
   const textIsVisible = await selector?.isVisible();
   await expect( textIsVisible).toBeTruthy();
});