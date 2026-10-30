import { useState } from 'react'

export function SearchProduct({ products, onResultsChange }) {
  const [name, setName] = useState('')

  return (
    <div>
      <label htmlFor="searchProduct">Buscar producto por nombre</label>
      <input
        id="searchProduct"
        type="search"
        value={name}
        onChange={(event) => {
          const value = event.target.value
          const searchTerm = value.trim().toLowerCase()
          const matchingProducts = products.filter((product) =>
            product.nombre.toLowerCase().includes(searchTerm),
          )

          setName(value)
          onResultsChange(searchTerm ? matchingProducts : products)
        }}
      />
    </div>
  )
}

