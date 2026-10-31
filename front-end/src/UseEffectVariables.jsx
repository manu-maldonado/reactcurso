import { useEffect, useState } from "react";

export function UseEffectVariables(){
    const [busqueda,setBusqueda]= useState();

    useEffect(()=>{
        if (busqueda == "") return;
        console.log("Buscado API de prodcutos que coincida con la busqueda")
    },[busqueda])

    return(
        <div>
            <input type="text" placeholder="Escriba su termino de busqedad"
            value={busqueda} onBlur={(evt)=> setBusqueda(evt.target.value)}></input>
        </div>
    )
}