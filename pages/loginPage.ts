export class LoginPage {
  async gotoLoginPage(): Promise<void> {
    console.log("Go to login page");
  }

  async login(username: string, password: string): Promise<void> {
    console.log(`Login with username: ${username}, password: ${password}`);
  }
}