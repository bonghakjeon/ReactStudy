
/// <summary>
/// 상세페이지 컴포넌트
/// </summary>
function Detail() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
          </div>
        </div>
      </div> 
    )
}

export default Detail;   // 키워드 export default Detail; 사용하면 변수 컴포넌트 Detail 단 하나만 Detail.js 파일 뿐만 아니라 다른 소스 파일 (예) App.js 에서도 사용 할 수 있도록 내보내기 가능