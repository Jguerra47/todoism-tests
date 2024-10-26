import { Page, Locator } from "@playwright/test";

export class ToDoPage {
    readonly page: Page;
    readonly taskInput: Locator;
    readonly clearTasksButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.taskInput = page.locator("input[id='item-input']");
        this.clearTasksButton = this.clearTasksButton = page.locator("#clear-btn");;
    }

    async createTask(task: string): Promise<void> {
        await this.taskInput.fill(task);
        await this.taskInput.press('Enter');
    }

    async completeTask(task: string): Promise<void> {
        await this.getTask(task).locator("span[class='item-body']").click();
    }
    
    async getTaskText(task: string): Promise<string> {
        return await this.getTask(task)
            .innerText();
    }

    async getTaskCheckboxCompleted(task: string): Promise<Locator> {
        return await this.getTask(task)
            .locator("span[class='inactive-item']")
    }

    async clearTasks(): Promise<void> {
        await this.clearTasksButton.click();
    }

    getTask(task: string): Locator {
        return this.getTasks().locator(`div[data-body='${task}']`);
    }

    getTasks(): Locator {
        return this.page.locator("div[class='items']")
    }

}