import { useParams, userParams } from 'react-router-dom'
import styled from 'styled-components'

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

// props 문법 사용하여  
// props.bg에 들어있는 값을 속성 background에 할당 
// 자바스크립트 삼항 연산자 사용하여
// 글자 색상(color) 속성에는 
// props.bg에 들어있는 값이 'blue'일 경우 글자 색상(color) 속성값을 'white'로 넣고 
// props.bg에 들어있는 값이 'blue'가 아닐 경우 글자 색상(color) 속성값을 'black'로 넣는다.
let YellowBtn = styled.button` 
  background : ${ props => props.bg }; 
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px; 
`; 

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
      <div className="row">
        <div>
          <Box>
            <YellowBtn>버튼임</YellowBtn>
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