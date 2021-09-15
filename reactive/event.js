// React 엘리먼트에서 이벤트를 처리하는 방식은 DOM 엘리먼트에서 이벤트를 처리하는 방식과 매우 유사.
// - React의 이벤트는 소문자 대신 캐멀 케이스(camelCase)를 사용
// - JSX를 사용하여 문자열이 아닌 함수로 이벤트 핸들러를 전달
// ```
// <button onClick={activateLasers}>
//   Activate Lasers
// </button>
// ```
// 또 다른 차이점으로, React에서는 false를 반환해도 기본 동작을 방지할 수 없다. 반드시 preventDefault를 명시적으로 호출해야 한다. 예를 들어, 일반 HTML에서 폼을 제출할 때 가지고 있는 기본 동작을 방지하기 위해 다음과 같은 코드를 작성할 수 있다.
// ```
// <form onsubmit="console.log('You clicked submit.'); return false">
//   <button type="submit">Submit</button>
// </form>
// ```
// React에서는 다음과 같이 작성할 수 있다.
// ```
// function Form() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log('You clicked submit.');
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// ```

// 여기서 e는 합성 이벤트. React는 W3C 명세에 따라 합성 이벤트를 정의하기 때문에 브라우저 호환성에 대해 걱정할 필요가 없다. React 이벤트는 브라우저 고유 이벤트와 정확히 동일하게 동작하지는 않는다. React를 사용할 때 DOM 엘리먼트가 생성된 후 리스너를 추가하기 위해 addEventListener를 호출할 필요가 없다. 대신, 엘리먼트가 처음 렌더링될 때 리스너를 제공하면 된다.
// ES6 클래스를 사용하여 컴포넌트를 정의할 때, 일반적인 패턴은 이벤트 핸들러를 클래스의 메서드로 만드는 것입니다. 예를 들어, 다음 Toggle 컴포넌트는 사용자가 “ON”과 “OFF” 상태를 토글 할 수 있는 버튼을 렌더링한다.

// ```
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//     // 콜백에서 `this`가 작동하려면 아래와 같이 바인딩 해주어야 합니다.
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render() {
//     return (

//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );
// ```
// 화살표함수의 사용은 다른 콜백의 생성을 초래할 수 있다. 대부분의 경우 문제가 되지 않으나, 콜백이 하위 컴포넌트에 props로서 전달된다면
// 그 컴포넌트들은 추가로 다시 렌더링을 수행할 수도 있다. 이러한 종류의 성능 문제를 피하고자, 생성자 안에서 바인딩하거나 클래스 필드 문법을
// 사용하는 것을 권장한다.

// 이벤트 핸들러에 인자 전달하기

// 루프 내부에서는 이벤트 핸들러에 추가적인 매개변수를 전달하는 것이 일반적입니다. 예를 들어, id가 행의 ID일 경우 다음 코드가 모두 작동한다.
// ```
// <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
// <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
// ```

// 위 두 줄은 동등하며 각각 화살표 함수와 Function.prototype.bind를 사용한다.

// 두 경우 모두 React 이벤트를 나타내는 e 인자가 ID 뒤에 두 번째 인자로 전달됩니다. 화살표 함수를 사용하면 명시적으로 인자를 전달해야 하지만 bind를 사용할 경우 추가 인자가 자동으로 전달된다.