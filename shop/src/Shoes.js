// TODO : React export default와 export의 차이 학습 (2024.09.04 jbh)
// 참고 URL - https://velog.io/@navyjeongs/%EB%A6%AC%EC%95%A1%ED%8A%B8-export-default%EC%99%80-export%EC%9D%98-%EC%B0%A8%EC%9D%B4

import { useState } from 'react';
import { data, name1, name2 } from './data.js';

// import a from './data.js'; // data.js라는 파일에 존재하는 변수(a - 변수)를 Shoes.js 에서 가져와서 쓰고 싶을 때, 키워드 import a from './data.js'; 사용 
// import a from './data.js';

// data.js라는 파일에 존재하는 변수(a, b - 변수)를 Shoes.js 에서 가져와서 쓰고 싶을 때, 키워드 import {a, b} from './data.js'; 사용 
// 주의사항 
// - import 사용해서 변수 여러 개로 가져올 때 (중괄호 - {} 사용)는 
//   export 할 때 사용한 변수명 (export { a, b }) 수정 하지 말고 
//   그대로 가져와야 한다. (import {a, b} from './data.js';)
import {a, b} from './data.js';

/// <summary>
/// 상품목록 컴포넌트 
/// </summary>
function Shoes() {
    let [ shoes, setShoes ] = useState(data);

    // TODO : 아래 주석친 테스트 코드 필요시 참고
    // React 웹 프론트엔트 화면 -> 검사창 -> 항목 "Console"에서 데이터 출력 예시 
    // console.log(shoes);
    // console.log(shoes[0]);
    // console.log(shoes[0].id);
    // console.log(shoes[0].title);
    // console.log(shoes[0].content);
    // console.log(shoes[0].price);

    return (
        <div className='Shoes'>
            {/* {a} */}
            <div className='container'>
                <div className="row">
                    {
                        // map 반복문 사용 하고 html 코드로 구현 방법 
                        shoes.map(function(title, index) {
                            return (
                                // map 함수 사용해서 반복문으로 html 생성 방법 1 (컴포넌트 Product 구현 방식)
                                <Product index={index} title={shoes[index].title} content={shoes[index].content} price={shoes[index].price} />

                                // map 함수 사용해서 반복문으로 html 생성 방법 2  
                                // html 코드에 key={index} 작성 필수 
                                // <div className="col-md-4" key={index}>
                                //     {/* <img> 태그에 외부에 호스팅 된 이미지 파일을 가져오려면 아래처럼 이미지 절대 주소 URL을 속성 src에 넣기  */}
                                //     {/* <img> 태그에 width="80"%로 제한해서 이미지 예쁘게 출력되게 설정 */}
                                //     {/* TODO : map 반복문 사용해서 <img> 태그에 (index+1) 값 추가해서 이미지 파일 3가지 shoes1.jpg, shoes2.jpg, shoes3.jpg 출력하기 (2024.09.04 jbh) */}
                                //     {/* 참고 URL - https://bokjiho.medium.com/react-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B2%BD%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-public-src-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EC%B0%A8%EC%9D%B4-fddb4f455c2a */}
                                //     <img src={"https://codingapple1.github.io/shop/shoes" + (index+1) + ".jpg"} width="80%" />
                                //     <h4>{ shoes[index].title }</h4> 
                                //     <p>{ shoes[index].content }</p>
                                //     <p>{ shoes[index].price }</p>
                                //     {/* <h4>상품명</h4> */}
                                //     {/* <p>상품정보</p> */}
                                // </div>
                            )       
                        })
                    }
                </div>
            </div>
        </div>
    )

    // map 반복문 사용 안 하고 html 코드로 구현 방법 
    // return (
    //     <div className='Shoes'>
    //         {/* 아래 <div className="col-md-4"> 태그는 React Bootstrap 이 아닌 원조 Bootstrap에서 가져온 html 코드이다. */}
    //         {/* 아래 <div className="col-md-4"> 태그를 원조 Bootstrap에서 가져온 이유는 편의상 가져왔다.(React Bootstrap 보다 가독성이 상대적으로 좋다) */}
    //         {/* 상품 목록 3가지(상품 이미지 파일, 상품명, 상품정보) 가로로 나열하기 위해 아래 <div className="col-md-4"> 태그 사용 */}
    //         <div className="container">
    //             <div className="row">
    //                 <div className="col-md-4">
    //                     {/* <img> 태그에 외부에 호스팅 된 이미지 파일을 가져오려면 아래처럼 이미지 절대 주소 URL을 속성 src에 넣기  */}
    //                     {/* <img> 태그에 width="80"%로 제한해서 이미지 예쁘게 출력되게 설정 */}
    //                     <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
    //                     <h4>{ data[0].title }</h4> 
    //                     <p>{ data[0].content }</p>
    //                     <p>{ data[0].price }</p>
    //                     {/* <h4>상품명</h4> */}
    //                     {/* <p>상품정보</p> */}
    //                 </div>
    //                 <div className="col-md-4">
    //                     {/* <img> 태그에 외부에 호스팅 된 이미지 파일을 가져오려면 아래처럼 이미지 절대 주소 URL을 속성 src에 넣기  */}
    //                     {/* <img> 태그에 width="80"%로 제한해서 이미지 예쁘게 출력되게 설정 */}
    //                     <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%" />
    //                     <h4>{ data[1].title }</h4>
    //                     <p>{ data[1].content }</p>
    //                     <p>{ data[1].price }</p>
    //                     {/* <h4>상품명</h4> */}
    //                     {/* <p>상품정보</p> */}
    //                 </div>
    //                 <div className="col-md-4">
    //                     {/* <img> 태그에 외부에 호스팅 된 이미지 파일을 가져오려면 아래처럼 이미지 절대 주소 URL을 속성 src에 넣기  */}
    //                     {/* <img> 태그에 width="80"%로 제한해서 이미지 예쁘게 출력되게 설정 */}
    //                     <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="80%" />
    //                     <h4>{ data[2].title }</h4>
    //                     <p>{ data[2].content }</p>
    //                     <p>{ data[2].price }</p>
    //                     {/* <h4>상품명</h4> */}
    //                     {/* <p>상품정보</p> */}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

function Product(props) {
    return (
        <div className="col-md-4" key={props.index}>
            {/* <img> 태그에 외부에 호스팅 된 이미지 파일을 가져오려면 아래처럼 이미지 절대 주소 URL을 속성 src에 넣기  */}
            {/* <img> 태그에 width="80"%로 제한해서 이미지 예쁘게 출력되게 설정 */}
            {/* TODO : map 반복문 사용해서 <img> 태그에 (index+1) 값 추가해서 이미지 파일 3가지 shoes1.jpg, shoes2.jpg, shoes3.jpg 출력하기 (2024.09.04 jbh) */}
            {/* 참고 URL - https://bokjiho.medium.com/react-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90%EC%84%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EA%B2%BD%EB%A1%9C-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-public-src-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EC%B0%A8%EC%9D%B4-fddb4f455c2a */}
            <img src={"https://codingapple1.github.io/shop/shoes" + ((props.index) + 1) + ".jpg"} width="80%" />
            <h4>{ props.title }</h4> 
            <p>{ props.content }</p>
            <p>{ props.price }</p>
            {/* <h4>상품명</h4> */}
            {/* <p>상품정보</p> */}
        </div>
    )
}

export default Shoes;   // 키워드 export default Shoes; 사용하면 변수 컴포넌트 Shoes 단 하나만 Shoes.js 파일 뿐만 아니라 다른 소스 파일 (예) App.js 에서도 사용 할 수 있도록 내보내기 가능

// TODO : 아래 주석친 코드 필요시 참고 (2024.09.04 jbh)
// export { data, name1, name2 } // 키워드 export { data, name1, name2 } 사용하면 변수 여러 개(data, name1, name2)를  Shoes.js 파일 뿐만 아니라 다른 소스 파일 (예) App.js 에서도 사용 할 수 있도록 모두 내보내기 가능 