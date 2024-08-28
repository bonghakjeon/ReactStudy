// [코딩애플] React 스터디 
// Part 2 : 쇼핑몰 프로젝트
// 16강 - 새로운 프로젝트 생성 & Bootstrap 사용하기

// Bootstrap 웹 사이트 
// Getting Started -> introduction (태그 <link> 사용해서 css 버전 적용 방법 포함)
// 참고 URL - https://react-bootstrap.netlify.app/docs/getting-started/introduction

// Bootstrap - 컴포넌트 Button Example
// 참고 URL - https://react-bootstrap.netlify.app/docs/components/buttons/

// Bootstrap - 컴포넌트 NavBar Example
// 참고 URL - https://react-bootstrap.netlify.app/docs/components/navbar/

// TODO : React Bootstrap CSS 파일 사용하기 위해서 index.html 파일 -> <head> 태그 안에 <link> 태그 추가 (2024.08.22 jbh)  -->
// 참고 URL - https://react-bootstrap.netlify.app/docs/getting-started/introduction  -->

import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import logo from './logo.svg';
import './App.css';
import bg from './bg.png';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        {/* <Button variant="primary">Primary</Button> */}
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className='main-bg' />

      {/* [권장하지 않음]   1. 폴더 "shop" -> 폴더 "public" 안에 들어 있는 이미지 파일 "/logo192.png" <img> 태그에 집어넣는 사용법 */}
      {/* <img src="/logo192.png" />  */}
      {/* [권장하는 사용법] 2. 폴더 "shop" -> 폴더 "public" 안에 들어 있는 이미지 파일 "/logo192.png" <img> 태그에 집어넣는 사용법 */}
      <img src={process.env.PUBLIC_URL + '/logo192.png'} />

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
        </div>
      </div>


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

      {/* 3. App.js 에서 아래 html 코드 <img> 태그 사용해서 이미지 파일 "bg.png" 집어넣는 사용법  */}
      {/* <img src={bg} /> */}
    </div>
  );
}

export default App;