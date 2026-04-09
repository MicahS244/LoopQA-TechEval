import { Page } from "@playwright/test";
export class LoginPage {
    constructor(private page: Page) { }

    async goToPage() {
        await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    }
    async login() {
        
        await this.page.getByRole('textbox',{name: 'Username'}).fill('admin');
        await this.page.getByRole('textbox',{name: 'Password'}).fill('password123');
        await this.page.getByRole('button', { name: 'Sign in'}).click();
    }
}