import { use, useState } from "react"

export function Calculadora() {
    const [resultado, setResultado] = useState( 0)
    const [inputA,setInputA]= useState(0)
    const [inputB,setInputB]= useState(0)

    function operacion(a, b, operador) {
        switch (operador) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                if (a === 0 && b === 0) return "Indeterminado je";
                if (b === 0) return "No se puede dividir mano";
                return a / b;
        }
    }

    return (
        <>
            <input type="text" onClick={(e)=> setInputA(+e.target.value)} />
            <select name="operacion" id="" onChange={(evt) =>setResultado(operacion(inputA, inputB,evt.target.value))}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="text" onChange={(e)=> setInputB(+e.target.value)}  />
            <label htmlFor="">{resultado}</label>
        </>
    )
}