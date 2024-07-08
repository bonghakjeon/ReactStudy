import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// App.js 자바스크립트 파일 안에 html 코드를 짜도 오류 없이 웹페이지가 실행되는 이유?
// App.js에 존재하는 html 코드 (<div> ~~~ </div>)를 폴더 "public"에 존재하는 index.html 이라는 메인 페이지에다가
// 집어 넣어주세요.라고 index.js 소스파일이 요청함.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
