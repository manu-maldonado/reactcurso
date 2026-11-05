import { useState } from "react";

export function Calculadora() {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);
  const [operador, setOperador] = useState("+");

  function operationAritmetic(a, b, operator) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        if (a === 0 && b === 0) return "No";
        if (b === 0) return "No se puede dividir, ni modo";
        return a / b;
    }
  }

  const resultado = operationAritmetic(inputA, inputB, operador);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <input type="number" onChange={(e) => setInputA(+e.target.value)} />
      <select value={operador} onChange={(e) => setOperador(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" onChange={(e) => setInputB(+e.target.value)} />
      <span>=</span>
      <label>{resultado}</label>
    </div>
  );
}