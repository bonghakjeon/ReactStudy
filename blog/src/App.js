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

// 5강 - 버튼에 기능개발을 해보자 & 리액트 state변경하는 법
// 참고 URL - 
// https://codingapple.com/unit/react4-setstate-usestate-onclick-eventhandler/?id=2305

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

// TODO : 아래 터미널 화면에서 노란색 WARNING(경고) 메시지 출력 안 되도록 아래 /*eslint-disable*/ 추가 (2024.07.17 jbh)
// /* eslint-disable */ 란? - Lint(노란색 WARNING(경고) 메시지 출력 해주는 기능) 끄는 기능임
// 참고 URL - https://codingapple.com/unit/react4-setstate-usestate-onclick-eventhandler/?id=2305
/* eslint-disable */ 
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';   // css 파일 "App.css" 쓰려면 상단에서 import 'css파일 경로' 작성

function App() {
  // JSX란?
  // 자바스크립트 파일(확장자 .js)에서 쓰는 html 대용품

  // 데이터 바인딩이란?
  // 변수에 들어있는 데이터를 html 코드 안에 중괄호 {}를 열어서 변수명을 작성하여 변수에 존재하는 데이터를 꽂아넣는 작업이다. 

  // 변수 선언 및 변수에 값 할당할 때 쓰는 키워드
  // let, var, const
  
  // 변수 말고 state에 데이터 저장해서 쓰는 이유?
  // state는 변동사항이 생기면 state쓰는 html도 자동으로 재렌더링 해준다.
  // 자주 변경될거 같은 html 부분(글제목, 상품명, 가격, 구매 날짜 등등...)은 state 문법 useState 사용해서 변수 let [a, b] 만들어서 변수에 값 할당하기 
  
  let logo = 'ReactBlog';
  // let logo = '개발 Blog';
  // useState 문법 사용하되 필요한 데이터를 array에 할당하는 방법 
  let [글제목, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let publishDate = '2월 17일 발행';
  // let [따봉] = useState(0);
  let [ 따봉, 따봉변경 ] = useState(0);
  let [ 인사, 인사변경 ] = useState('안녕');

  // TODO : 특정 인덱스의 데이터(또는 상태)를 변경하는 함수 구현 (2024.07.17 jbh)
  // 참고 URL - https://chatgpt.com/c/0c03aa29-395f-4f41-9f35-193b78b8e3fd
  // 참고 2 URL - https://ella951230.tistory.com/entry/React-useState-%EB%B0%B0%EC%97%B4-%EB%B3%80%EA%B2%BD%EB%B0%A9%EB%B2%95-spread-%EB%AC%B8%EB%B2%95
  // 참고 3 URL - https://velog.io/@tai/React-useState-%EB%B0%B0%EC%97%B4%EC%9D%98-%EA%B0%9D%EC%B2%B4-%EC%88%98%EC%A0%95
  function updateData(index, updateValue) {
    글제목[index] = updateValue;
    b([...글제목]);
  }

  // 테스트 함수 "함수임"
  function 함수임() {
    console.log(1)
  }

  // State 문법 useState(0); 사용한 변수 "따봉" 변경 하려면 
  // State 변경용 함수 "따봉변경"를 아래처럼 따봉변경(따봉 + 1) 사용한다.
  // 아래처럼 사용해야 html 재랜더링도 잘되서 변경된 값이 웹 화면에서도 바로바로 반영된다.
  // <h4>{ 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> { 따봉 }</h4>

  // TODO : 오류 메시지 "ERROR Too many re-renders. React limits the number of renders to prevent an infinite loop." 해결하기 위해 
  //        아래 state를 변화하는 함수(updateData)에 화살표 함수 코드 추가 (2024.07.18 jbh)
  // <span onClick={ ()=>updateData(0, '여자 코트 추천') }>🤟</span>
  // 오류 메시지 뜻 - 리렌더링이 너무 많습니다. React는 무한 루프를 방지하기 위해 렌더의 수를 제한합니다.
  // 오류 발생 원인 - 렌더 과정에서 state를 변화하는 함수(updateData)가 있다면 반복해서 리렌더링 하게 됩니다.
  //                 updateData는 콜백으로 다시 렌더링을 트리거하기 때문이다.
  //                 그 과정 중에서 무한루프에 빠지게 되어 이런 오류가 발생한 것으로 확인 
  // 오류 해결 방법 - updateData를 화살표 함수로 래핑함으로써 해당 코드는 사용자가 클릭할 때만 변할 수 있도록 함수 설정이 됩니다.
  //                 그렇게 되면 무한루프 오류를 해결할 수 있다.
  // 참고 URL - https://anerim.tistory.com/161
  return (
    <div className='App'>
      <div className='black-nav'> 
        <h4>{ logo }</h4>
      </div>
      <div className='list'>
        <h4><span onClick={ ()=>updateData(0, '여자 코트 추천') }>🤟</span> { 글제목[0] }<span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> { 따봉 }</h4>
        <p>{ publishDate }</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] } <span onClick={ ()=>{ 인사변경('반가워') } }>🖐</span> { 인사 } </h4>
        <p>{ publishDate }</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>{ publishDate }</p>
      </div>
      <div onClick={ 함수임 }> 안녕하세요 </div>
      <div onClick={ function(){ console.log(1) } }> 안녕하세요2 </div>
      <div onClick={ () => { console.log(1) }}></div>
    </div>
  );


  // TODO : 아래 주석친 코드 필요시 참고 (2024.07.16 jbh)
  // let post = '강남 우동 맛집';
  // let [글제목, b] = useState('여자 코트 추천');  // 글제목에는 '남자 코트 추천' 자료가 들어있고, b에는 state 변경을 도와주는 함수가 들어있다.
  // let [logo, setLogo] = useState('ReactBlog');  // 사이트 로고는 자주 상태가 변경되지 않으므로 굳이 state 문법을 쓸 필요가 없다.
  // let logo = 'ReactBlog';

  // destructuring 문법 - array 안에 존재하는 각각의 요소값들을 변수로 값할당 해주는 문법 
  // let num = [1, 2];
  // let [a, c] = [1, 2];

  // 아래 주석친 코드는 위의 let [a, c] = [1, 2]; 내용과 같은 기능임.
  // let a = num[0];
  // let c = num[1];


  // return (
  //   <div className='App'>
  //     <div className='black-nav'>
  //       <h4>{ logo }</h4>
  //     </div>
  //     <div className='list'>
  //       <h4>{ 글제목 }</h4>
  //       <p>2월 17일 발행</p>
  //     </div>
  //     <h4></h4>
  //   </div>
  // );


  // let [a,b] = useState('남자 코트 추천');  // a에는 '남자 코트 추천' 자료가 들어있고, b에는 state 변경을 도와주는 함수가 들어있다.
  // let [글제목, b] = useState('남자 코트 추천');   // 글제목에는 '남자 코트 추천' 자료가 들어있고, b에는 state 변경을 도와주는 함수가 들어있다.
  // let posts = '강남 우동 맛집';

  // return (
  //   <div className="App">
  //     <div className="black-nav">
  //       <div>개발 blog</div>
  //     </div>
  //     <div className="list">
  //       <h4>{ 글제목 }</h4>
  //       <p>2월 17일 발행</p>
  //     </div>
  //   </div>
  // );

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
