import { useEffect, useState } from "react";

export function UseEffectArregloVacio(){
    const [users,setUsers]= useState([]);
    useEffect(()=>{
        console.log("El componente fue cargado: acabamos de consultar datos desde un API")
        console.log("El componente fue renderizado arreglo vacio")

        setTimeout(()=>{
            setUsers([{id:1,nombre:"Juanito Escarchar"},{id:2,nombre:"angelTex"}])
        })
    },[])
    return(
        <>
        <ul>
        {users.map(x=> <li key={x.id}>{x.nombre}</li>)}
        </ul>
        </>
    )
}