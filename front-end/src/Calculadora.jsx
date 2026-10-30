import { useState } from "react";
import { CalculadoraOperaciones } from "./CalculadoraOperaciones";

export function Calculadora() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [operacion, setOperacion] = useState("");
  return (
    <>
      <form>
        <label>Valor 1</label>
        <input type="number" onChange={(evt) => setInput1(+evt.target.value)} />
        <p>{input1}</p>

        <label> Valor 2</label>
        <input type="number" onChange={(evt) => setInput2(+evt.target.value)} />
        <p>{input2}</p>
        <br />
        <div>
          <button
            type="button"
            onClick={() => setOperacion((operacion) => "S")}
          >
            Sumar
          </button>{" "}
          <br />
          <button
            type="button"
            onClick={() => setOperacion((operacion) => "R")}
          >
            Restar
          </button>{" "}
          <br />
          <button
            type="button"
            onClick={() => setOperacion((operacion) => "M")}
          >
            Multiplicar
          </button>{" "}
          <br />
          <button
            type="button"
            onClick={() => setOperacion((operacion) => "D")}
          >
            Dividir
          </button>{" "}
          <br />
          <button type="reset">Reset</button>
        </div>
        <br />
        <div>
          <CalculadoraOperaciones
            operaciones={operacion}
            input1={input1}
            input2={input2}
          ></CalculadoraOperaciones>
        </div>
      </form>
      <br />
    </>
  );
}
