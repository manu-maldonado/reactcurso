export function SearchBox({ name, onNameChange }) {
  return (
    <input
      id="searchProduct"
      value={name}
      onChange={(evt) => onNameChange(evt.target.value)}
    />
  )
}