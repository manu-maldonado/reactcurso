import { useState } from 'react';

export function Calculator() {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [resultado, setResultado] = useState(0);

    return (
        <div style={{ marginTop: "20px", border: "1px dashed gray", padding: "15px", borderRadius: "8px" }}>
            <h3>Calculadora de Suma</h3>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(Number(e.target.value))}
            />
            <span> + </span>
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(Number(e.target.value))}
            />
            <button onClick={() => setResultado(num1 + num2)} style={{ marginLeft: "10px" }}>
                Sumar
            </button>
            <h4>Resultado: {resultado}</h4>
        </div>
    );
}