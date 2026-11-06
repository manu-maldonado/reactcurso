import { useState } from "react";

export function useEffectCleanUp() {
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        }, 1000);

        return () => {
            console.log("Limpiando el intervalo para evitar fugas de memoria");
            clearInterval(intervalo);
        };
    }, [segundos]);

    return (
        <div>
            <p>Segundos activos en la vista render: {segundos}</p>
        </div>
    );
}
