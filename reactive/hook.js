Hook의 개요
React 버전 16.8부터 React요소로 새로 추가되었다. Hook을 이용하여 기존 Class바탕의 코드를 작성할 필요 없이
상태 값과 여러 React의 기능을 사용할 수 있다.

hook의 특징
1.선택적 사용: 기존의 코드를 다시 작성할 필요 없이 일부의 컴포넌트들 안에서 Hook을 사용할 수 있다. 
그러나 만약 당장 Hook이 필요 없다면, Hook을 사용할 필요는 없다.
2.100% 이전 버전과의 호환성: Hook은 호환성을 깨뜨리는 변화가 없다.
3.현재 사용 가능: Hook은 배포 16.8.0에서 사용할 수 있다.
4.서로 비슷한 것을 하는 작은 함수의 묶음으로 컴포넌트를 나눌 수 있다.

import React, { useState } from 'react';

function Example() {
  // "count"라는 새로운 상태 값을 정의합니다.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

여기서 useState가 바로 Hook 이다. Hook을 호출해 함수 컴포넌트(function component) 안에 state를 추가했다. 이 state는 컴포넌트가 다시 렌더링 되어도 그대로 유지된다. useState는 현재의 state 값과 이 값을 업데이트하는 함수를 쌍으로 제공한다. 우리는 이 함수를 이벤트 핸들러나 다른 곳에서 호출할 수 있다. 이것은 class의 this.setState와 거의 유사하지만, 이전 state와 새로운 state를 합치지 않는다는 차이점이 있다.
useState는 인자로 초기 state 값을 하나 받는다. 카운터는 0부터 시작하기 때문에 위 예시에서는 초기값으로 0을 넣어준 것입니다. this.state와는 달리 useState Hook의 state는 객체일 필요가 없다. 물론 원한다면 그렇게도 가능하다. 이 초기값은 첫 번째 렌더링에만 딱 한번 사용된다.

여러 state 변수 선언하기
하나의 컴포넌트 내에서 State Hook을 여러 개 사용할 수 있다.

function ExampleWithManyStates() {
    // 상태 변수를 여러 개 선언했습니다!
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
    // ...
  }
  배열 구조 분해(destructuring) 문법은 useState로 호출된 state 변수들을 다른 변수명으로 할당할 수 있게 해준다. 이 변수명은 useState API와 관련이 없다. 대신에 React는 매번 렌더링할 때 useState가 사용된 순서대로 실행한다.




