import { useEffect, useState } from "react";
import { SearchProduct } from "./SearchProduct";

export function UseEffectVariables() {
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    if (busqueda.trim() === "") return;

    console.log(
      `Buscando productos que coincidan con: ${busqueda}`
    );

    // Aquí se podría hacer una petición fetch
    // fetch(`/api/productos?q=${busqueda}`)
    //   .then(response => response.json())
    //   .then(data => console.log(data));

  }, [busqueda]);

  return (
    <div>
      <input
        type="text"
        placeholder="Escriba su término de búsqueda"
        value={busqueda}
        onChange={(evt) => setBusqueda(evt.target.value)}
      />
    </div>
    
    
  );
}

