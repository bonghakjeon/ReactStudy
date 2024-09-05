// 3가지 object 자료({ id : , title : "", content : "", price : })가 포함된 리스트 객체 data 생성
let data = [{ id : 0, title : "White and Black", content : "Born in France", price : 120000 }, 
             { id : 1, title : "Red Knit", content : "Born in Seoul", price : 110000 }, 
             { id : 2, title : "Grey Yordan", content : "Born in the States", price : 130000}];

var name1 = 'Kim';
var name2 = 'Park';
let a = 10;
let b = 100;

let arr = [1, 2, 3]
let arr2 = ['kim', 20]
let test = arr2[0]
let obj = { name : 'kim', age : 20 }
let testName = obj.name
let testAge = obj.age

// export default data;   // 키워드 export default data; 사용하면 변수 data 단 하나만 data.js 파일 뿐만 아니라 다른 소스 파일 (예) App.js 에서도 사용 할 수 있도록 내보내기 가능 
// export default a;   // 키워드 export default a; 사용하면 변수 a 단 하나만 data.js 파일 뿐만 아니라 다른 소스 파일 (예) App.js 에서도 사용 할 수 있도록 내보내기 가능 

export { data, name1, name2 } // 키워드 export { data, name1, name2 } 사용하면 변수 여러 개(data, name1, name2)를  data.js 파일 뿐만 아니라 다른 소스 파일 (예) App.js 에서도 사용 할 수 있도록 모두 내보내기 가능
// export { a, b } // 키워드 export { a, b } 사용하면 변수 여러 개(a, b)를  data.js 파일 뿐만 아니라 다른 소스 파일 (예) App.js 에서도 사용 할 수 있도록 모두 내보내기 가능