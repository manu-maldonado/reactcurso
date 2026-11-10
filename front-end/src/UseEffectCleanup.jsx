import { useEffect, useState } from "react";

export function UseEffectCleanup() {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        // inicializar un temporizador
        const intervalo = setInterval(() => {
            setSegundos((prev) => prev + 1);
        }, 1000);

        return () => {
            console.log("Limpiando intervalo para evitar fugas de memoria...");
            clearInterval(intervalo);
        };
    }, []);

    return (
        <div>
            <h2>Segundos activos en la vista rendereada: {segundos}</h2>
        </div>
    );

}