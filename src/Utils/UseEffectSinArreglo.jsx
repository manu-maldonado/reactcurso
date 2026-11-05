import {useEffect, useState} from "react";

export function UseEffectSinArreglo() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("Se ejecuta el useEffect");
    });

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );
}