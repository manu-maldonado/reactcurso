import { useEffect, useState } from "react";

export function UseEffectArregloVacio() {

  //Estado para almacenar los usuarios
  const [usuarios, setUsuarios] = useState([]);

  //Se ejecuta al montar el componente
  useEffect(() => {
    console.log(
      "Componente cargado. Consultando datos desde una API..."
    );

    //Simulamos una petición asíncrona
    const timer = setTimeout(() => {
      setUsuarios([
        { id: 1, nombre: "Yendalifaz" },
        { id: 2, nombre: "Christopher" }
      ]);
    }, 1500);

    //Limpieza del temporizador
    return () => clearTimeout(timer);

  }, []);

  return (
    <div>
      <h2>useEffect con arreglo vacío</h2>
      <h3>Lista de usuarios</h3>

      {usuarios.length === 0 ? (
        <p>Cargando usuarios...</p>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>
              {usuario.nombre}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}