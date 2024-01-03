import { After, AfterAll, Before, BeforeAll, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, chromium, Page } from "playwright";

let page: Page;
let browser: Browser;

setDefaultTimeout(40000)

BeforeAll(async () => {
    try {
        browser = await chromium.launch({ headless: false });
        const context = await browser.newContext();
        await context.grantPermissions(['geolocation'], {origin: 'https://www.qp-gcp.homedepot.ca/'});
        page = await context.newPage();
        await page.goto("https://www.qp-gcp.homedepot.ca/en/home.html/");
        await page.setViewportSize({ width: 1920, height: 1080 });
    } catch (error) {
        console.log('error during test due to :' + error)   
        throw new Error("chronium browser not launched due to "+ error )
    }
    return page;
});

AfterAll(async () => {
    await browser.close();
});

export { page, browser}

