import { useState } from "react";

export function Calculadora() {
    const [num1, darNum1] = useState("");
    const [num2, darNum2] = useState("");
    const [resultado, calculaResultado] = useState(0);

    const calcular = (tipoOperacionAritmetica)=>{
        const a =Number(num1);
        const b =Number(num2);
        switch(tipoOperacionAritmetica){
            case "+":
                calculaResultado(a + b);
                break;
            case "-":
                calculaResultado(a - b);
                break;
            case "*":
                calculaResultado(a * b);
                break;
            case "/":
                calculaResultado(a / b);
                break;
            case "%":
                calculaResultado(a % b);
                break;
            default:
                break;
        }
    }
    return (
        <div>
            <h4>Mi versión de calculadora</h4>
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
            <br></br>
            
             <button onClick={()=>calcular("+")}>
                +
            </button>
            <button onClick={()=>calcular("-")}>
                -
            </button>
            <button onClick={()=>calcular("*")}>
                *
            </button>
            <button onClick={()=>calcular("/")}>
                /
            </button>
            <button onClick={()=>calcular("%")}>
                %
            </button>

            <h2>Resultado: {resultado}</h2>
        </div>
    )
}

