import { useState } from "react";

export function UseEffectsArregloVacio() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        console.log("El Componente fue cargado: acabamos de consultar datos de la API");

        setTimeout(() => {
            setUsers({id:1, nombre: "juanito"}, {id:2, nombre: "pedrito"});
        }, 1000);
    }, []);

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.nombre}</li>
            ))}
        </ul>
    );
}