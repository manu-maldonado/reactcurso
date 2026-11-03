import { useEffect, useState } from "react";

export function UseEffectSinArreglo() {

  //Estado del contador
  const [contador, setContador] = useState(0);

  //Se ejecuta después de cada renderizado
  useEffect(() => {
    console.log("El componente se acaba de renderizar");
  });

  return (
    <div>
      <h2>useEffect sin arreglo</h2>

      <p>Contador: {contador}</p>

      <button
        type="button"
        onClick={() => setContador((prev) => prev + 1)}
      >
        Sumar
      </button>
    </div>
  );
}