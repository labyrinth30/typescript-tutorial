/**
 * Type Predicate
 */
function isNumber(input: any): input is number {
    return typeof input === 'number';
}
console.log(isNumber(123));

function isNumberRetBool(input: any): boolean {
    return typeof input === 'number';
}

let number: any = 5;
if(isNumberRetBool(number)){
    number;
}

if(isNumber(number)){
    number;
}

interface Doge{
    name: string;
    age: number;
}
interface Cat{
    name: string;
    breed: string;
}
type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge{
    return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat = Math.random() > 0.5 ? {
    name: 'Doge',
    age: 5,
} : {
    name: 'Cat',
    breed: 'Persian',
};

if(isDoge(doge)){
    doge;
}else{
    doge;
}