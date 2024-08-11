// [코딩애플] React 스터디 
// Part 1 : 블로그 제작 & 기초 문법
// 1강 - React 배우기 전에 쓰는 이유부터 알아야
// 참고 URL - https://codingapple.com/unit/react-0-why-use-react/?id=2305

// 2강 - 리액트 React 설치와 개발환경 셋팅
// 참고 URL - https://codingapple.com/unit/react1-install-create-react-app-npx/?id=2305

// 3강 - 리액트에서 레이아웃 만들 때 쓰는 JSX 문법 3개
// 참고 URL - https://codingapple.com/unit/react2-jsx-classname-html/?id=2305

// 4강 - 중요한 데이터는 변수말고 state에 담습니다
// 참고 URL - https://codingapple.com/unit/react-3-state-usestate-hook/?id=2305

// 5강 - 버튼에 기능개발을 해보자 & 리액트 state변경하는 법
// 참고 URL - https://codingapple.com/unit/react4-setstate-usestate-onclick-eventhandler/?id=2305

// 6강 - array, object state 변경하는 법
// 참고 URL - https://codingapple.com/unit/react-5-setstate-homework-edit-button/?id=2305

// 7강 - Component : 많은 div들을 한 단어로 줄이고 싶으면

// 8강 - 리액트 환경에서 동적인 UI 만드는 법 (모달창만들기)

// 9강 - map : 많은 div들을 반복문으로 줄이고 싶은 충동이 들 때

// 10강 - 자식이 부모의 state 가져다쓰고 싶을 때는 props

// 11강 - props를 응용한 상세페이지 만들기

// 12강 - input 1 : 사용자가 입력한 글 다루기

// 13강 - input 다루기 2 : 블로그 글발행 기능 만들기

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

// TODO : React App Component(function App()) 실행 후 html 코드가 웹브라우저 Chrome에 랜더링 되기 직전
//        현재 날짜 가져오기 메서드 GetToDay가 자동으로 호출되어 실행할 수 있도록 
//        useEffect 훅(Hook) 사용하기 (2024.08.09 jbh)
// 참고 URL - https://chatgpt.com/c/49030741-5eb1-4ae3-a55b-c2af3d63557a
import React, { useEffect } from 'react';

// Component - 함수명 App
// index.js 자바스크립트에 가면 App함수를 Component 식으로 
// 호출해서 사용하는 것을 알 수 있다. <App></App>
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
  
  // state 변경함수는 늦게 처리된다. (비동기 처리)
  // (예) 글제목변경, 따봉변경, 인사변경, setModal, setType, setTitle, 입력값변경 등등...
  // 자바스크립트에서는 state 변경함수와 같이 
  // 늦게 처리되는 함수는 제쳐두고 
  // 바로 다음 줄을 실행한다. (예) console.log(입력값)
  // 그런 특성이 있어서 아래와 같은 <input> 태그에 문자 'a'를 입력해도
  // state 변경함수가 늦게 처리되어 console 창에는 문자 'a'가 출력되지 않는다.
  // 결과적으로 아래처럼 state 함수 입력값변경(e.target.value); 완료되기 전에 제쳐두고
  // 바로 다음 줄인 console.log(입력값)을 먼저 실행해준다.
  // <input onChange={(e)=>{ 입력값변경(e.target.value); console.log(입력값) }} />



  let logo = 'ReactBlog';
  // let logo = '개발 Blog';
  // useState 문법 사용하되 필요한 데이터를 array에 할당하는 방법 
  // let [글제목, b] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [ 글제목, 글제목변경 ] = useState(['남자코트 추천', '강남 우동맛집', '파이썬 독학']);
  let publishDate = '2월 17일 발행';
  // let [따봉] = useState(0);
  // let [ 따봉, 따봉변경 ] = useState(0);
  let [ 따봉, 따봉변경 ] = useState([0, 0, 0]);
  let [ 인사, 인사변경 ] = useState('안녕');

  let [ modal, setModal ] = useState(false);     // false - 모달창 안 보임
  // let [ modal, setModal ] = useState(true);   // true - 모달창 보임 
  // let [ modal, setModal ] = useState('닫힘'); 
  // let [ modal, setModal ] = useState('열림');
  // let [ modal, setModal ] = useState(0);   // 0 - 닫힘 의미
  // let [ modal, setModal ] = useState(1);   // 1 - 열림 의미

  // let [ type, setType ] = useState(0);
  // 아래 state [ title, setTitle ]이 부모 컴포넌트 App과 자식 컴포넌트 Modal
  // 둘 다 필요할 경우 부모 컴포넌트 App에 선언 해야함.
  // state 만드는 곳은 state 사용하는 컴포넌트들 중 최상위 컴포넌트에 설정 해야함.
  let [ title, setTitle ] = useState(0);   // 모달창 글제목 state

  let [ 입력값, 입력값변경 ] = useState('');   // <input> 태그에 입력한 값 저장할 때 사용하는 state, useState에는 초기값으로 텅빈 문자(공백 - '') 지정

  let [ date, setDate ] = useState('');  // <p> 태그에 현재 날짜 출력 state

  // TODO : 버튼 클릭하면 array 객체 "글제목"에 저장된 데이터를 가나다순으로 정렬하는 함수 구현 (2024.07.19 jbh)
  // 참고 URL - https://velog.io/@jessiii/%EC%BD%94%EB%94%A9%EC%95%A0%ED%94%8C-JS-%EA%B8%B0%EC%B4%88-%EB%B0%B0%EC%97%B4-%EC%A0%95%EB%A0%AC-%ED%95%A8%EC%88%98-sort-map-filter-%ED%95%A8%EC%88%98
  // 참고 2 URL - https://brunch.co.kr/@swimjiy/12
  // 참고 3 URL - https://noirstar.tistory.com/359
  /// <summary>
  /// array 객체 글제목 데이터 가나다순 정렬 
  /// </sumary>
  function sortData() {
      // array나 object 자료형 왼쪽에 붙일 수 있는
      // spread operator 문법(...) 사용해서 
      // 변수(글제목 - array 데이터(['남자 코트 추천', '강남 우동맛집', '파이썬 독학'])가 
      // 저장된 메모리 주소값 할당)안에 들어있는 괄호([])를 벗겨주고 
      // 다시 새로운 array 객체 copy 만들기 
      // 새로운 array 객체 copy를 만들면 
      // 메모리 주소값이 다른 완전 독립적인 array 복사본이 생성된다.
      // 그리고 독립적인 사본을 shallow copy 아니면 deep copy 라고 한다.
      // spread operator 문법(...) 사용해서 독립적인 array나 object 객체를 새로 만드는 이유?
      // 원본 array나 object 객체에 저장된 데이터를 변경 없이 유지해서 
      // 필요할 때 해당 원본 array나 object 객체에 저장된 데이터를 다시 불러와서 사용하기 위해서이다.
      // let copy = [...글제목];   
      let copy = [...글제목];
      copy.sort();   // 함수 sort 호출해서 array 객체 copy에 저장된 데이터 가나다순 정렬 

      // copy와 글제목이 서로 다른 array 객체여야(copy === 글제목 결과값 false)
      // 새로운 array 객체 copy에 들어있는 값으로 기존 state를 갈아 치워줌.
      글제목변경(copy);   
  }

  // TODO : 특정 인덱스의 데이터(또는 상태)를 변경하는 함수 구현 (2024.07.17 jbh)
  // 참고 URL - https://chatgpt.com/c/0c03aa29-395f-4f41-9f35-193b78b8e3fd
  // 참고 2 URL - https://ella951230.tistory.com/entry/React-useState-%EB%B0%B0%EC%97%B4-%EB%B3%80%EA%B2%BD%EB%B0%A9%EB%B2%95-spread-%EB%AC%B8%EB%B2%95
  // 참고 3 URL - https://velog.io/@tai/React-useState-%EB%B0%B0%EC%97%B4%EC%9D%98-%EA%B0%9D%EC%B2%B4-%EC%88%98%EC%A0%95
  
  /// <summary>
  /// array 객체 글제목 특정 인덱스에 할당된 데이터 수정  
  /// </sumary>
  function updateData(index, updateValue) {
      // 1. array 데이터 [1, 2, 3]을 임의의 메모리 공간에 저장
      // 2. 변수 let arr에는 1번의 array 데이터가 저장된 메모리 주소값 할당
      // let arr = [1, 2, 3];

      // array나 object 자료형 왼쪽에 붙일 수 있는
      // spread operator 문법(...) 사용해서 
      // 변수(글제목 - array 데이터(['남자 코트 추천', '강남 우동맛집', '파이썬 독학'])가 
      // 저장된 메모리 주소값 할당)안에 들어있는 괄호([])를 벗겨주고 
      // 다시 새로운 array 객체 copy 만들기 
      // 새로운 array 객체 copy를 만들면 
      // 메모리 주소값이 다른 완전 독립적인 array 복사본이 생성된다.
      // 그리고 독립적인 사본을 shallow copy 아니면 deep copy 라고 한다.
      // spread operator 문법(...) 사용해서 독립적인 array나 object 객체를 새로 만드는 이유?
      // 원본 array나 object 객체에 저장된 데이터를 변경 없이 유지해서 
      // 필요할 때 해당 원본 array나 object 객체에 저장된 데이터를 다시 불러와서 사용하기 위해서이다.
      // let copy = [...글제목];   
      let copy = [...글제목];   
      copy[index] = updateValue;
      console.log(copy === 글제목);

      // copy와 글제목이 서로 다른 array 객체여야(copy === 글제목 결과값 false)
      // 새로운 array 객체 copy에 들어있는 값으로 기존 state를 갈아 치워줌.
      글제목변경(copy);   

      // 글제목[index] = updateValue;
      // 글제목변경([...글제목]);
      // let copy = 글제목;
      // copy[index] = updateValue;
      // 글제목변경(copy)
  }

  {/* 1. 버튼 누르면 글 하나 추가되는 기능 만들기 */}
  {/* 1번 힌트 */}
  {/*[1] html 직접 하나 만들 필요없음. state(글제목변경) 조작하면 됩니다. 
         (html은 반복문으로 자동 생성되기 때문) */}
  {/* [2] array에 자료 추가하는 법은 구글로 검색해서 찾기 */}
  {/* 참고 URL - https://scoring.tistory.com/entry/React-%EB%B0%B0%EC%97%B4%EC%97%90-%ED%95%AD%EB%AA%A9-%EC%B6%94%EA%B0%80-%EC%A0%9C%EA%B1%B0-%EC%88%98%EC%A0%95 */}
  {/* 참고 2 URL - https://seo-tory.tistory.com/53 */}
  /// <summary>
  /// array 객체에 새로운 글제목 데이터 추가
  /// </summary>
  function addData(addValue) {
    let copy = [...글제목];

    // 버튼 "글발행" 옆 <input> 태그에 글제목에 추가할 문자열(입력값)을 1자이상 입력한 경우 
    if(입력값.length >= 1) {
      copy.unshift(입력값);
      글제목변경(copy);

      let copyCount = [...따봉];
      copyCount.unshift(0);
      따봉변경(copyCount);
    }
    // TODO : alert 사용하여 문자열(입력값)을 입력 안 한 경우 경고 메시지 출력하기 (2024.08.09 jbh)
    // 참고 URL - https://velog.io/@jaehooo13/React-alert-%EC%B0%BD-%EB%9D%84%EC%9A%B0%EA%B8%B0
    // 버튼 "글발행" 옆 <input> 태그에 글제목에 추가할 문자열(입력값)을 입력 안 한 경우 
    else {
      alert('글제목을 입력하세요.');
      // return;
    }

    
    // TODO : 아래 주석친 테스트 코드 필요시 참고 (2024.08.09 jbh)
    // let copy = [...글제목];
    // let copy = [...글제목];

    // Spread(전개 연산자) 사용한 방법 
    // 글제목변경([...글제목, addValue]); // 새로운 글제목 데이터(addValue)를 맨 뒤로 추가하는 코드
    // 글제목변경([addValue, ...글제목]);    // 새로운 글제목 데이터(addValue)를 맨 앞으로 추가하는 코드
    
    // concat함수를 이용해서 불변성 지키는 방법 
    // 글제목변경(글제목.concat(addValue));   // 새로운 글제목 데이터(addValue)를 맨 뒤로 추가하는 코드
  }

  {/* 2. 글마다 삭제버튼 & 기능 만들기 */}
  {/* [1] html 직접 하나 만들 필요없음. state(글제목변경) 조작하면 됩니다. 
          (html은 반복문으로 자동 생성되기 때문) */}
  {/* 참고 URL - https://scoring.tistory.com/entry/React-%EB%B0%B0%EC%97%B4%EC%97%90-%ED%95%AD%EB%AA%A9-%EC%B6%94%EA%B0%80-%EC%A0%9C%EA%B1%B0-%EC%88%98%EC%A0%95 */}
  {/* 참고 2 URL - https://chatgpt.com/c/186b83e1-a306-496a-8434-bd354de72de7 */}
  /// <summary>
  /// array 객체 글제목 특정 인덱스에 할당된 데이터 삭제
  /// </summary>
  function deleteData(deleteIndex) {
    let copy = [...글제목];
    copy.splice(deleteIndex, 1);
    글제목변경(copy);

    let copyCount = [...따봉];
    copyCount.splice(deleteIndex, 1);
    따봉변경(copyCount);

    // TODO : 아래 주석친 테스트 코드 필요시 참고 (2024.08.09 jbh)
    // 메서드 filter 사용하여 함수 파라미터 deleteIndex와 일치하지 않는 원소만 추출해서 새로운 배열 만듬
    // 글제목변경((글제목) => 글제목.filter((item, index) => index !== deleteIndex));
  }

  // 테스트 함수 "함수임"
  function 함수임() {
      console.log(1)
  }

  function displayModal(index, isModal) {
    setTitle(index)

    // isModal = (true == isModal) ? false : true;

    setModal(isModal)
  }

  /// <summary>
  /// array 객체 따봉 특정 인덱스에 할당된 데이터 수정  
  /// </sumary>
  function UpdateCount(index) {
    let copy = [...따봉];
    copy[index] += 1;
    따봉변경(copy);
  }

  
  /// <summary>
  /// 현재 날짜 가져오기 
  /// </summary>
  function GetToDay() {
    // TODO : 자바스크립트로 현재 날짜 구하기 (2024.08.09 jbh)
    // 참고 URL - https://velog.io/@jaehooo13/React-%ED%98%84%EC%9E%AC-%EB%82%A0%EC%A7%9C-%EC%B6%9C%EB%A0%A5%ED%95%98%EA%B8%B0
    
    // 현재 날짜 가져오기 
    const today = new Date();

    // 원하는 형식으로 날짜 설정 
    const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

    setDate(formattedDate);
  }

  // TODO : React App Component(function App()) 실행 후 html 코드가 웹브라우저 Chrome에 랜더링 되기 직전
  //        현재 날짜 가져오기 메서드 GetToDay가 자동으로 호출되어 실행할 수 있도록 
  //        useEffect 훅(Hook) 사용하기 (2024.08.09 jbh)
  // 참고 URL - https://chatgpt.com/c/49030741-5eb1-4ae3-a55b-c2af3d63557a
  useEffect(() => {
    GetToDay(); // React App Component(function App())가 렌더링될 때 GetToDay 메서드 호출
  }, []); // 빈 배열을 넣으면 React App Component(function App())가 마운트될 때 한 번만 실행됨




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

      <button onClick={ ()=>sortData() }>가나다순정렬</button>

      {/* <button onClick={ ()=>updateData(0, '여자코트 추천') }>글수정</button> */}
      
      {
        글제목.map(function(title, index) {
          return (
            // map 함수 사용해서 반복문으로 html 생성 하려면 
            // html 코드에 key={i} 작성 필수 
            <div className='list' key={index}>
              {/* <h4 onClick={()=>{ setModal(!modal); }}>{ 글제목[index] } <span onClick={()=>{ UpdateCount(index) }}>👍</span> {따봉[index]} </h4> */}
              {/* <h4 onClick={()=>{ displayModal(index, !modal); }}>{ 글제목[index] } <span onClick={()=>{ UpdateCount(index) }}>👍</span> {따봉[index]} </h4> */}
              <h4 onClick={()=>{  setModal(!modal); setTitle(index); }}>{ 글제목[index] } 
                {/* <span> 태그에 있는 따봉 모양 👍 버튼 한 번 클릭하면 총 3번 중복 클릭한 이벤트 발생하며, 따봉 갯수가 올라가면서 모달창도 같이 출력된다.  
                    (<span> 태그 클릭 + <h4> 태그 클릭 + <div> 태그 클릭) */}
                {/* 이벤트 버블링이란? 아래 <span> 태그 따봉 모양 👍 버튼 클릭할 때, 클릭 이벤트가 중복 되며 상위 html 요소(<h4> 태그, <div> 태그)로 퍼지는 현상이다. */}
                {/* <span onClick={()=>{ UpdateCount(index) }}>👍</span> {따봉[index]}  */}

                {/* 클릭 이벤트가 중복 되며 상위 html 요소(<h4> 태그, <div> 태그)로 퍼지는
                    이벤트 버블링 현상을 막으려면  아래처럼 파라미터로 이벤트 객체 e 작성 및 
                    onClick 이벤트 메서드 실행되는 몸체 안에 e.stopPropagation(); 함수를 호출 해준다. */}
                <span onClick={(e)=>{ e.stopPropagation(); UpdateCount(index); }}>👍</span> {따봉[index]} 
              </h4>
              <p>{ publishDate }</p>
              <p>현재 날짜 : { date }</p>
              <button onClick={()=> deleteData(index) }>삭제</button>
            </div>
          )
        })
      }
      
      <input type='text' onChange={(e)=>{ 입력값변경(e.target.value); }}/> 
      <button onClick={()=>{ addData(입력값); }}>글 발행</button>

      {
        /* 저 state가 true면 <Modal></Modal> false면 아무것도 보여주지마세요. */
        // modal == true ? <Modal></Modal> : null
        // null은 텅빈 값 의미하고 비어있는 html용으로 자주 사용 
        // modal == true ? <Modal color={'skyblue'} 글제목={글제목} /> : null
        // modal == true ? <Modal color="orange" 글제목={글제목} /> : null
        // modal == true ? <Modal color={'yellow'} title={title} 글제목={글제목} updateData={updateData} /> : null
        modal == true ? <Modal color={'yellow'} 글제목변경={글제목변경} title={title} 글제목={글제목} /> : null
      }
      
      {/* 아래 html 코드 필요시 참고 (2024.07.25 jbh) */}
      {/* <button onClick={ ()=> { setTitle(0); }}>글제목0</button>
      <button onClick={ ()=> { setTitle(1); }}>글제목1</button>
      <button onClick={ ()=> { setTitle(2); }}>글제목2</button> */}
      {/* <div className='list'> 
        <h4>{ 글제목[0] }<span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h4>
        <p>{ publishDate }</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }<span onClick={ ()=>{ 인사변경('반가워') } }>🖐</span> { 인사 } </h4>
        <p>{ publishDate }</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal) }}>{ 글제목[2] }</h4>
        <p>{ publishDate }</p>
      </div> */}
      <div className='list'>
        {/* <h4><span onClick={ ()=>{ setModal(true) } }> { 글제목[2] } </span></h4> */}
        <h4>
          {/* 글제목 누르면 모달창 열리고 한번 더 누르면 모달창이 닫히는 기능 구현 */}
          {/* 방법 1. */}
          {/* <button onClick={ ()=>{ displayModal(modal) } }> { 글제목[2] } </button> */}

          {/* 방법 2. */}
          {/* <button onClick={ ()=>{ setModal(!modal) } }> { 글제목[2] } </button> */}
          {
             /* 저 state가 true면 <Modal></Modal> false면 아무것도 보여주지마세요. */
             // modal == true ? <Modal></Modal> : null
             // null은 텅빈 값 의미하고 비어있는 html용으로 자주 사용 
             // modal == true ? <Modal 글제목={글제목} color={'skyblue'}/> : null
             // modal == true ? <Modal 글제목={글제목} color={'orange'}/> : null
          }
        </h4>
        {/* <p>{ publishDate }</p> */}
      </div>
      {
        // <input onChange={(e)=>{ console.log(e.target.value) }} /> 
        // <input onChange={(e)=>{ 입력값변경(e.target.value); console.log(입력값) }} /> 

        // <input onChange={(e)=>{ console.log(e.target); }}/> 
        // <input onMouseOver={()=>{}} onChange={()=>{ console.log(1) }} />
        // <input onScroll={()=>{}} onChange={()=>{ console.log(1) }} />
        // <input onInput={()=>{ }} />
        // <input type="text"/>
        // <input type="range"/>
        // <input type="date"/>
        // <input type="number"/>
        // <textarea></textarea>
        // <select></select>
   
        // <input onChange={() => { console.log(1) }}/>
        // <input onInput={() => { console.log(2) }}/>
        // <input onMouseOver={() => { console.log(3) }}/>
        // <input onScroll={() => { console.log(4) }}/>
        // <input onChange={(e) => { console.log(e.target.value) }}/>
        // <input onChange={(e) => { e.preventDefault() }}/>
        // <input onChange={(e) => { e.stopPropagation() }}/>
  
        // <input onChange={(e) => { 입력값변경(e.target.value); console.log(입력값); }}/>
      }
      {
        // 글제목.map(function(a, i) {
        //   return (
        //     // map 함수 사용해서 반복문으로 html 생성 하려면 
        //     // html 코드에 key={i} 작성 필수   
        //     <div className='list' key={i}>
        //       <h4>{ 글제목[i] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> {따봉} </h4>
        //       <p>{ publishDate }</p>
        //     </div>
        //   )
        // })
      }
      {
        // 글제목.map(function(a, i) {
        //   return (
        //     <div className='list'>
        //       <h4 onClick={()=>{ setModal(true) }}>{ 글제목[i] }</h4>
        //       <p>{ publishDate }</p>
        //     </div>
        //   )
        // })
      }
      {
        // 글제목.map(function(a, i) {
        //   return (
        //     <div className='list'>
        //       <h4>{ 글제목[i] }</h4>
        //       <p>{ publishDate }</p>
        //     </div>
        //   )
        // })
      }
      {
        // 글제목.map(function(a, i) {
        //   return (
        //     <div className='list'>
        //       <h4>{ i }</h4>
        //       <p>{ publishDate }</p>
        //     </div>
        //   )
        // })
      }
      {
        // 글제목.map(function(a, i){
        //   return (
        //     <div className='list'> 
        //       <h4>{ a }</h4>
        //       <p>{ publishDate }</p>
        //     </div>
        //   )
        // })
      }
      {
        // 글제목.map(function() {
        //   return (
        //     <div className='list'> 
        //       <h4>{ 글제목[1] }</h4>
        //       <p>{ publishDate }</p>
        //     </div>)
        // })
      }
      {
        // [1, 2, 3, 4].map(function() {
        //   return (<div className='list'> 
        //     <h4>{ 글제목[1] }</h4>
        //     <p>{ publishDate }</p>
        //   </div>)
        // })
      }
      {
        // [1, 2, 3].map(function() {
        //   return (<div>안녕</div>)
        // })
        // 아래 array는 위의 map 함수를 쓴 것과 같은 결과 의미 
        // [<div>안녕</div>, <div>안녕</div>, <div>안녕</div>]
      }
      {
        // [1, 2, 3].map(function() {
        //   console.log(1);
        // });

        // [1, 2, 3].map(function(a) {
        //   console.log(a);
        // })

        // [1, 2, 3].map(function(a) {
        //   return '1233211';
        // })

        // var 어레이 = [];
        // for (var i = 0; i < 3; i++) {
        //   어레이.push(<div>안녕</div>)
        // }

        // var 어레이 = [2, 3, 4];
        // 어레이.map(function() {
        //   console.log(1);
        // });

        // 어레이.map(function(a) {
        //   console.log(a);
        // });

        // var newArray = 어레이.map(function(a) {
        //   return a * 10
        // });

        // console.log(newArray);
      }
      {
        // 글제목.map(function(title, index) {
        //   return (
        //     <div className='list' key={index}>
        //       {/* <h4 onClick={ () => { 따봉변경(따봉+1)} }>{ 글제목[index] }</h4> */}
        //       <h4>{ 글제목[index] }<span onClick={ () => { 따봉변경(따봉+1) } }>👍</span> { 따봉 }</h4>
        //       <p>publishDate</p>
        //     </div>
        //   )
        // })
      }
      {/* <div> 
        { 어레이 }
      </div> */}
      {/* {
        글제목.map(function(title, index) {
          return (
            <div className='list'>
              <h4>{ 글제목[index] }</h4>
              <p>publishDate</p>
            </div>
          )
        })
      } */}
      {/* {
        글제목.map(function(title) {
          return (
            <div className='list'>
              <h4>{ title }</h4>
              <p>publishDate</p>
            </div>
          )
        })
      } */}
      {/* {
        글제목.map(function() {
          return (
            <div className='list'>
              <h4>{ 글제목[0] }</h4>
              <p>publishDate</p>
            </div>
          )
        })
      } */}
      {/* <div>
        {
          [1, 2, 3].map(function() {
            return (<div>안녕</div>)
          })
        }
      </div> */}
      {/* [ 동적인 UI 만드는 step ] */}
      {/* 1. html css로 미리 디자인 완성   */}
      {/* 2. UI의 현재 상태를 state로 저장 */}
      {/* 3. state에 따라 UI가 어떻게 보일지 작성 */}
      {/* 저 state가 true면 <Modal></Modal>
          false면 아무것도 보여주지마세요.  */}
      {/* { modal == true ? <Modal></Modal> : null } */}

      {/* 삼항 연산자 쓰는 방법 */}
      {/* 
        1 == 2 ? '맞음' : '아님'
        */}

      {/* Component <Modal> 태그 쓰는 방법 */}
      {/* <Modal></Modal> 
          <Modal/> */}
      
      {/* <div onClick={ 함수임 }> 안녕하세요 </div>
          <div onClick={ function(){ console.log(1) } }> 안녕하세요2 </div>
          <div onClick={ () => { console.log(1) }}></div> */}
    </div>
  );

  function 함수() {
    let a = 10;
  }

  

  // Component 문법이란?
  // 더럽고 긴 html 코드 덩어리를 한 단어의 함수명으로 깔끔하게 
  // 축약하고 싶을 때 사용하는 문법이다.

  // Component 문법 사용하는 경우 
  // 1. 반복적으로 등장하는 html 코드 덩어리들을 축약할 때 사용
  // 2. 큰 웹페이지에 속한 html 코드 덩어리들을 축약할 때 사용
  // 3. 자주 변경되는 html UI 코드 덩어리들을 축약할 때 사용 

  // Component 문법 단점 
  // 1. HTML 깔끔하게 쓰려고 Component를 수백개 만들면 그것 만으로도 관리가 힘들다.
  // 2. 한 function 안에 있는 변수를 다른 function에서 맘대로 쓸 수 없다.
  // (예) function App 에 존재하는 글제목 state(글제목[0], 글제목[1], 글제목[2])를
  //      다른 function Modal 안에서 맘대로 쓸 수 없다.

  // fragment 문법이란?
  // 의미 없는 <div> 태그를 사용하기 싫지만 
  // 하위에 존재하는 다른 <div> 태그들을 하나로 묶을 때 사용하는 문법이며,
  // 아래 (예)처럼 사용한다.
  // (예) <div> ~~~ </div> -> <> ~~~ </>

  // className='modal' <div>태그를 포함한 html 코드 덩어리를 Component라고 부르며, 
  // 해당 Component를 사용하기 위해 함수 Modal로 구현  

  // Component - 함수명 Modal
  // Component를 사용하기 위해 
  // 함수 Modal 구현 방법 1 (자식이 부모의 state 가져다쓰고 싶을 때는 props 문법 사용)
  // props 문법 사용해서 <div> 영역 속성 style의 background 색상 설정(props.color)
  function Modal(props) {
    // 아래 state [ title, setTitle ]이 부모 컴포넌트 App과 자식 컴포넌트 Modal
    // 둘 다 필요할 경우 부모 컴포넌트 App에 선언 해야함.
    // state 만드는 곳은 state 사용하는 컴포넌트들 중 최상위 컴포넌트에 설정 해야함.
    // let [ title, setTitle ] = useState(0);   // 모달창 글제목 state

    return (
      <div className='modal' style={{ background : props.color }}>
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        {/* <button onClick={ ()=>props.updateData(props.title, '여자 코트 추천') }>글수정</button> */}
        {/* <button onClick={ ()=>props.글제목변경(['여자코트 추천', '강남 우동맛집', '파이썬 독학'])}>글수정</button> */}
        <button>글수정</button>
      </div>
    )
  }

  <button onClick={ ()=>updateData(0, '여자 코트 추천') }>글수정</button>

  // 함수 Modal 구현 방법 2 (자식이 부모의 state 가져다쓰고 싶을 때는 props 문법 사용)
  // function Modal(props) {
  //   return (
  //     <div className='modal'>
  //       <h4>{ props.글제목[0] }</h4>
  //       <p>날짜</p>
  //       <p>상세내용</p>
  //     </div>
  //   ) 
  // }


  // 함수 Modal 구현 방법 3
  // function Modal() {
  //   return (
  //     <div className='modal'>
  //       <h4>제목</h4>
  //       <p>날짜</p>
  //       <p>상세내용</p>
  //     </div>
  //   );
  // }

  // 함수 Modal 구현 방법 4 (Arrow Function)
  // 변수(let Modal) 생성 후 
  // Arrow Function 기능( () => { . . . }) 사용해서 함수 정의
  // let Modal = () => {
  //   return (
  //     <div className='modal'>
  //       <h4>제목</h4>
  //       <p>날짜</p>
  //       <p>상세내용</p>
  //     </div>
  //   )
  // }

  // 함수 Modal 구현 방법 3 (Arrow Function)
  // 변수(const Modal)에 const 사용 이유?
  // const는 상수를 정의할 때 사용하는 기능이며, 
  // const로 정의한 변수(const Modal)에 개발자가 실수로 다른 값을 집어넣거나
  // 수정을 하였을 때, 오류 메시지를 웹 브라우저 화면에서 출력 해준다.
  // 따라서 이러한 실수를 방지 및 오류 확인을 용이하게 하기 위해서 사용한다.
  // 변수(const Modal) 생성 후 
  // Arrow Function 기능( () => { . . . }) 사용해서 함수 정의
  // const Modal = () => {
  //   return (
  //     <div className='modal'>
  //       <h4>제목</h4>
  //       <p>날짜</p>
  //       <p>상세내용</p>
  //     </div>
  //   )
  // }


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
