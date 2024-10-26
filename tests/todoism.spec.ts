import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ToDoPage } from '../pages/ToDoPage';
import { assert } from 'console';

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

  // test('Clear tasks', async ({ page }) => {

  // });

});

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
