import { Page, Locator } from "@playwright/test";

export class ToDoPage {
    readonly page: Page;
    readonly taskInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.taskInput = page.locator("input[id='item-input']");
    }

    async createTask(task: string): Promise<void> {
        await this.taskInput.fill(task);
        await this.taskInput.press('Enter');
    }
    
    async getTask(task: string): Promise<string> {
        return this.page.locator(`div[class='items'] >> div[data-body='${task}']`).innerText();
    }

}