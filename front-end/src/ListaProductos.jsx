import { ProductoItem } from './ProductoItem'

export function ListaProductos({ productos }) {
  return (
    <div>
      {productos.map((producto) => (
        <ProductoItem
          key={producto.id}
          producto={producto}
        />
      ))}
    </div>
  )
}