/*import { useState } from "react"

export function SearchProduct ({products}){
   const [name, setName] = useState("")

    
    return (
        <>
        <label>{name}</label>
        <input id="searchProduct" onChange={(evt)=> setName(evt.target.value)}> </input>
        </>
    )
}*/

import { useState } from "react"
import { GetAllProducts } from "./ProductList"

export function SearchProduct({ products }) {
  const [name, setName] = useState("")
  const [orden, setOrden] = useState("id-asc")

  const productosFiltrados = products.filter((producto) =>
    producto.nombre.toLowerCase().includes(name.toLowerCase())
  )

  const [campo, direccion] = orden.split("-")

  const productosOrdenados = [...productosFiltrados].sort((a, b) =>
    direccion === "asc" ? a[campo] - b[campo] : b[campo] - a[campo]
  )

  return (
    <>
      <label>{name}</label>
      <input id="searchProduct" onChange={(evt) => setName(evt.target.value)} />

      <select value={orden} onChange={(evt) => setOrden(evt.target.value)}>
        <option value="id-asc">ID A</option>
        <option value="id-desc">ID D</option>
        <option value="precio-asc">Precio A</option>
        <option value="precio-desc">Precio D</option>
      </select>

      <GetAllProducts products={productosOrdenados} />
    </>
  )
}