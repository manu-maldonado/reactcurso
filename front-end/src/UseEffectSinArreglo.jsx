import { useEffect, useState } from "react";

export function UseEffectSinArreglo(){
    const [contador,setContador]= useState(0);
    useEffect(()=>{
        console.log("El componente se acaba de renderizar sin Arreglo")
    })
    return(
        <>
        <p>Contador: {contador}</p>
        <button onClick={()=>setContador(contador +1)}>Sumar</button>
        </>
    )
}