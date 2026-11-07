import { SearchService } from "./SearchService";

export function SearchBox({ value, onInputChange }) {
  const response = SearchService.searchTerms(value);
  return (
    <>
      <label>{value}</label>
      <input
        id="searchBox"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
      ></input>
    </>
  );
}
