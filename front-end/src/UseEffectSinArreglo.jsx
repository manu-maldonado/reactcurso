import { useEffect, useState } from 'react';

export function useEffectSinArreglo() {
  //hook
  const [contador, setContador] = useState(0);

  useEffect(() => {
    //para que se renderice
    console.log('El componente se acaba de renderizar');
  });

  return (
    <>
      <h4>Contador: {contador}</h4>
      <button onClick={() => setContador(contador + 1)}> Sumar</button>
    </>
  );
}
