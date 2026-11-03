import { useState } from "react";
import { UseEffectCleanup } from "./UseEffectCleanup.jsx";

export function EjemploMontaje() {

  const [mostrar, setMostrar] = useState(true);

  return (
    <div>
      <h2>Demostración del ciclo de vida</h2>

      <button
        type="button"
        onClick={() => setMostrar((prev) => !prev)}
      >
        {mostrar ? "Ocultar temporizador" : "Mostrar temporizador"}
      </button>

      {mostrar && <UseEffectCleanup />}
    </div>
  );
}
