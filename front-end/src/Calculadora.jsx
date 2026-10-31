import { useState } from "react"

export function Calculadora(){
    const [resultado, setResultado] = useState(0)
    // const [suma, setSuma] = useState()
    // const [resta, setResta] = useState()
    const [inputA, setInputA] = useState(0)
    const [inputB, setInputB] = useState(0)

    function operacionAritmetica(a, b, operador){
        switch(operador){
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
                if (a === 0 && b === 0)return "Indeterminado vato"; 
                if (b === 0)return "No se puede dividir"; 
                    return a / b;
        }
    }
    return (
        <>
        <input type="text" onChange={(e) => setInputA(+e.target.value)}/>
        <select name="" id="" onChange={(evt) => setResultado(operacionAritmetica(inputA, inputB, evt.target.value))}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="text" onChange={(e) => setInputB(+e.target.value)} />
        <label htmlFor="">{resultado}</label>
        </>
    )
}