// React Native
// 페이스북이 개발한 오픈 소스 모바일 애플리케이션 프레임 워크
// react native를 사용하면 real native app를 개발할 수 있음. 즉, 안드로이드나 IOS 모두 개발할 수 있음.
// javascript와 React Library를 사용함.

// 특징
// 1. A collection of s22pecial React components (특별한 React 컴포넌트들의 집합)
// 2. Components compiled to Native Widgets (이러한 컴포넌트들은 컴파일을 통해 Native 위젯으로 변환)
// 3. Naitve platform APIs exposed to Javascript (자바스크립트로 Native 플랫폼 API, 예를 들어 카메라/위치정보 등의 API를 쓸 수 있음)

// 어떻게 동작하는가?
// React 문법에 약간에 React Native가 추가된 코드. 이를 컴파일하면 알아서 Real Native App으로 변환.
// 중요한건 UI는 컴파일을 통해 native views로 변환되지만, 로직은 자바스크립트로 실행됨. 그래서 자바스크립트 로직을 그대로 사용할 수 있다는 장점.
// 자바스크립트 코드를 로직으로 어떻게 그냥 사용할수 있을까? 그건 Native App에는 Native Platform Modules / API가 있고, 자바스크립트와 이어주는 역할을 하는 Javascript Core(Virtual Machine)이 존재하기 때문입니다. Javascript Core(Virtual Machine)가 중간다리 역할을 하는 셈이다