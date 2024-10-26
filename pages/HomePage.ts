import { Page, Locator } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.loginButton = page.locator("locator-to-define");
    }

    async open() {
        await this.page.goto("http://localhost:5000");
    }

    async clickLogin() {
        await this.loginButton.click();
    }
}