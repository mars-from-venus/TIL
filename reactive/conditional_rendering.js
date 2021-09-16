React에서는 원하는 동작을 캡슐화하는 컴포넌트를 만들 수 있다. 
이렇게 하면 애플리케이션의 상태에 따라 컴포넌트 중 몇 개만을 렌더링 할 수 있게 된다.

React에서 조건부 렌더링은 JavaScript에서의 조건 처리와 같이 동작한다. 
if나 조건부 연산자와 같은 JavaScript 연산자를 현재 상태로 나타내는 엘리먼트를 만드는 데에 사용한다. 그러면 React는 현재 상태에 맞게 UI를 업데이트한다.

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }

이제 사용자의 로그인 상태에 맞게 위 컴포넌트 중 하나를 보여주는 Greeting 컴포넌트를 만든다.

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <Greeting isLoggedIn={false} />,
    document.getElementById('root')
  );
  이 예시는 isLoggedIn prop에 따라서 다른 인사말을 렌더링 한다.

엘리먼트 변수
엘리먼트를 저장하기 위해 변수를 사용할 수 있다. 출력의 다른 부분은 변하지 않은 채로 컴포넌트의 일부를 조건부로 렌더링 할 수 있다.
로그아웃과 로그인 버튼을 나타내는 두 컴포넌트가 있다고 가정한다.

function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
}

이 컴포넌트는 현재 상태에 맞게 <LoginButton />이나 <LogoutButton />을 렌더링한다. 
또한 이전 예시에서의 <Greeting />도 함께 렌더링한다.

class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    }

    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {button}
        </div>
      );
    }
  }
  
  ReactDOM.render(
    <LoginControl />,
    document.getElementById('root')
  );

  변수를 선언하고 if를 사용해서 조건부로 렌더링 하는 것은 좋은 방법이지만 더 짧은 구문을 사용하고 싶을 때가 있을 수 있다. 
  여러 조건을 JSX 안에서 인라인(inline)으로 처리할 방법 몇 가지를 아래에서 소개한다.

  논리 && 연산자로 If를 인라인으로 표현하기
