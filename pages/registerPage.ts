import { Page, Locator } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;

  readonly usernameInput: Locator;
  readonly emailInput: Locator;
  readonly maleRadio: Locator;
  readonly hobbyReading: Locator;
  readonly interestedCheckbox: Locator;
  readonly countrySelect: Locator;
  readonly dobInput: Locator;
  readonly registerButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.usernameInput = page.locator('//input[@id="username"]');
    this.emailInput = page.locator('//input[@id="email"]');
    this.maleRadio = page.locator('//input[@value="male"]');
    this.hobbyReading = page.locator('//input[@value="reading"]');
    this.interestedCheckbox = page.locator('//input[@id="interested"]');
    this.countrySelect = page.locator('//select[@id="country"]');
    this.dobInput = page.locator('//input[@id="dob"]');
    this.registerButton = page.locator('//button[text()="Register"]');
  }

  async goto() {
    await this.page.goto(
      'https://material.playwrightvn.com/01-xpath-register-page.html'
    );
  }

  async registerUser() {
    await this.usernameInput.fill('testuser01');
    await this.emailInput.fill('testuser01@gmail.com');

    await this.maleRadio.check();
    await this.hobbyReading.check();
    await this.interestedCheckbox.check();

    await this.countrySelect.selectOption('Vietnam');
    await this.dobInput.fill('2000-01-01');

    await this.registerButton.click();
  }
}
