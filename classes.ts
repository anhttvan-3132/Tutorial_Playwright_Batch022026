interface IUser {
  name: string;
  email: string;
  isAdmin: boolean;
}

// 2. Class User
class User implements IUser {
  constructor(
    public name: string,
    public email: string,
    public isAdmin: boolean
  ) {}

  getInfo(): string {
    return `User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`;
  }
}

// 3. Class AdminUser (kế thừa)
class AdminUser extends User {
  constructor(name: string, email: string) {
    super(name, email, true);
  }

  deleteUser(user: User): void {
    console.log(`Admin ${this.name} deleted user ${user.name}`);
  }
}

// 4. Tạo instance
const user1 = new User("Van Anh", "thai.thi.van.anh@sun-asterisk.com", false);
const admin1 = new AdminUser("Admin A", "admin@gmail.com");

// 5. Mảng users
const users: User[] = [user1, admin1];

// 6. Duyệt mảng
users.forEach((user) => {
  console.log(user.getInfo());
});

// 7. Gọi method nâng cao
admin1.deleteUser(user1);