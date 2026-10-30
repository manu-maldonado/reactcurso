export function SearchProduct({ busqueda, setBusqueda }) {

    return (
        <>
            <label>Buscar producto:</label>

            <input
                id="searchProduct"
                value={busqueda}
                onChange={(evt) => setBusqueda(evt.target.value)}
                placeholder="Escribe el nombre del producto"
            />
        </>
    )
}