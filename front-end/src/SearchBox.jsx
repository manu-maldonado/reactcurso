export function SearchBox({ value, onInputChange }) {
  // setName(evt.target.value)
  return (
    <>
      <label>{value}</label>
      <input
        id="searchBox"
        value={value}
        onChange={(evt) => onInputChange(evt.target.value)}
      ></input>
    </>
  );
}
