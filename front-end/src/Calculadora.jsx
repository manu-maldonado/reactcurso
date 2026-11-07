import { useState } from "react"

<<<<<<< HEAD
export function Calculadora() {
    const [resultado, setResultado] = useState(0)
    const [inputA, setInputA] = useState(0)
    const [inputB, setInputB] = useState(0)

    function operationAritmetic(a, b, operador) {
        switch (operador) {
=======
export function Calculadora(){
    const [resultado, setResultado] = useState(0)
    // const [suma, setSuma] = useState()
    // const [rest, setResta] = useState()
    const [inputA, setInputA] = useState(0)
    const [inputB, setInputB] = useState(0)

    function operationAritmetic(a, b, operator){
        switch(operator){
>>>>>>> 463659425ad945b9ac9dd4aa99349a0464c4b1c4
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "*":
                return a * b;
            case "/":
<<<<<<< HEAD
                if (a === 0 && b === 0) return "indeterminado";
                if (b === 0) return "No se puede dividir"
                return a / b;
=======
                  if (a === 0 && b === 0) return "Indeterminado vato";
                  if (b === 0) return "No se puede dividir mano";
                     return a / b;                  
>>>>>>> 463659425ad945b9ac9dd4aa99349a0464c4b1c4
        }
    }

    return (
        <>
<<<<<<< HEAD
            <input type="text" onChange={(e) => setInputA(+e.target.value)} />
            <select name="" id="" onClick={(evt) => setResultado(operationAritmetic(inputA, inputB, evt.target.value ))}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="text" onChange={(e) => setInputB(+e.target.value)} />
            <label htmlFor="">{resultado}</label>
=======
        <input type="text" onChange={(e)=> setInputA(+e.target.value)}/>
        <select name="" id="" onClick={(evt)=> setResultado(operationAritmetic(inputA, inputB, evt.target.value))}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="text" onChange={(e)=> setInputB(+e.target.value)} />
        <label htmlFor="">{resultado}</label>
>>>>>>> 463659425ad945b9ac9dd4aa99349a0464c4b1c4
        </>
    )
}