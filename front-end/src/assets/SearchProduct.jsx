import { useState } from "react"
import { GetAllProducts } from "../ProductList"

const sortProductsBy = (property) => (items) =>
    [...items].sort((a, b) => {
        if (property === "nombre") {
            return a.nombre.localeCompare(b.nombre)
        }
        return a.id - b.id
    })

export function SearchProduct({ products }) {
    const [name, setName] = useState("")
    const [sortBy, setSortBy] = useState("id")
    const filteredProducts = products.filter((x) => x.nombre.toLowerCase().includes(name.toLowerCase()));
    const sortedProducts = sortProductsBy(sortBy)(filteredProducts)
    return (
        <>
        <label htmlFor="searchProducto">Buscar producto</label>
        <input id="searchProducto" onChange={(evt) => setName(evt.target.value)}></input>
        <label htmlFor="ordenProductos">Ordenar por</label>
        <select id="ordenProductos" value={sortBy} onChange={(evt) => setSortBy(evt.target.value)}>
            <option value="id">ID</option>
            <option value="nombre">Nombre</option>
        </select>
        <GetAllProducts products={sortedProducts}/>
        </>
    )
}