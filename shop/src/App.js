// [코딩애플] React 스터디 
// Part 2 : 쇼핑몰 프로젝트
// 16강 - 새로운 프로젝트 생성 & Bootstrap 사용하기

// 17강 - 이미지 넣는 법 & public 폴더 이용하기

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
import bg from './img/bg.png';   // 이미지 파일 "bg.png"를 "bg"로 가져오기(import)

function App() {
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

      {/* 아래 <div className="col-md-4"> 태그는 React Bootstrap 이 아닌 원조 Bootstrap에서 가져온 html 코드이다. */}
      {/* 아래 <div className="col-md-4"> 태그를 원조 Bootstrap에서 가져온 이유는 편의상 가져왔다.(React Bootstrap 보다 가독성이 상대적으로 좋다) */}
      {/* 상품 목록 3가지(상품 이미지 파일, 상품명, 상품정보) 가로로 나열하기 위해 아래 <div className="col-md-4"> 태그 사용 */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {/* <img> 태그에 외부에 호스팅 된 이미지 파일을 가져오려면 아래처럼 이미지 절대 주소 URL을 속성 src에 넣기  */}
            {/* <img> 태그에 width="80"%로 제한해서 이미지 예쁘게 출력되게 설정 */}
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            {/* <img> 태그에 외부에 호스팅 된 이미지 파일을 가져오려면 아래처럼 이미지 절대 주소 URL을 속성 src에 넣기  */}
            {/* <img> 태그에 width="80"%로 제한해서 이미지 예쁘게 출력되게 설정 */}
            <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
            <h4>상품명</h4>
            <p>상품정보</p>
          </div>
          <div className="col-md-4">
            {/* <img> 태그에 외부에 호스팅 된 이미지 파일을 가져오려면 아래처럼 이미지 절대 주소 URL을 속성 src에 넣기  */}
            {/* <img> 태그에 width="80"%로 제한해서 이미지 예쁘게 출력되게 설정 */}
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
      {/* <div className='main-bg' style={{ backgroundImage : 'url('+ bg +')' }}/>        */}

      {/* 3. App.js 에서 아래 html 코드 <img> 태그 사용해서 이미지 파일 "bg.png" 집어넣는 사용법  */}
      {/* <img src={bg} /> */}
    </div>
  );
}

export default App;