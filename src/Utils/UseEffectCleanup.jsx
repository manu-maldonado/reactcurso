import { useEffect, useState } from "react";

export function UseEffectCleanup(){
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        //Inicializar un temporizador
        const intervalo = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000);

        return () => {
        console.log("Limpiando intervalo");
        clearInterval(intervalo);
    }
    }, []);
    
    return <p>Segundos transcurridos: {segundos}</p>;
}