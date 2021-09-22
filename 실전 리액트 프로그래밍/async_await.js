1.향상된 비동기 프로그래밍 : async await
async await는 비동기 프로그래밍을 동기 프로그래밍처럼 작성할 수 있도록 함수에 추가된 기능이다.
async await를 이용해서 비동기 코드를 작성하면 프로미스의 then 메서드를 체인 형식으로
호출하는 것보다 가독성이 좋아진다. 하지만 프로미스는 비동기 상태를 값으로 다룰 수 있기 때문에
async await보다 큰 개념이다.

1.1 async await 이해하기

1.1.1 async await함수는 프로미스를 반환한다. 프로미스는 객체로 존재하지만 async await은 함수에
적용되는 개념이다.
async function getData() {
    return 123;
}
getData().then(data => console.log(data)); // 123
async await은 항상 프로미스를 반환하므로 함수 호출 후 then 메서드를 사용할 수 있다.
async await함수 내부에서 프로미스를 반환하는 경우를 살펴보자.
async function getData(){
    return Promise.resolve(123);
}
getData.then(data => console.log(data)); // 123

다음과 같이 async await함수 내부에서 예외가 발생하는 경우에는 거부됨 상태인 프로미스가 반환된다.
async function getData(){
    throw new Error('123');
}
getData().catch(error => console.log(error)); // 에러 발생: 123

1.1.2 await 키워드를 사용하는 방법
await 키워드는 async await 함수 내부에서 사용된다. await 키워드 오른쪽에 프로미스를 입력하면
그 프로미스가 처리됨 상태가 될 때까지 기다린다. 따라서 await 키워드로 비동기 처리를 기다리면서 
순차적으로 코드를 작성할 수 있다.
function requestData(value) {
    return new Promise(resolve => 
        setTimeout(() => {
            console.log('requestData:', value);
            resolve(value);
        },100),
    );
}
async function getData() {
    const data1 = await requestData(10);
    const data2 = await requestData(20);
    console.log(data1,data2);
    return [data1, data2];
}
getData();
// requestData : 10
// requestData : 20
// 10 20
requestData함수가 반환하는 프로미스가 처리됨 상태가 될 때까지 console.log(data1,data2)는 실행되지 않는다.
따라서 getData함수를 호출한 결과는 위와 같다.

1.1.3 async await는 프로미스보다 가독성이 좋다
async await와 프로미스는 비동기 프로그래밍을 동기 프로그래밍 방식으로 작성할 수 있게 해준다.
function getDataPromise() {
    asyncFunc1()
    .then(data => {
        console.log(data);
        return asyncFunc2();
    })
    .then(data => {
        console.log(data);
    });
} // 프로미스로 작성한 함수
async function getDataAsync(){
    const data1 = await asyncFunc1();
    console.log(data1);
    const data2 = await asyncFunc2();
    console.log(data2);
} // async await 함수. then 메서드 호출할 필요없음.
비동기 함수 간에 의존성이 높아질수록 async await와 프로미스의 가독성 차이는 더 선명하게 드러난다.
function getDataPromise() {
    return asyncFunc1()
    .then(data1 => Promise.all([data, asyncFunc2(data1)]))
    .then(([data1, data2]) => {
        return asyncFunc3(data1,data2);
    });
} // 프로미스로 작성한 함수
async function getDataAsync(){
    const data1 = await asyncFunc1();
    const data2 = await asyncFunc2(data1);
    return asyncFunc3(data1, data2);
}

