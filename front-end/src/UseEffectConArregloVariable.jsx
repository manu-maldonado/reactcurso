import { useEffect, useState } from "react";

export function UseEffectConArregloVariable() {
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    if (busqueda.trim() == "") return;
    console.log("Buscando API de Productos que Coinciden con la Búsqueda");
  }, [busqueda]);

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe Término Búsqueda"
        value={busqueda}
        onInput={(evento) => setBusqueda(evento.target.value)}
      />
    </div>
  );
}
