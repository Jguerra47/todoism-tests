import { Page, Locator } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly testAccountButton: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.testAccountButton = page.locator("#register-btn");
        this.loginButton = page.locator("#login-btn");
    }

    async loginWithTestAccount() {
        await this.testAccountButton.click();
        await this.page.waitForTimeout(2000);
        await this.loginButton.click();
    }
}