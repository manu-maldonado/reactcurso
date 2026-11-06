import { useState } from "react"
import { allProducts } from "../productosMock.js"
import { UseEffectSinArreglo } from "./useEffectSinArreglo.jsx"
import { UseEffectArregloVacio } from "./useEffectArregloVacio.jsx"
import { UseEffectVariables } from "./useEffectVariables.jsx"
import { UseEffectCleanUp } from "./UseEffectCleanUp.jsx"
import { SearchBox } from "./SearchBox.jsx"
import { GetAllProducts } from "./ProductList.jsx"
import { Calculadora } from "./calculadora.jsx"
import { Catalogo } from "./Catalogo.jsx"

export function MisComponentes() {
  const [name, setName] = useState("")

  return (
    <section>
      <h2>Mis componentes</h2>
      <UseEffectSinArreglo />
      <UseEffectArregloVacio />
      <UseEffectVariables />
      <UseEffectCleanUp />
      <SearchBox name={name} onNameChange={setName} />
      <GetAllProducts products={allProducts} name={name} />
      <Calculadora />
      <Catalogo products={allProducts} />
    </section>
  )
}
