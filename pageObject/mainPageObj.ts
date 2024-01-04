import { Locator, expect } from "@playwright/test";
import { page } from "../steps/hooks";



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
                const attibute = text.split(",")[0];
                const attibuteValue = text.split(",")[1];
                element =  page.locator('[' + attibute + '="' + attibuteValue + '"]');
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