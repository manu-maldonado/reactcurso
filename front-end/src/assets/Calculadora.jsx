import { useState } from "react"

export function Calculadora(){
    const [resultado, setResultado] = useState(0)
    const [a, setA] = useState(0)
    const [b, setB] = useState(0)
    function operationAritmetic(a, b, operator){
        switch(operator){
            case "+":
                return a + b
            case "-":
                return a - b
            case "*":
                return a * b
            case "/":
                if (b === 0){
                    return "No se puede dividir entre 0"
                }
                return a / b
        }
    }

    return(
        <>
        <input type="text" onChange={(e)=>setA(+e.target.value)}/>
        <select name="" id="" onChange={(evt)=> setResultado(operationAritmetic(a, b, evt.target.value))}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="text" onChange={(e)=>setB(+e.target.value)}/>
        <label htmlFor="">{resultado}</label>
        </>
    )
}