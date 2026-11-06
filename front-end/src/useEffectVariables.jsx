import { useEffect, useState } from "react";

export function UseEffectVariables() {
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    if (busqueda.trim() == "") return;

    console.log("Buscando Api de productos que conincidan con la busqueda");
  }, [busqueda]);

  return (
    <div>
      <input
        type="text"
        placeholder="Escriba su termino de busqueda"
        value={busqueda}
        onInput={(evt) => setBusqueda(evt.target.value)}
      />
    </div>
  );
}