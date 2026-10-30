import { useState } from "react";

export function Calculator() {
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
      if (x === 0 && y === 0) return "Indeterminado je";
      if (y === 0) return "No se puede dividir mano";
      return x / y;
    }
  };

  return (
    <div>
      <p>Inserta dos numeros y selecciona un operador :)) </p>
      <br />
      <input type="number" value={a} onChange={(e) => setA(e.target.value)} />

      <select value={operador} onChange={(e) => setOperador(e.target.value)}>
        <option value="+"> + </option>
        <option value="-"> - </option>
        <option value="*"> × </option>
        <option value="/"> ÷ </option>
      </select>

      <input type="number" value={b} onChange={(e) => setB(e.target.value)} />

      <span> = {calcular()}</span>
      <br />
      <button
        type="button"
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
