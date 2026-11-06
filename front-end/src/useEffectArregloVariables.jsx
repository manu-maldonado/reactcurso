import { useState } from "react";

export function useEffectVariables() {
    const [busqueda, setBusqueda] = useState();

    useEffect(() => {
        if (busqueda.time == "") return;
        console.log("Buscando API de productos que coincidan con busqueda");

    }, [busqueda]);

    return (
        <>
            <input type="text" placeholder="Buscar producto"
            value={busqueda} onfocusout={(e) => setBusqueda(e.target.value)} />
        </>
    );
}
