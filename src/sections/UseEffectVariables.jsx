import { useEffect, useState } from "react";

export function UseEffectVariebles() {
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    if (busqueda.trim() == "") return;

    console.log("Buscando API de productos que coinciden con la busqueda");
  }, [busqueda]);
  return (
    <div>
      <input
        type="text"
        placeholder="escriba su elemnto de busquedda"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  );
}
