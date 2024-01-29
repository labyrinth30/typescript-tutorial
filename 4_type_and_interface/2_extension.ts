/**
 * Extension
 * 
 * interface는 extends 키워드를 사용하여 확장할 수 있다.
 * type은 & 연산자를 사용하여 확장할 수 있다.
 */
interface IName{
    name: string;
}
interface IIdol extends IName{
    age: number;
}

const idol: IIdol = {
    name: '사나',
    age: 22,
};

type TName = {
    name : string;
}

type TIdol = TName & {age: number};

const idol2: TIdol = {
    name: '안유진',
    age: 22,
};

interface IIdol2 extends TName{
    age: number;
}

const idol3: IIdol2 = {
    name: '장원영',
    age: 22,
};

type TIdol2 = IName & {age: number};

const idol4: TIdol2 = {
    name: '최예나',
    age: 32,
};

/**
 * extending multiple
 */

type DogName ={
    name: string;
}

type DogAge = {
    age:number;
}

type DogBreed ={
    breed: string;
}
type Dog = DogName & DogAge & DogBreed;

const dog: Dog = {
    name: '멍멍이',
    age: 3,
    breed: '푸들',
};

interface CatName{
    name: string;
}
interface CatAge{
    age: number;
}
interface CatBreed{
    breed: string;
}
interface Cat extends CatName, CatAge, CatBreed{
    color: string;
}

const cat: Cat = {
    name: '야옹이',
    age: 2,
    breed: '페르시안',
    color: 'white',
};

/**
 * Overriding
 */

type THeight = {
    height: number;
}

type TRectangle = THeight & {
    height: string;
    width: number;
}
// const rectangle: TRectangle = {
//     height: ,
//     width: 30,
// };

type TWidth = {
    width: number | string;
}
type TRectangle2 = TWidth & {
    height: number;
    width: number;
};
const rectangle2: TRectangle2 = {
    height: 30,
    width: 30,
};

interface IHeight{
    height: number;
}
// interface IRectangle extends IHeight{
//     height: number | string;
//     width: number;
// }

interface IWidth{
    width: number | string;
}
interface IRectangle2 extends IWidth{
    height: number | string;
    width: number;
}
const rectangle3: IRectangle2 = {
    height: 30,
    width: 30,
};