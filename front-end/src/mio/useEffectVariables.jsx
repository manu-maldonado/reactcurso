import { useEffect, useState } from "react";

export function UseEffectVariables(){
    const [busqueda, setBusqueda] = useState('')


useEffect(()=> {

    if(busqueda.trim() == "")return;
    console.log("Buscando Api QUE COINCIDAN CON BUSQUEDA")
}, [busqueda])


return (
    <div>
       <input type="text" placeholder="Termino de Busqueda" value={busqueda} onChange={(evt)=> setBusqueda(evt.target.value)}/>
    </div>
)
}
