import { useState } from "react";

export function Calculadora() {
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");
  const [operador, setOperador] = useState("suma");
  const [resultado, setResultado] = useState(0);

  function calcular() {
    let resultadoOperacion;

    switch (operador) {
      case "suma":
        resultadoOperacion = inputA + inputB;
        break;
      case "resta":
        resultadoOperacion = inputA - inputB;
        break;
      case "multiplicacion":
        resultadoOperacion = inputA * inputB;
        break;
      case "division":
        if (inputB === 0) {
          resultadoOperacion =
            inputA === 0
              ? "Indeterminado"
              : "No se puede dividir entre cero";
        } else {
          resultadoOperacion = inputA / inputB;
        }
        break;

      default:
        resultadoOperacion = "Operación no válida";
    }

    setResultado(resultadoOperacion);
  }

  function limpiar() {
    setInputA("");
    setInputB("");
    setOperador("suma");
    setResultado(0);
  }

  return (
    <div>
      <h2>Calculadora</h2>

      <input
        type="number"
        value={inputA}
        onChange={(evt) =>
          setInputA(+evt.target.value)
        }
      />

      <select
        value={operador}
        onChange={(evt) =>
          setOperador(evt.target.value)
        }
      >
        <option value="suma">+</option>
        <option value="resta">-</option>
        <option value="multiplicacion">
          ×
        </option>
        <option value="division">
          ÷
        </option>
      </select>

      <input
        type="number"
        value={inputB}
        onChange={(evt) =>
          setInputB(+evt.target.value)
        }
      />

      <button onClick={calcular}>
        Calcular
      </button>

      <button onClick={limpiar}>
        Limpiar
      </button>

      <p>Resultado: {resultado}</p>
    </div>
  );
}