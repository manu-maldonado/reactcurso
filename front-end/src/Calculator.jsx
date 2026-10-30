import { useState } from "react"

export function Calculator() {

    const [numero1, setNumero1] = useState("")
    const [numero2, setNumero2] = useState("")
    const [operacion, setOperacion] = useState("suma")
    const [resultado, setResultado] = useState(null)

    function calcular() {

        if (numero1.trim() === "" || numero2.trim() === "") {
            setResultado("Ingresa ambos números")
            return
        }

        const num1 = Number(numero1)
        const num2 = Number(numero2)

        if (operacion === "suma") {
            setResultado(num1 + num2)
        }

        if (operacion === "resta") {
            setResultado(num1 - num2)
        }

        if (operacion === "multiplicacion") {
            setResultado(num1 * num2)
        }

        if (operacion === "division") {

            if (num2 === 0) {
                setResultado("No se puede dividir entre cero")
            } else {
                setResultado(num1 / num2)
            }
        }
    }

    return (
        <div>
            <h2>Calculadora</h2>

            <input
                type="number"
                placeholder="Número 1"
                value={numero1}
                onChange={(evt) => setNumero1(evt.target.value)}
            />

            <input
                type="number"
                placeholder="Número 2"
                value={numero2}
                onChange={(evt) => setNumero2(evt.target.value)}
            />

            <select
                value={operacion}
                onChange={(evt) => setOperacion(evt.target.value)}
            >
                <option value="suma">Sumar</option>
                <option value="resta">Restar</option>
                <option value="multiplicacion">Multiplicar</option>
                <option value="division">Dividir</option>
            </select>

            <button type="button" onClick={calcular}>
                Calcular
            </button>

            <h3>Resultado: {resultado}</h3>
        </div>
    )
}