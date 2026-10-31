import { searchService } from './searchService';
export function SearchBox({ value, onInputChange }) {
  // setName(evt.target.value)
  // retorna respuesta vamos a setearla a

  //   const response = searchService.searchTerms(value);

  debugger;
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
