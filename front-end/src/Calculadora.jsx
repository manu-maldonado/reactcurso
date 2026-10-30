import { useState } from "react";

export function miCalculadora() {
    const [num1, darNum1] = useState("");
    const [num2, darNum2] = useState("");
    const [resultado, calculaResultado] = useState(0);

    const sumar = () => {
        calculaResultado(Number(num1) + Number(num2));
    };
    return (
        <div>
            <h1>Mi versión de calculadora</h1>
            <input
                type="number"
                value={num1}
                onChange={(e) => darNum1(e.target.value)}
                placeholder="Número 1"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => darNum2(e.target.value)}
                placeholder="Número 2"
            />
            <button onClick={sumar}>
                +
            </button>

            <h2>Resultado: {resultado}</h2>

        </div>
    )

}