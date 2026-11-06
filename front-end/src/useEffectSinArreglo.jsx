import { useState } from "react";

export function UseEffectsinarreglo() {
    const [contador, setContador] = useState(0);


    useEffect(() => {
        console.log("El componente se acaba de renderizar");
    });

    return (
        <>
            <p>Contador: {contador}</p>
            <button onClick={() => setContador(contador + 1)}>Sumar</button>
        </>
    );
}