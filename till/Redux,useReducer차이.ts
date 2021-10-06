##Redux와 useReducer의 차이

1. Redux를 사용하는 이유
    리액트 프로젝트의 경우 대부분의 작업시 부모 컴포넌트를 통해 하위 컴포넌트의 데이터를 업데이트 한다.
    컴포넌트의 갯수가 적을때는 문제가 되지 않지만, 점점 늘어날수록 유지보수의 어려움이 발생한다.
    예를 들어 변수명의 변경을 하면 연관된 컴포넌트 파일 모두에 수정을 거쳐야한다.
    그러나 리덕스를 사용하게 되면 데이터 상태를 컴포넌트 외부에서 관리하기 때문에 과정을 단순화 시킬 수 있다.

    1.1 Redux 흐름

        subscribe(상태 변화 감지요청) >> action(상태 변화) >> dispatch(상태업데이트, store에 action 전달)

        >> Store(state 갱신) >> listener(상태 변화 알림) >> 컴포넌트 리렌더링
        
        여러 컴포넌트를 거칠 필요없이 부모 컴포넌트에서 다이렉트로 받는거처럼 리덕스 스토어에서 원하는 상태값을 전달한다.(단방향 데이터 흐름으로 데이터 구조 단순화)

    1.2 Redux의 3원칙
        1.2.1 Single source of truth
            애플리케이션 내에 Store는 반드시 1개 뿐. Store는 반드시 1개만 존재한다.

        1.2.2 State is read-only
            state를 직접 변경해서는 안된다. state를 변화시키는 유일한 방법은 Action을 Reducer에 dispatch(송신,전달)하는 방법 뿐이다.
            즉, state의 변경은 Reducer만 할 수 있다.
        
        1.2.3 Changes are made with pure functions
            Reducer는 순수 함수여야만 한다. Reducer 함수는 parameter로 기존의 state와 Action을 받는데, 
            Reducer 함수는 기존의 state를 직접 변경하지 않고, 새로운 state object(객체)를 작성해서 return해야한다.

2. useReducer : useReducer와 context api로 redux의 기능을 대부분 구현할 수 있다.
                하지만 프로젝트의 규모가 크다면 useReducer와 context api 조합의 한계로 비동기적인 작업시 불편한다.

                import React, { useState, useReducer } from 'react';

                const initialState = { //state 정의
                    winner: '',
                    turn : 'O',
                    tableData : [['','',''], ['','',''], ['','','']],
                };

                const reducer = (state, action) => { //state 변화 정의
                    
                };
                const [state, dispatch] = useReducer(reducer, initialState);

                여러개의 state를 하나의 state로 만들어 state의 갯수를 줄여준다.

3. Redux와 useReducer 차이점 : 리덕스는 dispatch를 통해 state가 동기적으로 변경, useReducer는 비동기적으로 변경

