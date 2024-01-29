/**
 * Narrowing
 * 
 * Narrowing은 Union Type에서 더욱 구체적인 타입으로 
 * 논리적으로 유추할 수 있게 되는 걸 의미한다.
 */

// let numberOrString: number | string = 'test'; // number | string
// numberOrString; // string

// const decimal = 12.332;
// console.log(decimal.toFixed(2));

/**
 * Narrowing의 종류
 * 
 * 1) Assingment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator Narrowing
 * 6) instanceof Narrowing
 * 7) Discriminated union Narrowing (차별된 유니언 내로잉)
 * 8) Exhaustiveness checking (완전한 검사)
 */

// 1) Assingment Narrowing
// 특정값을 할당해서 내로잉
let numOrString: number | string = 'test';

numOrString.toString(); // strings

// 2) typeof Narrowing
// typeof 연산자를 사용해서 내로잉
numOrString = Math.random() > 0.5 ? 123 : 'abc';

if (typeof numOrString === 'string') {
    numOrString; // string
} else {
    numOrString; // number
}

// 3) Truthiness Narrowing
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['test', 'test2'];
 
if(nullOrString){
    nullOrString;
} else{
    nullOrString;
}

// 4) Equality Narrowing
// ===, !== 연산자를 사용해서 내로잉
let numOrString2: number | string = Math.random() > 0.5 ? 123 : 'abc';

let stringOrBool2: string | boolean = Math.random() > 0.5 ? '아이브' : true;

if(numOrString2 === stringOrBool2){
    numOrString2;
    stringOrBool2;
}else{
    numOrString2;
    stringOrBool2; 
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ? 123 : Math.random() > 0.5 ? '안유진' : null;

if(typeof numberOrStringOrNull === 'number'){
    numberOrStringOrNull;
}else{
    numberOrStringOrNull;
}

// 5) in operator Narrowing 
// in 연산자를 사용해서 내로잉
interface Human{
    name: string;
    age: number;
}
interface Dog{
    name: string;
    type: string;
}

let human: Human = {
    name: '안유진',
    age: 32,
}

let dog: Dog = {
    name: '멍멍이',
    type: '요크셔테리어',
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;   

// console.log('age' in human);

if('type' in humanOrDog){
    humanOrDog;
} else{
    humanOrDog;
}

// 6) instanceof Narrowing
// instanceof 연산자를 사용해서 내로잉
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : '안유진';

if(dateOrString instanceof Date){
    dateOrString;
} else{
    dateOrString;
}

// 7) Discriminated union Narrowing (차별된 유니언 내로잉)
interface Animal{
    type: 'dog' | 'human';
    height?: number;
    // 강아지의 종
    breed?: string;
}

let animal: Animal = Math.random() > 0.5 ? 
{
    type: 'human',
    height: 180,
} : {
    type: 'dog',
    breed: '요크셔테리어',
};
if(animal.type === 'dog'){
    animal.breed;
} else {
    animal.height;
}

interface Human2{
    type: 'human';
    height: number;
}
interface Dog2{
    type: 'dog';
    breed: string;
}

interface Fish2{
    type: 'fish';
    swim: boolean;
}

type HumanOrDog2 = Human2 | Dog2 | Fish2;

let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ?
{
    type: 'human',
    height: 180,
} : Math.random() > 0.5 ? {
    type: 'dog',
    breed: '요크셔테리어',
} : {
    type: 'fish',
    swim: true,
};

if(humanOrDog2.type === 'human'){
    humanOrDog2;
} else{
    humanOrDog2;
}

// 8) Exhaustiveness checking (완전한 검사)
// switch문을 사용해서 내로잉
switch(humanOrDog2.type){
    case 'human':
        humanOrDog2;
        break;
    case 'dog':
        humanOrDog2;
        break;
    case 'fish':
        humanOrDog2;
        break;
    default:
        humanOrDog2; // never

        const _check: never = humanOrDog2;
        break;
}