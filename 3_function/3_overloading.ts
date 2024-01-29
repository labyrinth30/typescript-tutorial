/**
 * Overloading
 * 
 * 파라미터를
 * 1) 하나를 받거나
 * 2) 여러 개를 받는 함수
 */

function stringOrStrings(members: string): string;
function stringOrStrings(member1: string, member2: string, member3: string): string;
// function stringOrStrings(): string;

/**
 * 만약에 하나의 파라미터만 입력받는다면
 * 아이돌 멤버들을 하나의 스트링으로 입력받는다.
 * 예) '안유진, 장원영, 레이'
 * 
 * 만약 세 개의 파라미터를 입력받는다면
 * 아이돌 멤버들을 각각의 파라미터로 입력받는다.
 * 예) '안유진', '장원영', '레이'
 */
function stringOrStrings(memberOrMembers: string, member2?: string, member3?: string): string{
    if(member2 && member3){
        return `아이브 멤버: ${memberOrMembers}, ${member2}, ${member3}`;
    } else{
        return `아이브 멤버: ${memberOrMembers}`;
    }
}
console.log(stringOrStrings('안유진', '장원영', '레이'));
console.log(stringOrStrings('안유진, 장원영, 레이'));
// console.log(stringOrStrings('안유진', '장원영'));
