import { useEffect, useState } from "react";


export function UseEffectSinArreglo() {

    const [contador, setContador] = useState(0);


    useEffect(() => {
        console.log("Renderizado")
    })


    return (
        <>
        <p>Contador:  {contador}</p>
               <button onClick={()=> setContador(contador + 1)}>Sumar </button>
        </>


 )

}