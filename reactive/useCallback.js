// 1.함수 메모이제이션
// useCallback() hook 함수는 성능 최적화에 사용된다.
// 함수를 메모이제이션하기 위해서 사용되는 hook 함수이다.
// 첫번째 인자로 넘어온 함수를, 두번째 인자로 넘어온 배열
// 내의 값이 변경될 때까지 저장해놓고 재사용할 수 있게 해준다
// const Callback = useCallback(함수,배열);

// 예를 들어, 어떤 React 컴포넌트 함수 안에 함수가 선언이 
// 되어 있다면 이 함수는 해당 컴포넌트가 렌더링될 때마다
// 새로운 함수가 생성된다.
// const add = () => x + y;

// 하지만 useCallback()을 사용하면, 해당 컴포넌트가
// 랜더링되더라도 그 함수가 의존하는 값들이 바뀌지 않는 한
// 기존 함수를 계속해서 반환한다. 즉, x 또는 y 값이
// 바뀌면 새로운 함수가 생성되어 add 변수에 할당되고,
// x와 y 값이 동일하다면 다음 랜더링 때 이 함수를 
// 재사용한다.
// const add = useCallback(() => x+y, [x,y]);

// 컴포넌트가 랜더링될 때마다 함수를 새로 선언하는 것은
// 자바스크립트가 브라우저에서 얼마나 빨리 실행되는지를
// 생각해보면 성능 상 큰 문제가 되진 않는다. 따라서 단순히
// 컴포넌트 내에서 함수를 반복해서 생성하지 않기 위해 
// useCallback()을 사용하는 것은 큰 의미가 없거나
// 손해인 경우도 있다. 그럼에도 쓰는 이유는?

// 2.자바스크립트 함수 동등성
// useCallback() hook 함수를 언제 사용해야하는지 
// 이해하려면 먼저 자바스크립트에서 함수 간의 동등함이
// 어떻게 결정되는 지 알 필요가 있다.
// 다음 함수들은 동일하지 않다.
// const add1 = () => x + y; //undefined
// const add2 = () => x + y; //undefined
// add1 === add2 //false

// 자바스크립트에서 함수도 객체로 취급이 되기 때문에
// 메모리 주소에 의한 참조 비교가 일어나기 때문이다.
// 이런 자바스크립트의 특성은 React컴포넌트 함수 내에서
// 어떤 함수를 다른 함수의 인자로 넘기거나 자식 컴포넌트의
// prop으로 넘길 때 예상치 못한 성능 문제를 야기한다.

// 3.의존 배열로 함수를 넘길 때
// 많은 React hook 함수들이 불필요한 작업을 줄이기 위해
// 두 번째 인자로, 첫 번째 함수가 의존해야하는 배열을 받는다
// 예를 들어, useEffect() 함수는 두 번째 인자로 넘어온
// 의존 배열이 변경될 때만 첫 번째 인자로 넘어온 함수를
// 호출한다.

// 예를 들어, 다음의 컴포넌트에서 API를 호출하는 fetchUser 함수가 변경될 때만 호출된다. 
// 여기서 예상치 못한 문제가 발생한다. fetchUser는 함수이기 때문에,
// userId값이 바뀌든 말든 컴포넌트가 렌더링될 때마다
// 새로운 참조값으로 변경이 된다. 그러면 useEffect() 
// 함수가 호출되어 user 상태값이 바뀌고, 그러면 다시
// 랜더링이 되고 그럼 또 다시 useEffect() 함수가 
// 호출되는 악순환이 반복된다.

// import React, { useState, useEffect } from "react";

// function Profile({ userId }) {
//   const [user, setUser] = useState(null);

//   const fetchUser = () =>
//     fetch(`https://your-api.com/users/${userId}`)
//       .then((response) => response.json())
//       .then(({ user }) => user);

//   useEffect(() => {
//     fetchUser().then((user) => setUser(user));
//   }, [fetchUser]);

//   // ...
// }

// 위와 같은 상황에서 useCallback() hook함수를 이용하면
// 컴포넌트가 다시 랜더링 되더라도 fetchUser 함수의
// 참조값을 동일하게 유지할 수 있다. 따라서 의도한대로,
// useEffect()에 넘어온 함수는 userId 값이 변경되지
// 않는 한 재호출 되지 않는다.

// import React, { useState, useEffect } from "react";

// function Profile({ userId }) {
//   const [user, setUser] = useState(null);

//   const fetchUser = useCallback(
//     () =>
//       fetch(`https://your-api.com/users/${userId}`)
//         .then((response) => response.json())
//         .then(({ user }) => user),
//     [userId]
//   );

//   useEffect(() => {
//     fetchUser().then((user) => setUser(user));
//   }, [fetchUser]);

//   // ...
// }

// ...핵심은 불필요한 랜더링을 줄여준다.
