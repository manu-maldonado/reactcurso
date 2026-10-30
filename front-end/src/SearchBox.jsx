//import { useState } from "react";

export function SearchBox({value, onInputChange}) {
  //const [name, setName] = useState("");
  //{ setName(evt.target.value); onInputChange(evt.target.value); }
  return (
    <>
      <label htmlFor="searchBox">Buscar producto: </label>

      <input id="searchBox" value={value} onChange={(evt)=> onInputChange(evt.target.value)}>
      </input>
    </>
  )
}