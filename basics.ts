let username: string = "Van Anh";
let age: number = 20;
let isActive: boolean = true;
let roles: string[]=["admin","editor","user"];
let user: {name:string; email:string; isAdmin: boolean}={
    name:"Van Anh", email:"thai.thi.van.anh@sun-asterisk.com", isAdmin:true};
console.log(`User: ${username} (email: ${user.email}), Roles: ${roles}, Active: ${isActive}`);
function checkAge(age: number): string {
if (age >= 18) {
    return "Adult";
} else {
    return "Under 18";
}
}
const ageStatus = checkAge(age);
console.log(`Age status: ${ageStatus}`);