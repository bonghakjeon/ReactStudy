import React from "react";
import { useParams, userParams } from 'react-router-dom'
import styled from 'styled-components'  // Detail.js 자바스크립트 파일(Detail 컴포넌트)안에서만 CSS 적용할 수 있도록 'styled-components' 라이브러리에서 styled 가져오기
import { useState, useEffect } from 'react';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { Alert } from "react-bootstrap";

// styled-components 
// 특장점
// 1. CSS 파일을 직접 접근해서 가지 않아도 자바스크립트 파일(컴포넌트) 안에서 
//    특정 태그를 스타일링 할 수 있다.
// 2. 자바스크립트 파일(또는 컴포넌트)에서 작성한 특정 태그의 스타일은 
//    다른 자바스크립트 파일(컴포넌트)에 스타일을 간섭하지 않는다.
// 참고 - App.css 파일에서 스타일 작성하면 해당 스타일은 
//        App.js 자바스크립트 파일(App 컴포넌트)에만 반영되는 것이 아니라
//        다른 자바스크립트 파일(컴포넌트) (예) Detail.js 에서도 반영된다.
//        왜냐하면 React 프레임워크는 코드를 다 짜면(개발 다 하고) 코드를 하나로 합쳐주기 때문에
//        App.css 파일에서 작성한 스타일을 모든 자바스크립트 파일(컴포넌트)에서 가져다가 쓸 수 있다.
//        (예1) - Html 파일들을 하나로 합쳐준다.
//        (예2) - 자바스크립트 파일들을 하나로 합쳐준다.
//        (예3) - CSS 파일들을 하나로 합쳐준다.
// 3. 2번처럼 App.css 파일에서 스타일 작성해서 다른 자바스크립트 파일(컴포넌트)에 간섭하지 않으려면
//    App.moudule.css 파일 생성 후 스타일 구현하면 해당 css 파일은 App.js 파일(App 컴포넌트)에서만 스타일 적용(종속)이 가능하다.
//    참고 - Detail.moudule.css 파일 생성 및 스타일 구현하면 해당 css 파일은 Detail.js 파일(Detail 컴포넌트)에서만 스타일 적용(종속)이 가능하다.
// 4. 페이지 로딩시간이 단축된다.
//    예를들어 Detail.js (Detail 컴포넌트)에서 작성한 스타일은 css 파일을 별도로 만들어주는 것이 아니라,
//    html 파일에 <style></style> 태그에 자동으로 해당 스타일을 주입 시켜준다.
//    하여 css 파일이 별도로 필요하지 않기 때문에 페이지 로딩시간이 향상된다.
//    예를들어 홈페이지에서 사용하는 상세페이지(Detail.js (Detail 컴포넌트)) 접속시 
//    해당 상세페이지 구동에 필요한 CSS만 로드할 수 있기 때문에 페이지 로딩 시간이 단축된다.

// styled-components 
// 단점
// 1. 자바스크립트 파일(컴포넌트)에서 작성한 html 및 작성한 스타일 
//    구조가 복잡해지거나 길어지면 구현한 컴포넌트가 일반 컴포넌트인지 
//    아니면 styled-components 적용된 컴포넌트인지 구분이 어렵다.

// 2. 자바스크립트 파일(컴포넌트)에서 작성한 스타일을
//    (예) Detail.js - styled-components 적용한 YellowBtn 컴포넌트
//    다른 자바스크립트 파일(컴포넌트) 재사용 하고 싶으면 
//    Detail.js 자바스크립트 파일 하단에 export 문법 사용하여
//    (예) export { Detail, YellowBtn }; 
//    다른 자바스크립트 파일(컴포넌트)에서 아래처럼 import 문법 사용하면 된다.
//    import YellowBtn from './data.js' 
//    다만 이런식으로 export, import 구문 사용하여 컴포넌트를 재사용 하게 되면,
//    css 파일에서 구현한 스타일을 사용하는 것과 별반 다를게 없다.(차이가 없다.)

// 3. 팀으로 일할 때 CSS 디자이너와 협업시 styled-components를 사용하게 되면,
//    CSS 디자이너가 styled-components를 이해 못할 수 있다.
//    하여 해당 styled-components 기술 도입 여부는 신중하게 결정해야 한다.


// style이 입혀진 <div> 태그 생성 및 변수 let Box에 저장
// 변수 let Box에 저장이 가능한 이유는 styled.div`~~~`; 실행 결과
// 리턴되어 남는 값은 컴포넌트이기 때문에 변수 let Box에 저장 가능하다.
let Box = styled.div`
  padding : 20px;
  color : grey
`;


// let YellowBtn = styled.button`
//   background : yellow;
//   color : black;
//   padding : 10px;
// `;

// let YellowBtn = styled.button`
//   background : ${ props => props.bg };
//   color : black;
//   padding : 10px;
// `;


// style이 입혀진 <button> 태그 생성 및 변수 let YellowBtn에 저장
// 변수 let YellowBtn에 저장이 가능한 이유는 styled.button`~~~`; 실행 결과
// 리턴되어 남는 값은 컴포넌트이기 때문에 변수 let YellowBtn에 저장 가능하다.
// props 문법 사용하여 YellowBtn 컴포넌트 재활용이 가능하다.
// 만일 props 문법 사용하기 싫다면 App.css 에서 클래스명을 만들고, 별도의 스타일을 작성하면 된다.
// props.bg에 들어있는 값을 속성 background에 할당 
// 자바스크립트 삼항 연산자 사용하여
// 글자 색상(color) 속성에는 
// props.bg에 들어있는 값이 'blue'일 경우 글자 색상(color) 속성값을 'white'로 넣고 
// props.bg에 들어있는 값이 'blue'가 아닐 경우 글자 색상(color) 속성값을 'black'로 넣는다.
// YellowBtn 컴포넌트 가져다 쓸 때, bg 라는 props를 아래처럼 입력할 수 있다.
// background : ${ props => props.bg }; 
// <YellowBtn bg='blue'>버튼</YellowBtn>
let YellowBtn = styled.button` 
  background : ${ props => props.bg }; 
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px; 
`; 

// 아래처럼 기존 스타일이 구현된 컴포넌트 YellowBtn을 복사해서 
// 다른 컴포넌트 생성 후 변수 let NewBtn에 할당 가능하다.
// let NewBtn = styled.button(YellowBtn)``;

// (예전 방식) 컴포넌트 Detail2 클래스 방식 구현 예시 
class Detail2 extends React.Component {
  componentDidMount() {
    // 컴포넌트 mount시 여기 코드 실행됨 (웹브라우저 페이지에 컴포넌트 장착 또는 생성)
  }
  componentDidUpdate() {
    // 컴포넌트 update시 여기 코드 실행됨 (웹브라우저 페이지에 컴포넌트 html 코드 재랜더링)
  }
  componentWillUnmount() {
    // 컴포넌트 unmount시 여기 코드 실행됨. (웹브라우저 페이지에 컴포넌트 삭제 직전)
  }
}
// (예전 방식) 컴포넌트 Detail2 사용 방법 
<Detail2></Detail2>

/// <summary>
/// 상세페이지 컴포넌트
/// </summary>
function Detail(props) {
  let [ Alert, setAlert ] = useState(true)
  let [ validator, setValidator ] = useState(true)
  let [ inputData, setInputData ] = useState(0);

  // 컴포넌트 LifeCycle (예) 상세페이지 컴포넌트 Detail LifeCycle
  // 컴포넌트는 아래 3가지와 같은 인생주기를 겪는다.
  // 1. 컴포넌트가 웹브라우저 페이지 상에 html 랜더링 된다. (페이지에 장착되기도 하고(mount))
  // 2. 컴포넌트 로직 안에서 useState 함수 사용하여 값을 조작하면 웹브라우저 페이지 상에 html 재랜더링 된다. (페이지가 가끔 업데이트도 되고(update))
  // 3. 컴포넌트가 필요 없어지면 웹브라우저 페이지 상에 제거 된다. (unmount)

  // 이러한 컴포넌트의 LifeCycle을 알아야 하는 이유는
  // 위와 같은 3가지 인생주기에 중간중간 간섭이 가능하다.
  // 여기서 말하는 간섭이랑 중간중간 코드(자바스크립트 + html) 
  // 실행이 가능하다는 의미이다.
  // 1번 mount 될 때, 코드 실행할 수 있도록 실행할 코드 작성
  // 2번 update 될 때, 코드 실행할 수 있도록 실행할 코드 작성
  // 3번 unmount 될 때, 코드 실행할 수 있도록 실행할 코드 작성 
  
  // 콜백함수 LifeCycle Hook(뜻 - 갈고리) 
  // useEffect 구현
  // 컴포넌트 Detail가 mount & update시 
  // 아래 콜백함수 useEffect에서 구현한 코드 실행
  // 콜백함수 useEffect 안에 적은 코드는 return 문 안에 존재하는 
  // html 코드를 렌더링 이후에 동작함
  // 콜백함수 LifeCycle Hook(뜻 - 갈고리) useEffect 용어 정리
  // side effect 
  // -함수안에 이것저것 코드짤 때 함수의 핵심기능 외에 쓸데없는 기능들을 
  // 프로그래밍 용어로 side effect 라고 부른다.

  // 그래서 콜백함수 LifeCycle Hook(뜻 - 갈고리) useEffect도 거기서 따온건데
  // 컴포넌트의 핵심 기능은 html 렌더링이라 
  // 그거 외의 쓸데없는 기능들은 useEffect 안에 적으라는 소리입니다. 
  // 오래걸리는 반복연산, 서버에서 데이터가져오는 작업, 타이머다는거 
  // 이런건 useEffect 안에 많이 적습니다.
  // 콜백함수 LifeCycle Hook(뜻 - 갈고리) 
  // useEffect 실행시점 
  // 1. 상세페이지 컴포넌트 Detail 안에 존재하는 html 코드를 웹브라우저 페이지에서 랜더링 진행
  // 2. 1번의 html 코드 재랜더링 완료 되고 나서 
  //    콜백함수 LifeCycle Hook(뜻 - 갈고리) useEffect 가 나중에 실행된다. 
  useEffect(()=>{
    // 여기적은 코드는 side effect 기능을 하는 코드 보관함 이라고 생각하면 된다.
    // side effect란?
    // 함수안에 이것저것 코드짤 때 함수의 핵심기능 외에 쓸데없는 기능들을 
    // 프로그래밍 용어로 side effect 라고 부른다.

    // 여기적은 코드는 컴포넌트 로드(전문용어로 mount) & 업데이트 (전문용어로 update) 마다 
    // return문 안에 존재하는 html 코드 랜더링 완료 후 실행됨
    // console.log('안녕') 실행시 웹브라우저 콘솔창에서 '안녕' 2번 출력되는 이유?
    // index.js -> <React.StrictMode>라는 태그가 있으면 '안녕' 2번 출력됨.
    // 디버깅용으로 편하라고 2번 출력해주는데 싫으면 <React.StrictMode>라는 태그 제거(또는 주석)하면 됨.
    // useEffect 안에 적는 코드 유형은 아래 3가지와 같다.
    // 1. 시간이 오래 걸리는 어려운 작업(연산)
    // 2. 서버에서 데이터 가져오는 작업
    // 3. 타이머 장착하는거
    // console.log('안녕')

    // for(var i = 0; i < 10000; i++) {
    //   console.log(1);
    // }

    // 2. 타이머 객체 a 생성
    let a = setTimeout(()=>{ setAlert(false) }, 2000)

    return ()=>{
      // clean up function 예제 코드
      // (참고1) clean up function에는 타이머제거, socket 연결요청제거, ajax요청 중단 이런 코드를 많이 작성합니다.
      // (참고2) 컴포넌트 unmount 시에도 clean up function 안에 있던게 1회 실행됩니다.
      clearTimeout(a)   // 1. 타이머 객체 a 제거 
    }
  }, []);

  useEffect(()=>{
    // TODO : 자바스크립트 문법 함수 isNaN 사용하여 변수 inputData에 입력받은 문자열이
    //        숫자가 아닌 경우 체크하기 (2024.10.21 jbh)
    // 참고 URL - https://hianna.tistory.com/385
    // TODO : 자바스크립트 문법 함수 alert 사용하여 변수 inputData에 입력받은 문자열이
    //        숫자가 아닌 경우 alert 메시지 출력하기 (2024.10.21 jbh)
    // 참고 URL - https://velog.io/@jaehooo13/React-alert-%EC%B0%BD-%EB%9D%84%EC%9A%B0%EA%B8%B0
    // 참고 2 URL - https://blog.naver.com/hmw53/60202212314    
    if(true === isNaN(inputData)) 
    {
        alert("그러지마세요");
        setInputData(0)
    }
    return ()=>{ }
  }, [inputData])

  // useEffect 사용 예제
  // []에 있는 count라는 변수가 변할 때만 useEffect 안의 코드 실행
  // useEffect(()=>{ 실행할코드 }, [count])

  // 1. 컴포넌트 재렌더링마다 코드 실행 가능
  // useEffect(()=>{ 실행할코드 })

  // 2. 이러면 컴포넌트 mount시 (로드시) 1회만 실행 가능
  // useEffect(()=>{ 실행할코드 }, [])

  // 3. 이러면 useEffect 안의 코드 실행 전에 return () => {} 코드가 항상 먼저 실행  
  // useEffect(()=>{
  //   실행할코드2(그 다음 실행됨) 
  //   return ()=>{
  //     실행할코드1(여기있는게 먼저실행됨)
  //   }
  // })

  // 4. 이러면 컴포넌트 unmount시 return () => {} 코드가 1회 실행
  // useEffect(()=>{
  //   실행할코드2(그 다음 실행됨)
  //   return ()=>{
  //     실행할코드1(여기있는게 먼저실행됨)
  //   }
  // }, [])

  // 5. 이러면 state1이 변경될 때만 코드 실행 
  // useEffect(()=>{
  //   실행할코드
  // }, [state1])

  // 콜백함수 LifeCycle Hook(뜻 - 갈고리) useEffect
  // 밖에 아래처럼 console.log('안녕') 구현하면
  // 아래 코드 console.log('안녕') 도 같이 실행되고 나서
  // 상세페이지 컴포넌트 Detail의 html 코드 재랜더링 작업을 진행한다.
  // console.log('안녕')

  // 콜백함수 LifeCycle Hook(뜻 - 갈고리) useEffect
  // 밖에 아래처럼 for(var i = 0; i < 10000; i++) 구현하면 
  // 아래 코드 for(var i = 0; i < 10000; i++) 도 같이 실행되고 나서
  // 상세페이지 컴포넌트 Detail의 html 코드 재랜더링 작업을 진행한다.
  // for(var i = 0; i < 10000; i++) {
  //   console.log(1);
  // }



  // 상세페이지 컴포넌트 Detail html 코드 재랜더링(update) 해보기 위해서 
  // 아래와 같은 useState 함수 사용해서 
  // state "count", state 변경함수 "setCount" 구현
  let [count, setCount] = useState(0)

  // 아래처럼 함수(또는 Hook이라고 부름) useParams 사용하면 
  // 사용자가 입력 및 접속한 상세페이지 URL 주소 (URL 파라미터 문법(path="/detail/:id") 사용한 경우) 
  // 중 URL 파라미터 자리 (:id) 값을 가져올 수 있다.
  // URL 파라미터 자리 (:id) 값을 아래처럼 변수 id에 저장해서 사용가능하다. 
  // 예를 들어 사용자가 상세페이지 URL 주소
  // /detail/1로 입력 및 접속하면 id라는 변수에 1이 들어옴.
  // /detail/2로 입력 및 접속하면 id라는 변수에 2가 들어옴
  let {id} = useParams();  // 현재 URL 주소에 존재하는 URL 파라미터 값이 변수 let {id}에 할당됨.
  console.log(id);

  // TODO : IF 조건문 사용하여 URL 파라미터 값에 잘못된 값이 들어간 경우 
  // 상품 없다는 UI 출력 하도록 구현하기 (2024.09.25 jbh) 

  // 함수 find안에 구현한 콜백함수 function에 파라미터 shoesObj는
  // <App> 컴포넌트로 부터 props 문법을 사용해 전달 받은 
  // array 객체 props.shoes에 존재하는 
  // 데이터 객체({ id : ~~, title : "~~", content : "~~", price: ~~})를 의미함.

  // 함수 find 사용 방법 1 (function - return 구현 방식)
  let 찾은상품 = props.shoes.find(function(shoesObj) {
    // array객체.id == 사용자가 url에입력한 URL 파라미터 자리 (:id) 값인 데이터를 찾아서 
    // 해당 데이터를 변수 찾은상품에 할당 
    return shoesObj.id == id
  });
  let 찾은상품아이디 = Number(찾은상품.id);

  // 함수 find 사용 방법 2 (arrow function 구현 방식)
  let 찾은상품2 = props.shoes.find((shoesObj) => shoesObj.id == id);
  let 찾은상품2아이디 = Number(찾은상품2.id);

  

  // TODO : 아래 주석친 테스트 코드 필요시 참고 (2024.09.20 jbh)
  // 함수 Number 사용하여 문자열 -> 숫자 변환
  // 참고 URL - https://study-melody.tistory.com/77
  // let shoesIndex = Number(id);
  
  // TODO : 자바스크립트 find 문법 사용하여 상품목록 데이터 shoes의 순서가 변경되더라도 사용자가 입력한 URL 파라미터 자리 (:id) 값과
  //        동일한 데이터를 상품목록 데이터 shoes에서 찾도록 find 문법 사용 (2024.09.20 jbh)
  // 참고 URL - https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-find-%ED%95%A8%EC%88%98/
  // 참고 2 URL - https://devinserengeti.tistory.com/20
  // let shoesFindObj = props.shoes.find(obj => obj.id === Number(id));
  // let shoesFindId = Number(shoesFindObj.id);

  // TODO : 자바스크립트 filter 문법 사용하여 상품목록 데이터 shoes의 순서가 변경되더라도 사용자가 입력한 URL 파라미터 자리 (:id) 값과
  //        동일한 데이터를 상품목록 데이터 shoes에서 찾도록 filter 문법 사용 (2024.09.20 jbh)
  // 참고 URL - https://codingeverybody.kr/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-filter-%ED%95%A8%EC%88%98/
  // 참고 2 URL - https://codesign.tistory.com/165
  // let shoesFilterObj = props.shoes.filter(obj => obj.id === Number(id))[0];   // 첫번째 요소로 가져오기 위해 인덱스 [0] 사용
  // let shoesFilterId = Number(shoesFilterObj.id); 

  // console.log(id)

  return (
    <div className="container">
        {/* 오늘의 숙제 : */}
        {/* Detail 페이지 안에 노란 박스 하나 만들고 */}
        {/* Detail 페이지 방문 후 2초 후에 박스가 사라지게 해보십시오. */}
        {/* (팁) 동적인 UI 어떻게 만든다고 했습니까  */}
        {/* 참고 URL - https://velog.io/@jaewoneee/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C-setTimeout-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0 */}
        <YellowBox />
        {/* <ColorBox id='blueBox' background='blue' /> */}
        {/* <SaleBox id='saleBox'/> */}
        {/* <div className="alert alert-warning">
          2초이내 구매시 할인
        </div> */}
        {
          Alert == true
          ? <div className="alert alert-warning">
              2초이내 구매시 할인
            </div>
          : null
        }
        
        <input value={inputData}
               onChange={e => setInputData(e.target.value)} />
        {/* {
          // TODO : 자바스크립트 문법 함수 isNaN 사용하여 변수 inputData에 입력받은 문자열이
          //        숫자가 아닌 경우 체크하기 (2024.10.21 jbh)
          // 참고 URL - https://hianna.tistory.com/385
          // TODO : 자바스크립트 문법 함수 alert 사용하여 변수 inputData에 입력받은 문자열이
          //        숫자가 아닌 경우 alert 메시지 출력하기 (2024.10.21 jbh)
          // 참고 URL - https://velog.io/@jaehooo13/React-alert-%EC%B0%BD-%EB%9D%84%EC%9A%B0%EA%B8%B0
          // true === isNaN(inputData) ? <div>그러지마세요</div> : null
          false === validator 
          ? <div className="alert alert-warning">
              그러지마세요
          </div>
          : null
        } */}
                   
        
        {/* 아래 "useEffect 버튼" 클릭시  */}
        {/* 상세페이지 컴포넌트 Detail의 html 코드 재랜더링(update) 되고나서  */}
        {/* 콜백함수 LifeCycle Hook(뜻 - 갈고리) useEffect 실행됨. */}
        {/* state "count"에 저장된 값 웹브라우저 페이지 출력 */}
        {count} 
        <button onClick={()=>{ setCount(count+1) }}>useEffect 버튼</button>
        {/* <YellowBtn bg='blue'>버튼</YellowBtn> */}
        {/* <YellowBtn bg='orange'>버튼</YellowBtn> */}
      <div className="row">
        <div>
          <Box>
            <YellowBtn>버튼</YellowBtn>
            <YellowBtn bg="orange">오렌지색 버튼임</YellowBtn>
            <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
          </Box>
        </div>
        <div>
          <YellowBtn bg="orange">오렌지색 버튼임</YellowBtn>
          <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
        </div>
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (찾은상품아이디 + 1) + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <p>자바스크립트 find 문법(function - return 구현 방식) 사용</p>
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>

        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (찾은상품2아이디 + 1) + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <p>자바스크립트 find 문법(arrow function 구현 방식) 사용</p>
          <h4 className="pt-5">{찾은상품2.title}</h4>
          <p>{찾은상품2.content}</p>
          <p>{찾은상품2.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>

        {/* TODO : 아래 주석친 테스트 코드 필요시 참고 (2024.09.20 jbh) */}
        {/* <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (shoesFindId + 1) + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <p>자바스크립트 find 문법 사용</p>
          <h4 className="pt-5">{shoesFindObj.title}</h4>
          <p>{shoesFindObj.content}</p>
          <p>{shoesFindObj.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div> */}

        {/* <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (shoesFilterId + 1) + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <p>자바스크립트 filter 문법 사용</p>
          <h4 className="pt-5">{shoesFilterObj.title}</h4>
          <p>{shoesFilterObj.content}</p>
          <p>{shoesFilterObj.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div> */}
        {/* <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/shoes' + (shoesIndex + 1) + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div> */}
        {/* <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div> */}
        {/* <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[0].title}</h4>
          <p>{props.shoes[0].content}</p>
          <p>{props.shoes[0].price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div> */}
        {/* <div className="col-md-6">
          <h4 className="pt-5">상품명</h4>
            <p>상품설명</p>
            <p>120000원</p>
            <button className="btn btn-danger">주문하기</button> 
        </div> */}
      </div>
    </div> 
  )
}

{/* 오늘의 숙제 : */}
{/* Detail 페이지 안에 노란 박스 하나 만들고 */}
{/* Detail 페이지 방문 후 2초 후에 박스가 사라지게 해보십시오. */}
{/* (팁) 동적인 UI 어떻게 만든다고 했습니까  */}
{/* 참고 URL - https://velog.io/@jaewoneee/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C-setTimeout-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0 */}

/// <summary>
/// 노란 박스 컴포넌트
/// </summary>
function YellowBox(props) {
  useEffect(()=>{
    // 노란 박스 컴포넌트 객체 'yellowBox' 가져오기
    const yellowBox = document.getElementById('yellowBox');

    // 여기적은 코드는 컴포넌트 로드(전문용어로 mount) & 업데이트 (전문용어로 update) 마다 실행됨
    // TODO : Detail 페이지 방문 후 2초 후에 노란 박스 컴포넌트가 사라지게 할 수 있도록 
    //        자바스크립트 함수 setTimeout 및 remove() 함수를 콜백함수 useEffect 사용하여 해당 함수들 호출 하도록 구현 (2024.10.08 jbh)
    // 참고 URL - https://hianna.tistory.com/484
    // 자바스크립트 null 체크 참고 URL - https://mycodings.fly.dev/blog/2022-12-19-howto-javascript-null-check
    // setTimeout(()=>{ yellowBox.remove() }, 2000);
    // 연산자 "===" 사용 방식 
    // setTimeout(()=>{ if( false === (yellowBox === null) && false === (yellowBox === undefined) ) yellowBox.remove() }, 2000);
    // 메서드 "Object.is(value1, value2)" 사용 방식
    setTimeout(()=>{ if( false === Object.is(yellowBox,null) && false === Object.is(yellowBox === undefined) ) yellowBox.remove() }, 2000);
  });

  return (
    <div id='yellowBox' style={{background : 'yellow' }}>노란 박스</div>
  )
} 

/// <summary>
/// 다용도 색상 박스 컴포넌트
/// </summary>
function ColorBox(props) {
  useEffect(()=>{
    // 다용도 색상 박스 컴포넌트 객체 가져오기
    const colorBox = document.getElementById(props.id);

    // 여기적은 코드는 컴포넌트 로드(전문용어로 mount) & 업데이트 (전문용어로 update) 마다 실행됨
    // TODO : Detail 페이지 방문 후 3초 후에 다용도 색상 박스 컴포넌트가 사라지게 할 수 있도록 
    //        자바스크립트 함수 setTimeout 및 remove() 함수를 콜백함수 useEffect 사용하여 해당 함수들 호출 하도록 구현 (2024.10.11 jbh)
    // 참고 URL - https://hianna.tistory.com/484
    // 자바스크립트 null 체크 참고 URL - https://mycodings.fly.dev/blog/2022-12-19-howto-javascript-null-check
    
    // setTimeout 함수(타이머 기능) 사용해서
    // 3초후 코드 실행
    setTimeout(()=>{ if(false === Object.is(colorBox, null) && false === Object.is(colorBox, undefined)) colorBox.remove() }, 3000);
  });

  return (
    <div id={props.id} style={{background : props.background}}>다용도 색상 박스</div>
  )
}

/// <summary>
/// 2초 이내 구매시 할인 컴포넌트
/// </summary>
function SaleBox(props) {
  useEffect(()=>{
    // 2초 이내 구매시 할인 객체 가져오기
    const SaleBox = document.getElementById(props.id);

    // 여기적은 코드는 컴포넌트 로드(전문용어로 mount) & 업데이트 (전문용어로 update) 마다 실행됨
    // TODO : Detail 페이지 방문 후 3초 후에 다용도 색상 박스 컴포넌트가 사라지게 할 수 있도록 
    //        자바스크립트 함수 setTimeout 및 remove() 함수를 콜백함수 useEffect 사용하여 해당 함수들 호출 하도록 구현 (2024.10.11 jbh)
    // 참고 URL - https://hianna.tistory.com/484
    // 자바스크립트 null 체크 참고 URL - https://mycodings.fly.dev/blog/2022-12-19-howto-javascript-null-check
    

    // setTimeout 함수(타이머 기능) 사용해서
    // 2초후 코드 실행
    setTimeout(()=>{ if(false === Object.is(SaleBox, null) && false === Object.is(SaleBox, undefined)) SaleBox.remove()}, 2000);
  });

  return(
    <div id={props.id} className="alert alert-warning">
         2초이내 구매시 할인
    </div>
  )
}


export default Detail;   // 키워드 export default Detail; 사용하면 변수 컴포넌트 Detail 단 하나만 Detail.js 파일 뿐만 아니라 다른 소스 파일 (예) App.js 에서도 사용 할 수 있도록 내보내기 가능