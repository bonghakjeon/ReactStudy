// [코딩애플] React 스터디 
// Part 2 : 쇼핑몰 프로젝트
// 16강 - 새로운 프로젝트 생성 & Bootstrap 사용하기

// 17강 - 이미지 넣는 법 & public 폴더 이용하기

// 18강 - 코드 길어지면 import export 하면 됩니다

// 19강 - 저번시간 숙제 해설 (Card 컴포넌트 만들기)

// Bootstrap 웹 사이트 
// Getting Started -> introduction (태그 <link> 사용해서 css 버전 적용 방법 포함)
// 참고 URL - https://react-bootstrap.netlify.app/docs/getting-started/introduction

// Bootstrap - 컴포넌트 Button Example
// 참고 URL - https://react-bootstrap.netlify.app/docs/components/buttons/

// Bootstrap - 컴포넌트 NavBar Example
// 참고 URL - https://react-bootstrap.netlify.app/docs/components/navbar/

// TODO : React Bootstrap CSS 파일 사용하기 위해서 index.html 파일 -> <head> 태그 안에 <link> 태그 추가 (2024.08.22 jbh)  -->
// 참고 URL - https://react-bootstrap.netlify.app/docs/getting-started/introduction  -->

import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import { useState } from 'react';
// import data from './data.js'; // data.js라는 파일에 존재하는 변수(data - json 데이터 형식 리스트)를 App.js 에서 가져와서 쓰고 싶을 때, 키워드 import data from './data.js'; 사용 
// data.js라는 파일에 존재하는 변수 여러 개(data - json 데이터 형식 리스트 / name1 / name2)를 App.js 에서 가져와서 쓰고 싶을 때, 키워드 import { data, name1, name2 } from './data.js'; 사용 
import { data, name1, name2 } from './data.js';

// import a from './data.js'; // data.js라는 파일에 존재하는 변수(a - 변수)를 App.js 에서 가져와서 쓰고 싶을 때, 키워드 import a from './data.js'; 사용 
import a from './data.js';

import Shoes from './Shoes';
import logo from './logo.svg';
import './App.css';
import bg from './img/bg.png';   // 이미지 파일 "bg.png"를 "bg"로 가져오기(import)

import { Routes, Route, Link } from 'react-router-dom'
import Detail from './Detail.js';   // Detail.js라는 파일에 존재하는 상세페이지 컴포넌트 "Detail"을 "Detail"로 가져오기(import)

function App() {
  // let [ 상품데이터, 상품데이터변경 ] = useState([{ id : 0, title : "White and Black", content : "Born in France", price : 120000 }, 
  //                                              { id : 1, title : "Red Knit", content : "Born in Seoul", price : 110000 }, 
  //                                              { id : 2, title : "Grey Yordan", content : "Born in the States", price : 130000}]);

  let [ shoes ] = useState(data);
  

  return (
    <div className="App">
      {/* 상단 Navbar 예시 1 */}
      {/* <Navbar bg="dark" variant="dark">
        <Button variant="primary">Primary</Button>
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar> */}

      {/* 상단 Navbar 예시 2 */}
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 오늘의 숙제 :
          /detail로 접속하면 보여줄 상세페이지를 컴포넌트를 이용해서 만들어오십시오. 
          코드 너무 기니까 다른 파일에 작성해봅시다. */}

      {/* 'react-router-dom' - <Link> 사용한 페이지 이동 버튼 */}
      <Link to="/">홈(메인페이지)</Link>
      <Link to="/detail">상세페이지</Link>
      <Link to="/about">어바웃페이지</Link>

      {/* 'react-router-dom' - <Routes>, <Route> 사용하여 페이지 나누기 */}
      <Routes>
        {/* 홈(메인페이지) path="/"  */}
        <Route path="/" element={ <>
                                    <div className='main-bg' />
                                    <div className='container'>
                                      <div className='row'>
                                      {
                                        // 함수 map 사용해서 List형 state "shoes"에 존재하는 요소 갯수만큼 반복문 진행 
                                        // shoes.map(function(title, i) {
                                        //   return (
                                        //     <Card shoes={shoes[i]} i={i}></Card>
                                        //   )
                                        // })

                                        // 함수 arrow 사용해서 List형 state "shoes"에 존재하는 요소 갯수만큼 반복문 진행 
                                        shoes.map((title, i) => {
                                          return (
                                            <Card shoes={shoes[i]} i={i}></Card>
                                          )
                                        })
                                      }
                                      </div>
                                    </div> 
                                  </>
                                } />
        {/* 상세페이지 path="/detail"  */}                   
        <Route path="/detail" element={ <div>
                                          <Detail/>
                                        </div> } />
        {/* 어바웃페이지 path="/about"  */}
        <Route path="/about" element={ <div>어바웃페이지임</div> } />
      </Routes>

      

      {/* 아래 주석친 테스트 코드 필요시 참고 (2024.09.04 jbh) */}
      {/* <div className='main-bg' /> */}
      {/* <div className='container'>
        <div className='row'>
          {
            // 함수 map 사용해서 List형 state "shoes"에 존재하는 요소 갯수만큼 반복문 진행 
            // shoes.map(function(title, i) {
            //   return(
            //     <Card shoes={shoes[i]} i={i}></Card>
            //   )
            // })

            // 함수 arrow 사용해서 List형 state "shoes"에 존재하는 요소 갯수만큼 반복문 진행 
            shoes.map((title, i) => {
              return(
                <Card shoes={shoes[i]} i={i}></Card>
              )
            })
          }
        </div>
      </div> */}
      {/* 컴포넌트 Shoes 구현 및 사용 예시 */}
      {/* <Shoes/> */}

      {/* 컴포넌트 Card 구현 및 사용 예시 */}
      {/* 부모 컴포넌트 App -> 자식 컴포넌트 Card로 state "shoes"를 props 문법 사용해서 전송하기   */}
      {/* <Card shoes={shoes[0]} i={1} /> */}
      {/* <Card shoes={shoes[1]} i={2} /> */}
      {/* <Card shoes={shoes[2]} i={3} /> */}

      {/* public 폴더 기능 */}
      {/* shop 폴더 하단 -> public 폴더 하단에도 이미지 파일 보관 가능 */}
      {/* React 프로젝트에서 코드 다 짜서 개발 완료 후 해당 프로젝트(사이트)를 발행(publish) 처리 하는데 */}
      {/* 해당 프로젝트(사이트)를 발행(publish) 처리 하기 전에 html / js / css 파일을 압축(building)한다. */}
      {/* html / js / css 파일을 압축(building)해서 웹서버에 올린다. */}
      {/* 그리고 그 중에 src 폴더 안에 있던 파일들은 모두 압축(building) 처리 된다. */}
      {/* 단, public 폴더에 있던 파일들은 모두 압축(building) 처리가 안 되고 파일 이름과 형태가 온전히 보존된다. */}

      {/* public 폴더 안에 있는 이미지 사용시 장점 */}
      {/* import 구문 (예) import bg from './img/bg.png';  */}
      {/* 사용하지 않아도, */}
      {/* 수백개의 이미지 파일을 첨부할 일이 있을 때 src 폴더에 있는 이미지 파일 보다는 public 폴더 안에 있는 이미지를 사용하는게 편리하다. */}

      {/* [권장하지 않음]   1. 폴더 "shop" -> 폴더 "public" 안에 들어 있는 이미지 파일 "/logo192.png" <img> 태그에 집어넣는 사용법 */}
      {/* <img src="/logo192.png" />  */}
      {/* [권장하는 사용법] 2. 폴더 "shop" -> 폴더 "public" 안에 들어 있는 이미지 파일 "/logo192.png" <img> 태그에 집어넣는 사용법 */}
      <img src={process.env.PUBLIC_URL + '/logo192.png'} />

      {/* <div className="container">
        <div className="row">
          <div className="col-md-4">안녕</div>
          <div className="col-md-4">안녕</div>
          <div className="col-md-4">안녕</div>
        </div>
      </div>  */}

      {/* 1. App.css 에서 CSS 속성 'main-bg' 사용해서 이미지 파일 "bg.png" 가져오는 <div> 태그 사용법 */}
      {/* <div className='main-bg'></div> */}

      {/* 2. App.js 에서 아래 html 코드  <div className='main-bg'> 태그 안에서 이미지 파일 "bg.png" 집어넣는 사용법 */}
      {/* <div className='main-bg' style={{ backgroundImage : 'url(' + bg + ')' }}></div> */}
      {/* <div className='main-bg' style={{ backgroundImage : 'url('+ bg +')' }}/>        */}

      {/* 3. App.js 에서 아래 html 코드 <img> 태그 사용해서 이미지 파일 "bg.png" 집어넣는 사용법  */}
      {/* <img src={bg} /> */}
    </div>
  );
}

function Card(props) {
  return (
    <div className='col-md-4'>
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h5>{props.shoes.title}</h5>
      <p>{props.shoes.price}</p>
    </div>
  )
}

// TODO : 아래 주석친 테스트 코드 필요시 참고 (2024.09.10 jbh)
// function Card(props) {
//   return (
//     <div className='col-md-4'>
//       <img src={'https://codingapple1.github.io/shop/shoes' + (props.i) + '.jpg'} width="80%" />
//       {/* <h4>상품명</h4> */}
//       {/* <p>상품정보</p> */}
//       {/* <h4>{ props.shoes[0].title }</h4> */}
//       {/* <p>{ props.shoes[0].price }</p> */}
//       <h4>{ props.shoes.title }</h4>
//       <p>{ props.shoes.content }</p>
//       <p>{ props.shoes.price }</p>
//     </div>
//   )
// }

export default App;