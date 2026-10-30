export function SearchProduct({ textoBusqueda, setTextoBusqueda }) {
  return (
    <input
      type="text"
      placeholder="Buscar producto..."
      value={textoBusqueda}
      onChange={(e) => setTextoBusqueda(e.target.value)}
    />
  );
}