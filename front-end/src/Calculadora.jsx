import { useState } from "react";

export function Calculadora() {
  const [resultado, setResultado] = useState(0);
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);

  function operationAritmetic(a, b, operator) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (a === 0 && b === 0) return "Indeterminado";
        if (b === 0) return "No se puede dividir";
        return a / b;
    }
  }

  return (
    <>
      <input type="number" onChange={(e) => setInputA(+e.target.value)} />
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
      <input type="number" onChange={(e) => setInputB(+e.target.value)} />
      <label htmlFor="">{resultado}</label>
    </>
  );
}
