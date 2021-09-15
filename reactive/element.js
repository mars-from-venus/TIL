// 엘리먼트는 React 앱의 가장 작은 단위
// 엘리먼트는 화면에 표시할 내용을 기술함.
// ```
// const element = <h1>Hello, world</h1>;
// ```
// 브라우저 DOM 엘리먼트와 달리 React 엘리먼트는 일반 객체이며(plain object) 쉽게 생성할 수 있습니다. React DOM은 React 엘리먼트와 일치하도록 DOM을 업데이트함.

// DOM에 엘리먼트 렌더링하기
// ```
// <div id="root"></div>
// ```

// 이 안에 들어가는 모든 엘리먼트를 React DOM에서 관리하기 때문에 이것을 “루트(root)” DOM 노드라고 부른다.
// React로 구현된 애플리케이션은 일반적으로 하나의 루트 DOM 노드가 있습니다. React를 기존 앱에 통합하려는 경우 원하는 만큼 많은 수의 독립된 루트 DOM 노드가 있을 수 있다.
// React 엘리먼트를 루트 DOM 노드에 렌더링하려면 둘 다 ReactDOM.render()로 전달하면 된다.
// ```
// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));
// ```

// 렌더링 된 엘리먼트 업데이트하기
// React 엘리먼트는 불변객체이다.  엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경할 수 없다.
// 엘리먼트는 영화에서 하나의 프레임과 같이 특정 시점의 UI를 보여준다.

// 지금까지 소개한 내용을 바탕으로 하면 UI를 업데이트하는 유일한 방법은 새로운 엘리먼트를 생성하고
// 이를 ReactDOM.render()로 전달하는 것이다.

// ```
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );

//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);
// ```

// 변겅된 부분만 업데이트하기

// React DOM은 해당 엘리먼트와 그 자식 엘리먼트를 이전의 엘리먼트와 비교하고 DOM을 원하는 상태로 만드는데 필요한 경우에만 DOM을 업데이트한다.