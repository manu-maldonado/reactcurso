import { useState } from "react"

export function Calculadora() {
  const [a, setA] = useState("")
  const [b, setB] = useState("")
  const [resultado, setResultado] = useState(null)

  function calcular(operacion) {
    if (a === "" || b === "") {
      setResultado("Escribe los dos números")
      return
    }

    const x = Number(a)
    const y = Number(b)

    if (operacion === "+") setResultado(x + y)
    if (operacion === "-") setResultado(x - y)
    if (operacion === "*") setResultado(x * y)
    if (operacion === "/") setResultado(y === 0 ? "No se puede dividir entre 0" : x / y)
  }

  function reiniciar() {
    setA("")
    setB("")
    setResultado(null)
  }

  return (
    <div>
      <h3>Calculadora</h3>
      <input
        type="number"
        placeholder="Valor 1"
        value={a}
        onChange={(evt) => setA(evt.target.value)}
      />
      <input
        type="number"
        placeholder="Valor 2"
        value={b}
        onChange={(evt) => setB(evt.target.value)}
      />

      <div>
        <button type="button" onClick={() => calcular("+")}>Sumar</button>
        <button type="button" onClick={() => calcular("-")}>Restar</button>
        <button type="button" onClick={() => calcular("*")}>Multiplicar</button>
        <button type="button" onClick={() => calcular("/")}>Dividir</button>
        <button type="button" onClick={reiniciar}>Reiniciar</button>
      </div>

      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  )
}