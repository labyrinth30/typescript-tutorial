/**
 * Loopholes of Any
 */

let number: number;
number = 1;

// number.toUpperCase(); // Error

// (number as any).toUpperCase(); // No Error

const multiplyTwo= (a: number, b: number): number => a * b;
let arg1: any = '안유진';
let arg2: any = true;

multiplyTwo(arg1, arg2); // No Error

let iu:any = {name: '아이유', age: 22};
iu.age = '스물두살'; // No Errory

const callbackRunner = (x: number, y: number, callback: any) => {
    return callback(x);
}

const callback = (x: number, y: number) => {
    return x + y;
}
console.log(callbackRunner(1, 2, callback)); 
