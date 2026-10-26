export function SearchBox({ value, onInputChange }) {
  return (
    <>
      <label>Buscar Producto: </label>
      <input
        id="searchBox"
        type="text"
        value={value}
        onChange={(evt) => onInputChange(evt.target.value)}
      ></input>
    </>
  );
}
