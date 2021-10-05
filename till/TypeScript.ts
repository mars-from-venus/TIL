// 1. 타입스크립트 : 자바스크립트를 기반으로 정적 타입 문법을 추가한 프로그래밍 언어
// 2. 타입스크립트의 특징
//     1)정적 타입의 컴파일 언어이며 타입스크립트 컴파일러 또는 바벨을 통해 자바스크립트 코드로 변환
//     2)자바스크립트의 슈퍼셋, 즉 자바스크립트 기본 문법에 타입스크립트의 문법을 추가한 언어
//     3)클래스, 인터페이스, 상속, 모듈 등과 같은 객체지향 프로그래밍 패턴을 제공
// 3. 기본 문법
//     1)다양한 기본 타입을 제공 : Boolean,Number,String,Object,Array,Tuple,Enum,Any,Void,Null,Undefined,Never
//         1.1)변수에 타입 설정
//             let str:string = 'hi';
//             let num:number = 100;

//             let arr:Array = [1,2,3];
//             let arr2:number[] = [1,2,3];

//             let obj:object = {};
//             let obj2:{name:string,age:number} = {
//                 name:'hoho',
//                 age:22
//             };
//         1.2)함수에 타입 설정
//             function add(a:number,b:number): number{
//                 return a+b;
//             }
//             //옵셔널 파라미터
//             function log(a:string,b?:string,c?:string){
//                 console.log(a);
//             }
//         1.3)Tuple: 배열의 타입 순서와 배열 길이를 지정할 수 있는 타입
//             var arr:[string,number] = ['aa',100];
//         1.4)Enum: Number 또는 String 값 집합에 고정된 이름을 부여할 수 있는 타입.
//                 값의 종류가 일정한 범위로 정해져 있는 경우에 유용하다. 0부터 시작한다.
//                 enum Shoes{
//                     Nike = '나이키',
//                     Adidas = '아디다스'
//                 }
//         1.5)Any: 모든 데이터 타입을 허용
//         1.6)Void: 변수에는 undefined와 null만 할당하고 함수에는 리턴 값을 설정할 수 없는 타입
//         1.7)Never: 특정 값이 절대 발생할 수 없을 때 사용
//     2)인터페이스: 타입을 정의한 규칙을 의미
//         interface User{
//             age: number;
//             name: string;
//         }
//         2.1)변수와 함수에 활용한 인터페이스
//             var person: User = {
//                 age:30,
//                 name:'aa'
//             }
//             function getUser(user: User){
//                 console.log(user);
//             }
//         2.2)인덱싱
//             interface StringArray{
//                 [index:number]: string;
//             }
//             var arr2: StringArray = ['a','b','c'];
//             arr[0] = 10 //Error;
//         2.3)딕셔너리 패턴
//             interface StringRegexDictionary{
//                 [key:string]:RegExp
//             }
//             var obj:StringRegexDictionary = {
//                 cssFile:/\.css$/,
//                 jsFile:'a' //Error
//             }
//             obj['cssFile'] = /\.css$/;
//             obj['jsFile'] = 'a' //Error
//         2.4)인터페이스 확장
//             interface Person{
//                 name:string;
//                 age:number;
//             }
//             interface User extends Person{
//                 language: string;
//             }
//     3)오퍼레이터
//         3.1)Union 타입: 자바스크립트의 OR 연산자와 같은 의미의 타입. Union 타입으로 지정하면 각 타입의 공통된 속성에만 접근 가능
//             function askSomeone(someone:Developer2|Person){
//                 console.log(someone);
//             }
//         3.2)Intersection 타입: 자바스크립트의 AND 연산자와 같은 의미의 타입. 각각의 모든 타입이 포함된 객체를 넘기지 않으면 에러
//             function askSomeone(someone:Developer&Person){
//                 console.log(someone);
//             }
//     4)제네릭: 한 가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트를 생성하는데 사용. 타입을 마치 함수의 파라미터처럼 사용하는 것
//         function logText(text:T):T{
//             return text;
//         }
//         logText<string>('aa');
//         logText<number>(100);
//     5)타입 추론: 타입 추론이란 타입스크립트가 코드를 해석하는 과정
//         var a = true;
//         a = 100; //Error
//         해당 코드는 a 변수를 Boolean 타입으로 추론했기 때문에 Number타입을 할당하면 에러가 발생
//         5.1)가장 적절한 타입: 배열에 담긴 값들을 추론하여 Union타입으로 묶어 나가는 것을 의미
//             var arr = [1,2,true];
//             Typescript는 해당 코드의 타입을 Number|Boolean 으로 정의함.
//         5.2)인터페이스와 제네릭을 이용한 타입 추론 방식
//             interface Dropdown{
//                 value:T,
//                 text:'String'
//             }
//             var items:Dropdown<Boolean>{
//                 value:true,
//                 text:'aa'
//             }
//         5.3)타입 단언: 타입스크립트가 해석하는 것보다 더 확실한 목적을 가지고 개발자가 해당 코드에 타입을 직접 지정하는 것
//             var a;
//             a = 10;
//             a = 'string';
//             var b = a as string;
//             타입 단언으로 null을 대비한 분기문을 작성할 필요가 없음.
//     6)타입 호환: 특정 타입이 다른 타입에 잘 호환되는지를 의미
//         6.1)구조적 타이핑: 코드 구조 관점에서 타입이 서로 호환되는지를 판단. 구조적으로 더 큰 타입은 작은 타입을 호환 불가능.
//             interface Developer{
//                 name:string;
//                 age:string;
//             }
//             interface Person {
//                 name:string;
//             }
//             var developer: Developer;
//             var person: Person;
//             developer = person; //Error
//             person = developer;
