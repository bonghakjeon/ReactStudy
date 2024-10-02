import { useParams, userParams } from 'react-router-dom'
import styled from 'styled-components'  // Detail.js 자바스크립트 파일(Detail 컴포넌트)안에서만 CSS 적용할 수 있도록 'styled-components' 라이브러리에서 styled 가져오기

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


/// <summary>
/// 상세페이지 컴포넌트
/// </summary>
function Detail(props) {
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
        <YellowBtn bg='blue'>버튼</YellowBtn>
        <YellowBtn bg='orange'>버튼</YellowBtn>
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

export default Detail;   // 키워드 export default Detail; 사용하면 변수 컴포넌트 Detail 단 하나만 Detail.js 파일 뿐만 아니라 다른 소스 파일 (예) App.js 에서도 사용 할 수 있도록 내보내기 가능