import { Locator, expect } from "@playwright/test";
import { page } from "../steps/generalSteps";



class mainPage {

     buldSelector(selectorType: string, text: string) {
        let element: Locator | undefined = undefined;
        switch (selectorType.toLowerCase()) {
            case "id":
                element =  page.locator('#' + text);
                break;
            case "class":
                element =  page.locator('.' + text);
                break;
            case "xpath":
                element =  page.locator('//*[text()="' + text + '"]');
                break;
            case "attibute":
                element =  page.locator('[' + selectorType + '="' + text + '"]');
                break;
            case "tag":
                element =  page.locator(text);
                break;
            default:
                console.log("Please select a valid selector type");
        }
        expect.soft(element === undefined).toBeFalsy();
        return element;
    }
}
export default new mainPage();