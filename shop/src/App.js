// [코딩애플] React 스터디 
// Part 2 : 쇼핑몰 프로젝트
// 16강 - 새로운 프로젝트 생성 & Bootstrap 사용하기

// 17강 - 이미지 넣는 법 & public 폴더 이용하기

// 18강 - 코드 길어지면 import export 하면 됩니다

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
// import { data, name1, name2 } from './data.js';

// import a from './data.js'; // data.js라는 파일에 존재하는 변수(a - 변수)를 App.js 에서 가져와서 쓰고 싶을 때, 키워드 import a from './data.js'; 사용 
import a from './data.js';

import Shoes from './Shoes';
import logo from './logo.svg';
import './App.css';
import bg from './img/bg.png';   // 이미지 파일 "bg.png"를 "bg"로 가져오기(import)

function App() {
  // let [ 상품데이터, 상품데이터변경 ] = useState([{ id : 0, title : "White and Black", content : "Born in France", price : 120000 }, 
  //                                              { id : 1, title : "Red Knit", content : "Born in Seoul", price : 110000 }, 
  //                                              { id : 2, title : "Grey Yordan", content : "Born in the States", price : 130000}]);

  // let [ shoes ] = useState(data);
  

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

      
      <div className='main-bg' />
      
      <Shoes/>

      {/* 아래 주석친 테스트 코드 필요시 참고 (2024.09.04 jbh) */}
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

export default App;