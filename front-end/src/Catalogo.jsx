import { use, useEffect, useState } from "react"

export function Catalogo(){
    //definir estado para catalogo, cargando
    const [productos, setProductos] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1500);
    })

    return (
        <>
        <div>
            {isLoading ? <h4>Esta cargando</h4> : <h4>Termino de cargar</h4> }
        </div>
        </>
    )
}