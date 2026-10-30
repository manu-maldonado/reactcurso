import { useState } from "react"

export function Calculadora() {
    const [resultado, setResultado] = useState(0)
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [operacion, setOperacion] = useState('')

    function calcular(valor1, valor2, operacionSeleccionada) {
        const primero = Number(valor1)
        const segundo = Number(valor2)

        switch (operacionSeleccionada) {
            case "sumar":
                return primero + segundo
            case "restar":
                return primero - segundo
            case "multiplicar":
                return primero * segundo
            case "dividir":
                return primero / segundo
            default:
                return 0
        }
    }

    function resetear() {
        setNum1('')
        setNum2('')
        setOperacion('')
        setResultado(0)
    }

    return (
        <>
        <input
            type="number"
            value={num1}
            onChange={(evt) => {
                setNum1(evt.target.value)
                setResultado(calcular(evt.target.value, num2, operacion))
            }}
        />
        <select
            value={operacion}
            onChange={(evt) => {
                setOperacion(evt.target.value)
                setResultado(calcular(num1, num2, evt.target.value))
            }}
        >
            <option value = "">Seleccione una operación</option>
            <option value = "sumar">+</option>
            <option value = "restar">-</option>
            <option value = "multiplicar">*</option>
            <option value = "dividir">/</option>
        </select>
        <input
            type="number"
            value={num2}
            onChange={(evt) => {
                setNum2(evt.target.value)
                setResultado(calcular(num1, evt.target.value, operacion))
            }}
        />
        <label>Resultado: {resultado}</label>
        <button type="button" onClick={resetear}>Reset</button>
        </>
    )
}