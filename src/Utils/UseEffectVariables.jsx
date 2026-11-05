import { useState, useEffect } from "react";

export function UseEffectVariables() {
    const [busqueda, setBusqueda] = useState("");

    useEffect(() => {
        if(busqueda.trim() == "") return;

        console.log("Buscando api...");
    }, [busqueda]);

    return (
        <div>
            <input
                type="text"
                value={busqueda}
                onInput={(e) => setBusqueda(e.target.value)} 
                placeholder="Buscar..."
            />
        </div>
    );
}