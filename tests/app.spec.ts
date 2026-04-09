import {test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { BoardPage } from '../pages/boardPage';
import testData from './testData.json';


test.describe('Task Management App Tests', () => {
    // Drive each scenario from JSON to avoid hardcoding values in the test
    for (const data of testData) {
        test(data.name, async ({ page }) => {
            const loginPage = new LoginPage(page);
            const boardPage = new BoardPage(page);

            await loginPage.goToPage();
            await loginPage.login();

            await boardPage.goToApp(data.app);
            await boardPage.verifyTaskInColumn(data.task, data.column);
            await boardPage.verifyTags(data.task, data.tags);
        });
    }
    });
