<<<<<<< HEAD
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
=======
// import { useState } from "react"
export function SearchBox({value, onInputChange}){

    // setName(evt.target.value)
    return (
        <>
        <label>{value}</label>
        <input id="searchBox" value={value} onChange={(evt)=> 
            onInputChange(evt.target.value) }></input>
        </>
    )
}
>>>>>>> 463659425ad945b9ac9dd4aa99349a0464c4b1c4
