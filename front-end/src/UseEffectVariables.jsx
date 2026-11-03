import { useEffect, useState } from "react";

export function UseEffectVariables() {

  //Estado para almacenar el término de búsqueda
  const [busqueda, setBusqueda] = useState("");

  //Se ejecuta cuando cambia la variable busqueda
  useEffect(() => {

    //Evitar búsquedas vacías
    if (busqueda.trim() === "") {
      return;
    }

    console.log(
      `Buscando en la API productos que coincidan con: ${busqueda}`
    );

  }, [busqueda]);

  return (
    <div>
      <h2>useEffect con variables</h2>

      <input
        type="text"
        placeholder="Ej. Mouse, Teclado, Monitor"
        value={busqueda}
        onChange={(event) => setBusqueda(event.target.value)}
      />

      <p>Término de búsqueda: {busqueda}</p>
    </div>
  );
}