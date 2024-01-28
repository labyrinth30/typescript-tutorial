/**
 * Types
 */
let helloText: string = 'Hello';
// helloText = true; // Error: Type 'boolean' is not assignable to type 'string'.

/**
 * JS의 7개의 타입
 * 7개의 타입
 */
const stringVar: string = 'String';
const numberVar: number = 10;
const booleanVar: boolean = true;
const bigIntVar: bigint = BigInt(999);
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입
 */
// any - 아무 타입이나 입력할 수 있는 치트키 같은 타입
let anyVar: any;
anyVar = 'String';
anyVar = 10;
anyVar = true;

let testNumber: number = anyVar; // anyVar가 number라고 타입을 지정해도 에러가 나지 않음
let testString: string = anyVar;
let testBoolean: boolean = anyVar;

// unknown - 알 수 없는 타입
let unknownType: unknown;
unknownType = 'String';
unknownType = 10;
unknownType = true;

// let testNumber2: number = unknownType; // 다른 변수에 할당 불가
// let testString2: string = unknownType;
// let testBoolean2: boolean = unknownType;
let unknownType2: unknown = unknownType; // unknown 타입에 unknown 타입을 할당 가능
let anyType2: any = unknownType; // unknown 타입에 any 타입을 할당 가능

// never - 어떠한 값도 저장되거나 반환되지 않을 떄 사용하는 타입
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = 'String';

/**
 * 리스트 타입
 */
const koreanGirlGroup: string[] = ['아이브', '레드벨벳', '블랙핑크'];
const booleanList: boolean[] = [true, false, true];