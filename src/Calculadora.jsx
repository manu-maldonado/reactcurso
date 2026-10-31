import { useState } from "react";
import "./css/Calculadora.css";

export function Calculadora() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operador, setOperador] = useState("+");

  const calcular = () => {
    const x = Number(a);
    const y = Number(b);

    if (operador === "+") return x + y;
    if (operador === "-") return x - y;
    if (operador === "*") return x * y;
    if (operador === "/") {
      if (x === 0 && y === 0) return "Valor indeterminado";
      if (y === 0) return "No se puede dividir entre cero";
      return x / y;
    }
  };

  const resultado = calcular();
  const esError = typeof resultado === "string";

  return (
    <div className="calc">
      <p className="calc-hint">Inserta dos números y selecciona un operador</p>

      <div className="calc-row">
        <input
          type="number"
          value={a}
          onChange={(e) => setA(e.target.value)}
          placeholder="0"
          aria-label="Primer número"
        />

        <select
          value={operador}
          onChange={(e) => setOperador(e.target.value)}
          aria-label="Operador"
        >
          <option value="+">+</option>
          <option value="-">−</option>
          <option value="*">×</option>
          <option value="/">÷</option>
        </select>

        <input
          type="number"
          value={b}
          onChange={(e) => setB(e.target.value)}
          placeholder="0"
          aria-label="Segundo número"
        />

        <span className="calc-equal">=</span>
      </div>

      <output className={`calc-result ${esError ? "calc-result--error" : ""}`}>
        {resultado}
      </output>

      <button
        type="button"
        className="calc-clear"
        onClick={() => {
          setA("");
          setB("");
        }}
      >
        Limpiar
      </button>
    </div>
  );
}
