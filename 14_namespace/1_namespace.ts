/**
 * Namespace
 * 
 * 관련있는 코드들을 모듈로 묶을 수 있는 방법
 */
namespace Home {
    class Idol {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    }

    export const yuJin = new Idol(
        '안유진',
        23,
    );
}

namespace Post {
    class User {
        email: string;
        name: string;

        constructor(email: string, name: string) {
            this.email = email;
            this.name = name;
        }
    }

    const admin = new User('admin@younha.ai', Home.yuJin.name);

    console.log(admin);
}

namespace Comment {
    const name = 'comment';

    namespace Detail {
        const page = 'detail';

        console.log(name);
        console.log(page);
    }

    console.log('----------');
    console.log(name);
    // console.log(page);
}