import { Page } from "@playwright/test";

export class ToDoPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async createTask() {
        // Create a new todo
    }
}