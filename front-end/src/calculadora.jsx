// import { useState } from 'react';

// export function Calculadora({ operacion }) {
//   const [op, setOP] = useState('');
// nombre variable, accion
//   const [multiplicar, setMultiplicar] = useState('*');
//   const [dividir, setDividr] = useState('/');
//   const [sumar, setSumar] = useState('+');
//   const [restar, setRestar] = useState('-');
// }
// import { useState } from 'react';

// export function Calculadora() {
//   const [resultado, setResultado] = useState(0);
//   //   const [suma, setSuma] = useState();
//   //   const [resta, setResta] = useResta();
//   const [inputA, setInputA] = useState(0);
//   const [inputB, setInputB] = useState(0);

//   function operacionAritmetic(a, b, operator) {
//     switch (operator) {
//       case '+':
//         return a + b;
//       case '-':
//         return a - b;
//       case '*':
//         return a * b;
//       case '/':
//         if (a === 0 && b === 0) return 'Indeterminado vato';
//         if (b === 0) return 'No se puede dividir mano';
//         return a / b;
//     }
//   }

//   return (
//     <>
//       <input type="text" onChange={(e) => setInputA(e.target.value)} />
//       <select
//         name=""
//         id=""
//         onChange={(evt) => {
//           setResultado(operacionAritmetic(inputA, inputB, evt.target.value));
//         }}
//       >
//         <option value="+">+</option>
//         <option value="-">-</option>
//         <option value="*">*</option>
//         <option value="/">/</option>
//       </select>
//       <input
//         type="text"
//         name=""
//         id=""
//         onChange={(e) => setInputB(+e.target.value)}
//       />
//       {/* + -> convierte en valor numerico */}
//       <label htmlFor="">{resultado}</label>
//     </>
//   );
// }

import { useState } from 'react';

export function Calculadora() {
  const [resultado, setResultado] = useState(0);
  // const [suma, setSuma] = useState()
  // const [rest, setResta] = useState()
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);

  function operationAritmetic(a, b, operator) {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      case '/':
        if (a === 0 && b === 0) return 'Indeterminado vato';
        if (b === 0) return 'No se puede dividir mano';
        return a / b;
    }
  }

  return (
    <>
      {/* encapsulamiento */}
      <input type="text" onChange={(e) => setInputA(+e.target.value)} />
      <select
        name=""
        id=""
        onClick={(evt) =>
          setResultado(operationAritmetic(inputA, inputB, evt.target.value))
        }
      >
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="text" onChange={(e) => setInputB(+e.target.value)} />
      <label htmlFor="">{resultado}</label>
    </>
  );
}
