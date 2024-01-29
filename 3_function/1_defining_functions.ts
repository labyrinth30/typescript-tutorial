/**
 * Defining Function
 */

// function printName(name){
// console.log(name);
// }

function printName(name: string){
    console.log(name);
}

function returnTwoCouples(person1: string, person2: string){
    return `${person1}과 ${person2}는 커플입니다.`
}

console.log(returnTwoCouples('안유진', '이윤하'));

// returnTwoCouples('아이유',1);

/**
 * Optional Parameter
 * 
 */

function multiplyOrReturn(x: number, y?: number){
    if(y){
        return x * y;
    } else{
        return x;
    }
}

// console.log(multiplyOrReturn(10, 2));   // 20
// console.log(multiplyOrReturn(10));      // 10

function multiplyOrReturn2(x: number, y:number = 20){
    return x * y;
}

// console.log(multiplyOrReturn2(10, 2));   // 20
// console.log(multiplyOrReturn2(10));      // 200

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args: string[]){
    return args.map((arg) => arg.toUpperCase());
}

console.log(getInfiniteParameters('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'));
// console.log(getInfiniteParameters(1,2,3,));

/**
 * Return Type
 */

function addTwoNumbers(x: number, y: number){
    return x + y;
}
addTwoNumbers(1,2);
function randomNumber(){
    return Math.random() > 0.5 ? 123 : 'abc';
}
randomNumber();

function subtractTwoNumbers(x: number, y: number): number{
    // return '이게 반환이 되나?';
    return x - y;
} 

const subtractTwoNumbersArrow = (x: number, y: number): number => x - y;

/**
 * 특수 반환 타입
 * 
 * void / never
 */
function doNotReturn(): void{
    console.log('저는 반환하지 않습니다.');

    return;
}
doNotReturn();

function neverEndingLoop() : never{
    while(true){

    }
}
function throwError2() : never{
    throw new Error();
}