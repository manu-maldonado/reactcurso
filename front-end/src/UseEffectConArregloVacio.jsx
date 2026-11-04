import { useEffect, useState } from "react";

export function UseEffectConArregloVacio() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    console.log(
      "El Componente UseEffectConArregloVacio fue Cargado; Acabamos de Consultar Datos desde un API",
    );
    setTimeout(() => {
      setUsuarios([
        { id: 1, nombre: "Juanito Escarcha" },
        { id: 2, nombre: "El Cris" },
      ]);
    }, 1000);
  }, []);

  return (
    <ul>
      {usuarios.map((x) => (
        <li key={x.id}>{x.nombre}</li>
      ))}
    </ul>
  );
}
