##Typescript에서 타입에 대한 유틸리티 클래스

1. 유니온 타입 : 하나의 프로퍼티에 다양한 변수가 올 수 있는 타입
    let args: number|string
    위에서 변수 args는 숫자 값으로도 할당할 수 있고, 문자열로도 할당할 수 있다.
    let arg: "a"|"b"|"c"
    또한 enum값도 union타입으로 표현 할 수 있다. arg 변수는 문자열 a,b,c값만을 할당 할 수 있다.

2. keyof 키워드: keyof키워드는 타입 값에 존재하는 모든 프로퍼티의 키 값을 union 형태로 리턴 받는다.

    interface Todo {
        id: number;
        text: string;
        due: Date;
    }
    type TodoKeys = keyof Todo; // TodoKeys의 타입 = "id" | "text" | "due"

3. Partial<T> : 타입 T의 모든 프로퍼티를 Optional 형태로 바꾸어 준다.
    type Partial<T> = { [P in keyof T]?: T[P];};
    오른쪽에서 P in keyof T는 타입 T의 프로퍼티 키값에 해당하는 P를 전부 옵셔널형태로 감싸 리턴한다.

    interface User {
        name: string;
        age: number;
    }

    let user1: User = {name: 'harry', age: 23} // OK
    let user2: User = {age: 23} // Error
    let user3:Partial<User> = {age: 23} // OK

    Partial의 타입은 원시 타입에 해당하는 프로퍼티 값을 할당할 수 안할 수 있지만 원시 타입에 존재하지 않는 값은 할당 할 수 없음.

    interface Todo {
        title: string;
        description: string;
    }

    function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
        // todo, fieldToUpdate 두개 모두 값이 있을경우 오른쪽 값이 할당 P가 우선
        return { ...todo, ...fieldsToUpdate}
    }

    const todo1 = {
        title: 'organize desk',
        description: 'clear clutter',
    }
    const todo2 = updateTodo(todo1, {
        description: 'throw out trash'
    }) // destructing을 이용하여 원하는 필드만 값을 변경할 수 있음.

4. Require<T> : 모든 Optional 타입들을 언랩핑한다.
    type Required<T> = {
        [P in keyof T]-?: T[P]; // 마이너스 연산자는 옵셔널을 제거해주는 연산자.
    }
    type MutableRequired<T> = { -readonly [P in keyof T]-?: T[P] };  // readonly, optional 제거 
    type ReadonlyPartial<T> = { +readonly [P in keyof T]+?: T[P] };  // readonly, optional 추가

5. Readonly<T> : 모든 프로퍼티를 값을 참조만 할 수 있도록 바꾼다.
    type Readonly<T> = { readonly [P in keyof T]: T[P];};

    interface Card {
        name: string;
        price: number
    }

    type readOnlyCard = Readonly<Card>;
    let readonlyUser: readOnlyCard = {name: 'Sonata', price: 10000}
    readonlyUser.price = 3 // 에러발생

6. Pick<T,K> : T타입으로부터 K프로퍼티만 추출한다.
    type Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    };

    키값 T에 속하는 유니온 타입 K를 받아(= K extends keyof T) 매칭 되는 프로퍼티만 리턴합니다.( = [P in K: T [P])

    interface Todo {
        title: string;
        description: string;
        completed: boolean;
    }
    
    type TodoPreview = Pick<Todo, 'title' | 'completed'>;
    
    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false,
    };