/**
 * Unknown type
 */
let anyValue: any;

anyValue = 1;
anyValue = 'string';
anyValue = true;
anyValue = {};

let unknownValue: unknown;
unknownValue = 1;
unknownValue = 'string';

let anyType: any = anyValue;
let unknownType: unknown = anyValue;
let booleanType: boolean = anyValue;
let arrayType: string[] = anyValue;
let objectType: { name: string } = anyValue;
let nullType: null = anyValue;

// let stringType: string = unknownValue; // Error
// let numberType: number = unknownValue; // Error

anyValue.toUpperCase(); // No Error
anyValue.name; // No Error

// unknownValue.toUpperCase(); // Error
// unknownValue.name; // Error

function isString(target: unknown): target is string{
    return typeof target === 'string';
}

let testValue: unknown;

if(isString(testValue)){
    testValue.toUpperCase();
}

/**
 * Union Type
 */
type uOrString = unknown | string;
type uOrBoolean = unknown | boolean;
type uOrNumber = unknown | number;
type uOrAny = unknown | any;

/**
 * Intersection Type
 */
type uAndString = unknown & string;
type uAndBoolean = unknown & boolean;
type uAndNumber = unknown & number;
type uAndAny = unknown & any;

/**
 * Operator
 */

let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2; // Error
// number1 - number2; // Error

number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;