/**
 * Class Decorator
 */
@Test
@Frozen
@LogTest('PROD')
@ChangeClass
class Idol {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

function Test(constructor: Function) {
    console.log(constructor);
}

function Frozen(constructor: Function) {
    Object.freeze(constructor);
    Object.freeze(constructor.prototype);
}

const yuJin = new Idol('안유진', 17);
console.log(Object.isFrozen(Object.getPrototypeOf(yuJin)));

// decorator factory
function LogTest(env: string){
    return function(constructor: Function){
        console.log(`[${env}] ${constructor}가 실행되었습니다.`);
    }
}

console.log('-------------------');

// 클래스가 선언되는 시점에 한 번 실행된다.
const wonYoung = new Idol('장원영', 16);
console.log(wonYoung);

function ChangeClass<T extends { new(...args: any[]): {} }> (constructor: T){
    return class extends constructor {
        groupName: string = 'IZ*ONE';

        constructor(...args: any[]){
            super(...args);

            console.log('constructor instantiated');
        }
    }
}
