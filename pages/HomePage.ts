import { Page, Locator } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    readonly goToLoginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.goToLoginButton = page.getByRole("navigation").getByRole("link", { name: "Login" });
    }

    async open() {
        await this.page.goto("http://127.0.0.1:5000/");
    }

    async goToLogin() {
        await this.goToLoginButton.click();
    }
}