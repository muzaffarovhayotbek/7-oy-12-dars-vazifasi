"use strict";
// 1. Enum
// 1. Topshiriq:
// enum Colors {
//   Red = 'qizil',
//   Green = 'green',
//   Blue = 'blue',
// }
// function getColor(color: Colors): string {
//   switch (color) {
//     case Colors.Red:
//       return 'Qizil rang';
//     case Colors.Green:
//       return 'Yashil';
//     case Colors.Blue:
//       return 'Ko`k';
//     default:
//       return 'Bunday rang mavjud emas';
//   }
// }
// console.log(getColor(Colors.Red));
// 2. Interface
// 2. Topshiriq:
// interface Car {
//   brand: string;
//   model: string;
//   year: number;
// }
// let car: Car = {
//   brand: 'BMW',
//   model: 'X7',
//   year: 2024,
// };
// console.log(car);
// 3. Intersection
// 4. Topshiriq:
// interface Person {
//   name: string;
//   age: number;
// }
// interface Employee {
//   workplace: string;
// }
// type EmployeeResult = Person & Employee;
// let res: EmployeeResult = {
//   name: 'John',
//   age: 16,
//   workplace: 'Microsoft',
// };
// console.log(res);
// 4. Massiv
// 6. Topshiriq:
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log(sum);
// 7.Topshiriq:
// let str = ['salom', 'world', 'hello', 'num', 'true'];
// let res: string[] = [];
// for (let i = 0; i < str.length; i++) {
//   if (str[i].length > 5) {
//     res.push(str[i]);
//   }
// }
// console.log(res);
// 5. Obyekt
// 8. Topshiriq:
// let Users = {
//   name: 'hayotbek',
//   age: 16,
//   email: 'hayotbek@gmail.com'
// }
// console.log(Users);
// 6. Funktsiyalar
// 10. Topshiriq
// function sumTwoNumber(firstNum, secondNum) {
//   return firstNum + secondNum;
// }
// let firstNum = 10;
// let secondNum = 20;
// let res = sumTwoNumber(firstNum, secondNum);
// console.log(res);
// 7. Tuple
// 12. Topshiriq:
// type PersonType [string , number, string]
// let person : PersonType = ['John', 16, 'hayotbek@gmail.com']
// console.log(person);
// 10. Type Alias
// 18. Topshiriq:
// type UserType  =  {
//   name: string,
//   age: number,
//   isStudent: boolean
// }
// let User: UserType = {
//   name : 'hayotbek',
//   age: 16,
//   isStudent: false,
// }
// console.log(User);
// 8. Any
// 14 . Topshiriq:
// const any = [
//   1,
//   2,
//   3,
//   4,
//   5,
//   'salom',
//   'xayr',
//   {
//     name: 'BMW',
//     yaer: 2024,
//     color: 'black',
//     price: 105000,
//   },
// ];
// for (let i = 0; i < any.length; i++) {
//   if (typeof any[i] == 'number') {
//     console.log(any[i]);
//   }
// }
// let btn = [1, 2, 3, 4, 5, 6, 'salom', 'xary'];
// for (let i = 0; i < btn.length; i++) {
//   if (typeof btn[i] == 'string') {
//     console.log(btn[i]);
//   }
// }
// 19. Topshiriq:
// type firstUser = {
//   name: string
// }
// type SecondUser = {
//   age: number
// }
// type User = firstUser & SecondUser
// let user: User = {
//   name: 'hayotbek',
//   age: 16
// }
// console.log(user);
// 20 .Topshiriq:
