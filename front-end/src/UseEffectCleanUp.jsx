import { useEffect, useState } from "react";

export function UseEffectCleanUp(){
    const [segundos,setSegundos]= useState(0);
    useEffect(()=>{
        const  intervalo= setInterval(()=>{
            setSegundos((prev) => prev+1)
        },1000)
        return() =>{
        console.log("Limpiadno para evitar fugas de memoria...")
        clearInterval(intervalo)
        }
    })
    return(
        <>
        <p>Segundos activos en la vista rendedeada: {segundos}</p>
        </>
    )
}