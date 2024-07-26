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
  
  let logo = 'ReactBlog';
  // let logo = '개발 Blog';
  // useState 문법 사용하되 필요한 데이터를 array에 할당하는 방법 
  // let [글제목, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [ 글제목, 글제목변경 ] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let publishDate = '2월 17일 발행';
  // let [따봉] = useState(0);
  let [ 따봉, 따봉변경 ] = useState(0);
  let [ 인사, 인사변경 ] = useState('안녕');

  let [ modal, setModal ] = useState(false);     // false - 모달창 안 보임
  // let [ modal, setModal ] = useState(true);   // true - 모달창 보임 
  // let [ modal, setModal ] = useState('닫힘'); 
  // let [ modal, setModal ] = useState('열림');
  // let [ modal, setModal ] = useState(0);   // 0 - 닫힘 의미
  // let [ modal, setModal ] = useState(1);   // 1 - 열림 의미


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

  // 테스트 함수 "함수임"
  function 함수임() {
      console.log(1)
  }

  function displayModal(isModal) {
    isModal = (true == isModal) ? false : true;

    setModal(isModal)
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

      <button onClick={ ()=>sortData() }>가나다순정렬</button>

      <button onClick={ ()=>updateData(0, '여자 코트 추천') }>글수정</button>

      <div className='list'> 
        <h4>{ 글제목[0] }<span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍</span> { 따봉 }</h4>
        <p>{ publishDate }</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }<span onClick={ ()=>{ 인사변경('반가워') } }>🖐</span> { 인사 } </h4>
        <p>{ publishDate }</p>
      </div>
      <div className='list'>
        {/* <h4><span onClick={ ()=>{ setModal(true) } }> { 글제목[2] } </span></h4> */}
        <h4>
          {/* 글제목 누르면 모달창 열리고 한번 더 누르면 모달창이 닫히는 기능 구현 */}
          {/* 방법 1. */}
          {/* <button onClick={ ()=>{ displayModal(modal) } }> { 글제목[2] } </button> */}

          {/* 방법 2. */}
          <button onClick={ ()=>{ setModal(!modal) } }> { 글제목[2] } </button>
          {
             /* 저 state가 true면 <Modal></Modal> false면 아무것도 보여주지마세요. */
             //  modal == true ? <Modal></Modal> : null
             // null은 텅빈 값 의미하고 비어있는 html용으로 자주 사용 
             modal == true ? <Modal/> : null
          }
        </h4>
        <p>{ publishDate }</p>
      </div>
      
      {/* 아래 html 코드 필요시 참고 (2024.07.25 jbh) */}
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
  // 함수 Modal 구현 방법 1 
  function Modal() {
    return (
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    );
  }

  // 함수 Modal 구현 방법 2 (Arrow Function)
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
