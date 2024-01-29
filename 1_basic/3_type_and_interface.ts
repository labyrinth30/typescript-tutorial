/**
 * Type and Interface
 */

/**
 * Type
 * 
 * 타입은 쉽게 말해 타입을 정의하는 것이다.
 * 
 */
type NewStringType = string;
const str: NewStringType = 'hello';
type NewNullType = null;
type MaleOrFemale = 'male' | 'femail';

const stringVar: NewStringType = 'test';

type IdolType = {
    name: string;
    year?: number;
}

const yuJin: IdolType = {
    name: 'YuJin',
   // year: 1997,
}

/**
 * Interface
 * 
 */
interface IdolInterface {
    name: string;
    year: number;
}

const yuJin2: IdolInterface = {
    name: '안유진',
    year: 2003,
}
interface IdolIT{
    name: NewStringType;
    year: number;

}

const yuJin3: IdolIT ={
    name:'유진',
    year:2003,
}

interface IdolOptional {
    name: string;
    year?: number;
}
const yuJin4: IdolOptional={
    name:'유진',
    year:2003,
}