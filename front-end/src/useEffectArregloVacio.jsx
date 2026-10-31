import { useEffect, useState } from 'react';

export function useEffectArregloVacio() {
  // hook
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log('Componente fue cargado: consultar datos de un API');
    setTimeout(() => {
      // CORREGIDO: Todo va dentro de un array [...]
      setUsers([
        { id: 1, nombre: 'juanito escarcha' },
        { id: 2, nombre: 'el cris' },
      ]);
    }, 1000);
  }, []);

  return (
    <ul>
      {users.map((x) => (
        <li key={x.id}>{x.nombre}</li>
      ))}
    </ul>
  );
}
