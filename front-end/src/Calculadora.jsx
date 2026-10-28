import { useState } from "react";

export function Calculadora() {
  const [primerNumero, setPrimerNumero] = useState("");
  const [segundoNumero, setSegundoNumero] = useState("");
  const [operacionSeleccionada, setOperacionSeleccionada] = useState("suma");

  function calcularResultado() {
    if (primerNumero.trim() === "" || segundoNumero.trim() === "") {
      return "Ingresa los Números y Selecciona la Operación";
    }

    const a = Number(primerNumero);
    const b = Number(segundoNumero);

    let resultado;

    switch (operacionSeleccionada) {
      case "suma":
        resultado = a + b;
        break;
      case "resta":
        resultado = a - b;
        break;
      case "multiplicacion":
        resultado = a * b;
        break;
      case "division":
        if (b === 0) {
          return "No se puede Dividir entre Cero";
        }
        resultado = a / b;
        break;
      default:
        return "Debes Seleccionar una Operación";
    }
    return resultado;
  }

  return (
    <div>
      <h2>Calculadora</h2>
      <div>
        <input
          id="primerNumero"
          type="number"
          min={0}
          value={primerNumero}
          onChange={(evt) => setPrimerNumero(evt.target.value)}
        />
        <select
          id="operacionSeleccionada"
          value={operacionSeleccionada}
          onChange={(evt) => setOperacionSeleccionada(evt.target.value)}
        >
          <option value="suma">Suma (+)</option>
          <option value="resta">Resta (-)</option>
          <option value="multiplicacion">Multiplicación (*)</option>
          <option value="division">División (/)</option>
        </select>
        <input
          id="segundoNumero"
          type="number"
          min={0}
          value={segundoNumero}
          onChange={(evt) => setSegundoNumero(evt.target.value)}
        />
      </div>
      <div>
        <label>
          El Resultado con la Operación Seleccionada es: {calcularResultado()}
        </label>
      </div>
    </div>
  );
}
