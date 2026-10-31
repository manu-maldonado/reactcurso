import { useState } from 'react';
import { searchService } from './searchService';

export function SearchTermBox({}) {
  const [searchService, setSearch] = useState();
  const response = searchService.searchTerms(value);

  return (
    <>
      <label>{value}</label>
      <input
        id="searchBox"
        value={value}
        onChange={(evt) => oninput(evt.target.value)}
      ></input>
      {response
        ? response.map((x) => {
            <p>{x.title}</p>;
          })
        : ''}
    </>
  );
}
