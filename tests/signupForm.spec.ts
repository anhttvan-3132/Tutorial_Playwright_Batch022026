import { test, expect } from '@playwright/test';

test('Assertions on Signup Form', async ({ page }) => {
  // Giả lập load trang chứa form
  await page.setContent(`
    <form id="signup-form">
      <h1>Đăng ký tài khoản</h1>

      <input type="text" id="username" placeholder="Tên người dùng" />
      <input type="email" id="email" placeholder="Email" />
      <input type="password" id="password" placeholder="Mật khẩu" />

      <button type="submit">Đăng ký</button>

      <p id="success-message" style="display:none;">Đăng ký thành công!</p>
    </form>

    <script>
      document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();
        document.querySelector('#success-message').style.display = 'block';
      });
    </script>
  `);

  // ========== ASSERT GIAO DIỆN ==========
  await expect(page.locator('#signup-form')).toBeVisible();
  await expect(page.locator('h1')).toHaveText('Đăng ký tài khoản');

  // ========== ASSERT INPUT ==========
  const username = page.locator('#username');
  const email = page.locator('#email');
  const password = page.locator('#password');

  await expect(username).toBeVisible();
  await expect(username).toHaveAttribute('placeholder', 'Tên người dùng');

  await expect(email).toHaveAttribute('type', 'email');
  await expect(password).toHaveAttribute('type', 'password');

  // ========== FILL FORM ==========
  await username.fill('vananh');
  await email.fill('vananh@test.com');
  await password.fill('123456');

  await expect(username).toHaveValue('vananh');

  // ========== ASSERT BUTTON ==========
  const submitBtn = page.locator('button[type="submit"]');
  await expect(submitBtn).toBeEnabled();
  await expect(submitBtn).toHaveText('Đăng ký');

  // ========== SUBMIT ==========
  await submitBtn.click();

  // ========== ASSERT KẾT QUẢ ==========
  const successMsg = page.locator('#success-message');
  await expect(successMsg).toBeVisible();
  await expect(successMsg).toHaveText('Đăng ký thành công!');
});
