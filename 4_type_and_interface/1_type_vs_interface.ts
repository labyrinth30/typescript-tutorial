/**
 * Type vs Interface
 */
interface IObject{
    name: string;
    age: number;
}
type TObject = {
    name: string;
    age: number;
}

// function
interface IFunction{
    (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서는 할 수 있지만
 * Interface에서는 할 수 없는 것들
 */

// 1) primitive 타입 선언하기
type Name = string;

// 2) union 타입 선언하기
type UnionType = string | number;

// 3) primitive list 또는 tuple 타입 선언하기
type TupleType = [string, number];

/**
 * Interface에서는 할 수 있지만
 * Type에서는 할 수 없는 것들
 */

// interface merging
interface IRectangle{
    width: number;
}
interface IRectangle{
    height: number;
}

let rectangle: IRectangle = {
    width: 10,
    height: 20,
};

type TRectangle = {
    width: number;
 };
// type TRectangle = {
//     height: number;
// };

/**
 * Interface Merging
 */
class Review {
    // property
    getY = (x: number) => {return x};

    // method
    getX(x: number){
        return x;
    }
}

interface GetXnY{
    getX:(x: number) => number;
    getY: (y: number) => number;
}

interface GetXnY{
    getX: (x: number) => number;
    // getY: (y: number) => number;
}

interface GetXnY2{
    getX(x: number): number;
    getY(y: number): number;
}
interface GetXnY2{
    getX(x: number): number;
    getY(y: string): number;
}

const testMethod2: GetXnY2 = {
    getX(x){
        return x;
    },
    getY(y){
        return 1;
    }
}