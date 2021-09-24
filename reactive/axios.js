// 1.Axios란?
//     Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리이다.
//     쉽게 말해 백엔드와 프론트엔드의 통신을 쉽게 하기 위해 Ajax와 더불어 사용된다.

// 2.Axios 특징
//     1) 운영 환경에 따라 브라우저의 XMLHttpRequest 객체 또는 Node.js의 http api 사용
//     2) Promise(ES6) API 사용
//     3) 요쳥과 응답 데이터의 변형
//     4) HTTP 요청 취소
//     5) HTTP 요청과 응답을 JSON 형태로 자동 변경

// 3.사용법
//     1) HTTP Methods
//         클라이언트가 웹서버에게 사용자 요청의 목적/종류를 알리는 수단
//     1.1) GET : 입력한 url에 존재하는 자원을 요청한다.
//             axios.get(url,[,config])
//          GET메서드는 값이나 상태등을 바꿀 수 없다.
  
//     ex) import axios from 'axios';
//         axios.get('https://my-json-server.typicode.com/zofqofhtltm8015/fs/user').then((Response)=>{
//             console.log(Response.data);
//         }).catch((Error)=>{
//             console.log(Error);
//         })

//     1.2) POST : 새로운 리소스를 생성(create)할 때 사용한다.
//             axios.post("url주소",{
//                 data객체
//             },[,config])

//     1.3) Delete : REST 기반 API 프로그램에서 데이터베이스에 저장되어 있는 내용을 삭제하는 목적
//             axios.delete(URL,[,config]);
//             Delete메서드는 서버에 있는 데이터베이스의 내용을 삭제하는 것을 주 목적으로 하기에 두 번째 인자를 아예 전달하지 않는다.
            
//             axios.delete("/thisisExample/list/30").then(function(response){
//                 console.log(response);
//             }).catch(function(ex) {
//                 throw new Error(ex)
//             })

//     1.4) PUT : REST 기반 API 프로그램에서 데이터 베이스에 저장되어 있는 내용을 갱신하는 목적으로 사용
//             axios.put(url[, data[, config]])
//             PUT메서드는 서버에 있는 데이터베이스의 내용을 변경하는 것을 주 목적으로 한다.
