/**
 * Generic 함수에서 사용하기
 */

function whatValue(value: any) {
    return value;
}

const value = whatValue('test');

// 제너릭 타입 T를 함수 안에서 사용할 수 있게 된다.
function genericWhatValue<T>(value: T): T{
    return value;
}

// T가 string이 되어서 string 타입을 반환하게 된다.
const genericResult1 = genericWhatValue<string>('test');

// value에 string이 들어가게 되어서 string 타입을 반환하게 된다.
let genericResult2 = genericWhatValue('123');

function multipleGenerics<X, Y, Z>(x: X, y: Y, z: Z){
    return {x, y, z,};

}

const multipleGenericsResult = multipleGenerics<string, number, boolean>('test', 123, true);

const multipleGenericsResult2 = multipleGenerics('test', 123, true);

function getTuple<X, Y>(val1: X, val2: Y){
    return [val1, val2] as const;
}
const tuple = getTuple('test', 123);

class Idol{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name= name;
        this.age = age;
    }
}

class Car{
    brand: string;
    codeName: string;

    constructor(brand: string, codeName: string){
        this.brand=brand;
        this.codeName=codeName;
    }
}

function instantiator<T extends {new (...args: any[]): {}}>(constructor: T, ...args: any[]){
    return new constructor(...args);
}   

console.log(instantiator(Idol, '아이유', 28));
console.log(instantiator(Car, '벤츠', 1111))