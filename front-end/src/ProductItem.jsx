export function ProductItem({ id, producto }) {
    return (
        <p>
            {id} - {producto.nombre} ${producto.precio} ({producto.stock} en stock)
        </p>
    );
}