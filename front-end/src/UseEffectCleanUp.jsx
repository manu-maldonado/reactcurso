import { useEffect, useState } from "react";
import spinGif from "./assets/spin.gif";

export function UseEffectCleanUp(){
    const [segundos, setSegundos] = useState(0)

    useEffect(() => {
        const intervalo = setInterval(() => {
            setSegundos((prev) => prev + 1)
        }, 1000)

        return () => {
            console.log("Limpiando")
            clearInterval(intervalo)
        }
    }, [])

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
            <p>Segundos activos en la vista renderizada: {segundos}</p>
            <img src={spinGif} alt="Cargando" height="30" />
        </div>
    )
}