// const element = <h1>Hello, world!</h1>;
// 위의 희한한 태그 문법은 문자열도, HTML도 아니다.
// JSX라 하며 JavaScript를 확장한 문법이다. UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용해보자.
// JSX라고 하면 템플릿 언어가 떠오를 수도 있지만, JavaScript의 모든 기능이 포함되어 있다.

// JSX란?
// React에서는 본질적으로 렌더링 로직이 UI 로직(이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해
// 데이터가 준비되는 방식 등)과 연결된다는 사실을 받아들인다.
// React는 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는 "컴포넌트"라고 부르는 느슨하게
// 연결된 유닛으로 관심사를 분리한다. 
// React는 JSX 사용이 필수가 아니지만,  대부분의 사람은 JavaScript 코드 안에서 UI 관련 작업을 할 때 시각적으로 더 도움이 된다.
// 가독성과 편의성을 높일 수 있음.
// JSX안에서 Javascript 객체(값)을 사용하기 위해서는 {}로 감싸주어야 한다.

// JSX도 표현식이다
// 컴파일이 끝나면, JSX 표현식이 정규 JavaScript 함수 호출이 되고, JavaScript 객체로 인식된다.
// 즉, JSK를 if 구문 및 for loop 안에 사용하고, 변수에 할당하고, 인자로서 받아들이고, 함수로부터 반환 할 수 있다.
// function getGreeting(user) {
// 	if (user) {
// 	return <h1>Hello, {formatName(user)}!</h1>;
//   }
// return <h1>Hello, Stranger.</h1>;
// }

// JSX 속성 정의
// 속성에 따옴표를 이용해 문자열 리터럴을 정의할 수 있다.
// const element = <div tabIndex="0"></div>
// 중괄호를 사용하여 어트리뷰트에 JavaScript 표현식을 삽입할 수 있다.
// const element = <img src={user.avatarUrl}></img>;
// 어트리뷰트에 JavaScript 표현식을 삽입할 때 중괄호 주변에 따옴표 붙이지 않음

// JSX로 자식 정의
// 태그가 비어있다면 XML처럼 />를 이용해 바로 닫아주어야 한다.
// const element = <img src={user.avatarUrl} />;
// JSX 태그는 자식을 포함할 수 있다.
// const element = (
// 	<div>
// 		<h1>Hello!</h1>
// 		<h2>Good to see you here.</h2>
// 	</div>
// );

// JSX는 객체를 표현한다
// Babel은 JSX를 React.createElement() 호출로 컴파일한다.
// 다음 두 예시는 동일하다
// ```
// const element = (
//   <h1 className="greeting">
//     Hello, world!
//   </h1>
// );
// ```

// ```
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );
// ```
// React.createElement()는 버그가 없는 코드를 작성하는 데 도움이 되도록 몇 가지 검사를 수행하며, 기본적으로 다음과 같은 객체를 생성한다.
// ```
// // 주의: 다음 구조는 단순화되었습니다
// const element = {
//   type: 'h1',
//   props: {
//     className: 'greeting',
//     children: 'Hello, world!'
//   }
// };
// ```
// 이러한 객체를 “React 엘리먼트”라고 하며, 화면에서 보고 싶은 것을 나타내는 표현이라 생각하면 됩니다. React는 이 객체를 읽어서, DOM을 구성하고 최신 상태로 유지하는 데 사용한다