// TODO : 테스트용 <input> 태그 포함된 컴포넌트 MyForm 구현 (2024.10.21 jbh) 
// 참고 URL - https://ko.react.dev/reference/react-dom/components/input#providing-a-label-for-an-input

import { useId } from 'react';

export default function MyForm() {
    return (
      <>
        <label>
          Text input: <input name="myInput" />
        </label>
        <hr />
        <label>
          Checkbox: <input type="checkbox" name="myCheckbox" />
        </label>
        <hr />
        <p>
          Radio buttons:
          <label>
            <input type="radio" name="myRadio" value="option1" />
            Option 1
          </label>
          <label>
            <input type="radio" name="myRadio" value="option2" />
            Option 2
          </label>
          <label>
            <input type="radio" name="myRadio" value="option3" />
            Option 3
          </label>
        </p>
      </>
    );
}

// export default function Form() {
//   const ageInputId = useId();
//   return (
//     <>
//       <label>
//         Your first name:
//         <input name="firstName" />
//       </label>
//       <hr />
//       <label htmlFor={ageInputId}>Your age:</label>
//       <input id={ageInputId} name="age" type="number" />
//     </>
//   );
// }

// export default function Form() {
//   const ageInputId = useId();
//   return (
//     <>
//       <label>
//         Your first name:
//         <input name="firstName" />
//       </label>
//       <hr />
//       <label htmlFor={ageInputId}>Your age:</label>
//       <input id={ageInputId} name="age" type="number" />
//     </>
//   );
// }

// export default function MyForm() {
//     return (
//       <>
//         <label>
//           Text input: <input name="myInput" />
//         </label>
//         <hr />
//         <label>
//           Checkbox: <input type="checkbox" name="myCheckbox" />
//         </label>
//         <hr />
//         <p>
//           Radio buttons:
//           <label>
//             <input type="radio" name="myRadio" value="option1" />
//             Option 1
//           </label>
//           <label>
//             <input type="radio" name="myRadio" value="option2" />
//             Option 2
//           </label>
//           <label>
//             <input type="radio" name="myRadio" value="option3" />
//             Option 3
//           </label>
//         </p>
//       </>
//     );
// }

// export default function Form() {
//     const ageInputId = useId();
//     return (
//       <>
//         <label>
//           Your first name:
//           <input name="firstName" />
//         </label>
//         <hr />
//         <label htmlFor={ageInputId}>Your age:</label>
//         <input id={ageInputId} name="age" type="number" />
//       </>
//     );
// }
  
// export default function MyForm() {
//     return (
//       <>
//         <label>
//           Text input: <input name="myInput" defaultValue="Some initial value" />
//         </label>
//         <hr />
//         <label>
//           Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
//         </label>
//         <hr />
//         <p>
//           Radio buttons:
//           <label>
//             <input type="radio" name="myRadio" value="option1" />
//             Option 1
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="myRadio"
//               value="option2"
//               defaultChecked={true} 
//             />
//             Option 2
//           </label>
//           <label>
//             <input type="radio" name="myRadio" value="option3" />
//             Option 3
//           </label>
//         </p>
//       </>
//     );
// }

// export default function MyForm() {
//     function handleSubmit(e) {
//       // 브라우저가 페이지를 다시 로드하지 못하도록 방지합니다.
//       e.preventDefault();
  
//       // 폼 데이터를 읽습니다.
//       const form = e.target;
//       const formData = new FormData(form);
  
//       // formData를 직접 fetch body로 전달할 수 있습니다.
//       fetch('/some-api', { method: form.method, body: formData });
  
//       // 또는 순수 object로 작업할 수 있습니다.
//       const formJson = Object.fromEntries(formData.entries());
//       console.log(formJson);
//     }
  
//     return (
//       <form method="post" onSubmit={handleSubmit}>
//         <label>
//           Text input: <input name="myInput" defaultValue="Some initial value" />
//         </label>
//         <hr />
//         <label>
//           Checkbox: <input type="checkbox" name="myCheckbox" defaultChecked={true} />
//         </label>
//         <hr />
//         <p>
//           Radio buttons:
//           <label><input type="radio" name="myRadio" value="option1" /> Option 1</label>
//           <label><input type="radio" name="myRadio" value="option2" defaultChecked={true} /> Option 2</label>
//           <label><input type="radio" name="myRadio" value="option3" /> Option 3</label>
//         </p>
//         <hr />
//         <button type="reset">Reset form</button>
//         <button type="submit">Submit form</button>
//       </form>
//     );
// }

// function Form() {
//     const [firstName, setFirstName] = useState(''); // state 변수를 선언합니다.
//     // ...
//     return (
//       <input
//         value={firstName} // 입력 값이 state 변수와 일치하도록 강제합니다.
//         onChange={e => setFirstName(e.target.value)} // input을 편집할 때마다 state 변수를 업데이트합니다.
//       />
//     );
// }

// function Form() {
//     const [firstName, setFirstName] = useState('');
//     return (
//         <>
//             <label>
//                 First name:
//                 <input value={firstName} onChange={e => setFirstName(e.target.value)} />
//             </label>
//             {firstName !== '' && <p>Your name is {firstName}.</p>}
//             ...
//         </>
//     )
// }

// function Form() {
//     // ...
//     const [age, setAge] = useState('');
//     const ageAsNumber = Number(age);
//     return (
//         <>
//             <label>
//                 Age:
//                 <input value={age}
//                        onChange={e => setAge(e.target.value)}
//                        type="number"
//                        />
//                 <button onClick={()=> setAge(ageAsNumber + 10) }>
//                     Add 10 years
//                 </button>
//             </label>
//         </>
//     )
// }

// export default function Form() {
//     const [firstName, setFirstName] = useState('');
//     const [age, setAge] = useState('20');
//     const ageAsNumber = Number(age);
//     return (
//       <>
//         <label>
//           First name:
//           <input
//             value={firstName}
//             onChange={e => setFirstName(e.target.value)}
//           />
//         </label>
//         <label>
//           Age:
//           <input
//             value={age}
//             onChange={e => setAge(e.target.value)}
//             type="number"
//           />
//           <button onClick={() => setAge(ageAsNumber + 10)}>
//             Add 10 years
//           </button>
//         </label>
//         {firstName !== '' &&
//           <p>Your name is {firstName}.</p>
//         }
//         {ageAsNumber > 0 &&
//           <p>Your age is {ageAsNumber}.</p>
//         }
//       </>
//     );
// }
  