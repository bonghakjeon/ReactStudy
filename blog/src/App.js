// [코딩애플] React 스터디 
// Part 1 : 블로그 제작 & 기초 문법
// 1강 - React 배우기 전에 쓰는 이유부터 알아야
// 참고 URL - 
// https://codingapple.com/unit/react-0-why-use-react/?id=2305

// 2강 - 리액트 React 설치와 개발환경 셋팅
// 참고 URL - 
// https://codingapple.com/unit/react1-install-create-react-app-npx/?id=2305

// 3강 - 리액트에서 레이아웃 만들 때 쓰는 JSX 문법 3개
// 참고 URL - 
// https://codingapple.com/unit/react2-jsx-classname-html/?id=2305

// 4강 - 중요한 데이터는 변수말고 state에 담습니다
// 참고 URL - 
// https://codingapple.com/unit/react-3-state-usestate-hook/?id=2305

// react 프로젝트 blog를 웹페이지로 실행할 때, 터미널에서 사용하는 명령어 "npm start" 입력 및 엔터를 치면 된다.
// App.js - 메인 페이지 역할 
// 폴더 node_modules - react 프로젝트 구동에 필요한 라이브러리 코드 보관함. 
// 폴더 public - static 파일(index.html 파일, 이미지 파일(logo192.png, logo512.png) 등등...) 모아놓는 곳 
// 폴더 src - 실제로 react 프로젝트 코드 짜는 곳 

// package.json - 프로젝트 정보를 쭉 기업 해놓는 json 파일 (프로젝트 파일 이름(name), 버전(version), 리액트 프로젝트 "blog" 구동에 필요한 여러가지 라이브러리명 기입(dependencies))

// App.js 자바스크립트 파일 안에 html 코드를 짜도 오류 없이 웹페이지가 실행되는 이유?
// App.js에 존재하는 html 코드 (<div> ~~~ </div>)를 폴더 "public"에 존재하는 index.html 이라는 메인 페이지에다가
// 집어 넣어주세요.라고 index.js 소스파일이 요청함.

// 터미널에서 Command 명령어 "npm start" 입력 및 엔터키 치면 
// 아래 오류 메시지 출력시 해결 방법 참고 (2024.07.08 jbh)
// 아래 오류 메시지가 출력하면 터미널에서 Command 명령어 "npm install --save-dev @babel/plugin-proposal-private-property-in-object" 입력 및 엔터키 치면 오류 해결 가능함. 
// 참고 URL - https://inblog.ai/devgrr/897
// 참고 2 URL - https://www.inflearn.com/questions/953199/%EB%A0%8C%EB%8D%94-%EC%8B%9C-bebel-dependencies-%EC%98%A4%EB%A5%98-%EB%A9%94%EC%84%B8%EC%A7%80-%EB%B0%9C%EC%83%9D
// 참고 3 URL - https://stackoverflow.com/questions/76435306/babel-preset-react-app-is-importing-the-babel-plugin-proposal-private-propert

// 터미널에서 Command 명령어 "npm start" 입력 및 엔터키 치면 출력되는 오류 메시지
// "One of your dependencies, babel-preset-react-app, is importing the       
// "@babel/plugin-proposal-private-property-in-object" package without      
// declaring it in its dependencies. This is currently working because      
// "@babel/plugin-proposal-private-property-in-object" is already in your   
// node_modules folder for unrelated reasons, but it may break at any time. 

// babel-preset-react-app is part of the create-react-app project, which    
// is not maintianed anymore. It is thus unlikely that this bug will        
// ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to
// your devDependencies to work around this error. This will make this message
// go away."

// TODO : 터미널에서 Command 명령어 "npm start" 입력 및 엔터키 치면 React 프로젝트가 구글 Chrome 으로 실행 되도록 기본 브라우저(default browser) 설정하기 (2024.07.08 jbh)
// 참고 URL - https://taehi-dev.tistory.com/181

import logo from './logo.svg';
import { useState } from 'react';
import './App.css';   // css 파일 "App.css" 쓰려면 상단에서 import 'css파일 경로' 작성

function App() {
  // JSX란?
  // 자바스크립트 파일(확장자 .js)에서 쓰는 html 대용품

  // 데이터 바인딩이란?
  // 변수에 들어있는 데이터를 html 코드 안에 중괄호 {}를 열어서 변수명을 작성하여 변수에 존재하는 데이터를 꽂아넣는 작업이다. 
  
  // 변수 말고 state에 데이터 저장해서 쓰는 이유?
  // state는 변동사항이 생기면 state쓰는 html도 자동으로 재렌더링 해준다.

  // let [a,b] = useState('남자 코트 추천');  // a에는 '남자 코트 추천' 자료가 들어있고, b에는 state 변경을 도와주는 함수가 들어있다.
  let [글제목, b] = useState('남자 코트 추천');   // 글제목에는 '남자 코트 추천' 자료가 들어있고, b에는 state 변경을 도와주는 함수가 들어있다.
  let posts = '강남 우동 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div className="list">
        <h4>{ 글제목 }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );

  // TODO : 아래 주석친 코드 필요시 참고 (2024.07.12 jbh)
  // let postWear = '남자코트 추천';
  // let postFood = '강남 우동 맛집';
  // let postStudy = '파이썬 독학';
  // let publishDate = '2월 17일 발행';

  // return (
  //   <div className='App'>
  //     <div className='black-nav'> 
  //       <div>ReactBlog</div>
  //     </div>
  //     <div className='list'>
  //       <h4>{postWear}</h4>
  //       <p>{publishDate}</p>
  //     </div>
  //     <div className='list'>
  //       <h4>{postFood}</h4>
  //       <p>{publishDate}</p>
  //     </div>
  //     <div className='list'>
  //       <h4>{postStudy}</h4>
  //       <p>{publishDate}</p>
  //     </div>
  //   </div>
  // );

  // let post = '강남 우동 맛집';

  // return (
  //   <div className="App">
  //     <div className='black-nav'>
  //       {/* <h4 id={post}>블로그임</h4> */}
  //       {/* 글자 색상 'red', 글자 크기 16px 설정 */}
  //       <h4 style={ {color: 'red', fontSize: '16px' } }>블로그임</h4>
  //     </div>
  //     {/* <h4>강남 우동 맛집</h4> */}
  //     <h4>{ post }</h4>
  //   </div>
  // );

  // TODO : 아래 주석친 테스트 코드 필요시 참고 (2024.07.11 jbh)
  // var data = 'red';
  // return (
  //   <div className='App'>
  //     <div className='black-nav'>
  //       <div>개발 blog</div>
  //       <div className='{data}'>안녕하세요</div>
  //       <div style={ {color:'blue', fontSize:'30px'} }> 글씨 </div>
  //     </div>
  //   </div>
  // );
  // let post = '강남 우동 맛집';
  // return (
  //   <div className="App">
  //     <div className="black-nav">
  //       {/* <h4>블로그임</h4> */}
  //       <div>블로그임</div>
  //       <div>{ post }</div>
  //     </div>
  //   </div>
  // );
}

export default App;
