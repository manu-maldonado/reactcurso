import { useEffect, useState } from "react";

export function UseEffectArregloVacio() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("componente useEffectArregloVacio fue cargado: acabamos de consultar datos desde un API");

        // Simulamos un retraso de 1 segundo (como si fuera un servidor)
        setTimeout(() => {
            setUsers([
                { id: 1, nombre: "juanito escarcha" },
                { id: 2, nombre: "el cris" }
            ]);
        }, 1000);

    }, []); // Arreglo vacío [ ] significa: "ejecútate solo al montar el componente"

    return (
        <div>
            <ul>
                {users.map((x) => (
                    <li key={x.id}>{x.nombre}</li>
                ))}
            </ul>
        </div>
    );
}