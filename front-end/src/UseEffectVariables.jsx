import { useEffect, useState } from "react";

export function UseEffectVariables() {
    const [busqueda,setBusqueda] = useState("")

    useEffect(()=>{
        if(busqueda.trim() == "") return;

        console.log("Buscando API de productos que coinciden con la busqueda")
    }, [busqueda])

    return (
        <div>
            <input type="text" placeholder="Escriba su termino de busqueda" value={busqueda} onChange={(evt) => setBusqueda(evt.target.value)} />
        </div>
    )
}
