let a: number = 10;
let b: number = 20;
const sum = (a: number, b: number): number => {
    return a + b;
    };
    console.log(`${a} + ${b} = ${sum(a, b)}`);

const multiply = (a: number, b: number): number => {
    return a * b;
    };
    console.log(`${a} * ${b} = ${multiply(a, b)}`);
let name: string = "Van Anh";
let role: string = "Guest";
const greetUser = (name: string, role: string = "Guest"): string => {
    return `Hello ${name}, your role is ${role}`;
};
console.log(greetUser(name, role));
async function delayPrint(msg: string, time: number): Promise<void> {
    return new Promise((resolve) => {
    setTimeout(() => {
    console.log(msg);
    resolve();
    }, time);
    });
    }
    delayPrint("This message is printed after 2 seconds", 2000);