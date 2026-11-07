import { useEffect, useState } from "react";

export function UseEffectCleanup(){
    const [segundos, setSegundos] = useState(0)

    useEffect(()=>{
        const intervalo = setInterval(() =>{
            setSegundos((prev) => prev+1)
        },1000)

        return () => {
            console.log("Limpiando intervalo para evitar fugas de memoria... ")
            clearInterval(intervalo)
        }
    }, [])

    return <p>Segundos activos en la vista rendereada: {segundos}</p>
}
