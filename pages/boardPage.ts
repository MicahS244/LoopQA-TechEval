import { Page, expect } from "@playwright/test";
export class BoardPage {
    constructor(private page: Page) { }
    
    async goToApp(app: string) {
        await this.page.click(`text=${app}`);
    }
    async verifyTaskInColumn(task: string, column: string) {
        const columnLocator = this.page.locator(`text=${column}`).locator('..');
        await expect(columnLocator).toContainText(task);
    }
    async verifyTags(task: string, tags: string[]) {
        const taskCard = this.page.locator(`text=${task}`).locator('..');
        for (const tag of tags) {
            await expect(taskCard).toContainText(tag);
        }
    }
}