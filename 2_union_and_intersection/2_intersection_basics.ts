/**
 * Intersection
 * 
 * And
 */
interface Human{
    name: string;
    age: number;
}

interface Contacts{
    phone: string;
    address: string;
}
type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
    name: '이윤하',
    age: 32,
    phone: '010-0000-0000',
    address: '대한민국',
};

type NumberAndString = number & string; // never

// let NumberAndString: NumberAndString = 'test';