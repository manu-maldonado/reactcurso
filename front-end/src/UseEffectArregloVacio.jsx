import { useEffect, useState } from "react";

export function UseEffectArregloVacio() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Componente UseEffectSinArreglo fue cargado: Se consulto dato desde un API");

    setTimeout(() => {
      setUsers(
        [{ id: 1, nombre: "Juanito escarcha" },
        { id: 2, nombre: "Viri" }]
      );
    }, 1000);
  }, []);

  return (
    <>
      <ul>
        {users.map((x) => (
          <li key={x.id}>{x.nombre}</li>
        ))}
      </ul>
    </>
  );
}