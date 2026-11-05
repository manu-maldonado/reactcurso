import {useEffect, useState} from "react";

export function UseEffectArregloVacio() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("Componente fue cargado");

        setTimeout(() => {
            setUsers([
                {id: 1, name: "Juan"},
                {id: 2, name: "Pedro"},
                {id: 3, name: "Maria"},
            ]);
        }, 2000);
    }, []);

    return (
        <div>
            <h2>Lista de usuarios</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}