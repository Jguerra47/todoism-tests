import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ToDoPage } from '../pages/ToDoPage';

test.describe('Todoism Test Suite', () => {
  let toDoPage: ToDoPage;

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.open();
    await homePage.goToLogin();

    const loginPage = new LoginPage(page);
    await loginPage.loginWithTestAccount();

    toDoPage = new ToDoPage(page);
  });

  test('Add a task', async ({ page }) => {
    const task = "Creation Task";
    await toDoPage.createTask(task);
    expect(await toDoPage.getTaskText(task)).toContain(task);
  });

  test('Complete a task', async ({ page }) => {
    const task = "Completion Task";
    await toDoPage.createTask(task);
    await toDoPage.completeTask(task);
    expect(await toDoPage.getTaskCheckboxCompleted(task)).toBeVisible();
  });

  test('Clear tasks', async ({ page }) => {
    const task = "Clear Task";
    await toDoPage.createTask(task);
    await toDoPage.completeTask(task);
    await toDoPage.clearTasks();
    expect(await toDoPage.getTask(task)).toBeHidden();
  });

});
