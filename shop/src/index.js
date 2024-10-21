// import 처리시 내가 만든 js 파일들은 ./ 부터 작성 해야함.
// (예) './index.css'; './App'; ./reportWebVitals';

// import 처리시 설치한 라이브러리들은 ./ 작성 안함.
// (예) 'react'; 'react-dom/client'; 'react-router-dom';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 외부 라이브러리 'react-router-dom' 사용하기 위해서 터미널 열어서 명령어 "npm install react-router-dom@6" 입력 및 엔터 
// 명령어 "npm install react-router-dom@6"에서 숫자 6이 의미하는 것은 
// 'react-router-dom' 버전 6을 의미한다.
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
// 컴포넌트 <BrowserRouter> 사용해서 컴포넌트 <App /> 감싸기
root.render(
  // 상세페이지 컴포넌트 Detail 
  // -> 콜백함수 LifeCycle Hook(뜻 - 갈고리) useEffect 실행 
  // -> console.log('안녕') 실행될 때, 웹브라우저 콘솔창에서 '안녕' 2번 출력 되지 않고
  // 1번만 '안녕' 출력되게 하려면 아래처럼 <React.StrictMode>라는 태그 제거(또는 주석)하면 됨.
  // <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  // </React.StrictMode>
);


// TODO : 아래 주석친 코드 필요시 참고 (2024.09.11 jbh)
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
