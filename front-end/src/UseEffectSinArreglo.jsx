<<<<<<< HEAD
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
=======
import { useEffect, useState } from "react";

export function UseEffectSinArreglo(){
    const [contador, setContador] = useState(0);


    useEffect(()=>{
        console.log("El componente se acaba de renderizar de useEffectSinArreglo")
    })

    return (
        <>
          <p>Contador: {contador}</p>   
          <button onClick={()=> setContador(contador + 1)}>Sumar</button>
        </>
    )
}
>>>>>>> 463659425ad945b9ac9dd4aa99349a0464c4b1c4
