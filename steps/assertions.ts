import { Given, When, Then } from "@cucumber/cucumber";
import { page } from "./generalSteps";
import { expect } from '@playwright/test'
import mainPage  from "../pageObject/mianPageObj";

Then('the user validates element {string} with attibute {string} with text {string} is visible', async (string, string2, string3) => {
     const selector =  mainPage.buldSelector(string, string2); 
     expect(await selector?.textContent()).toBe(string3);
  });