export function SearchBox({value, onInputChange}){
  //const 
  const response = searchService.searchTerms(value);
    // setName(evt.target.value)
    return (
        <>
        <label>{value}</label>
        <input id="searchBox" value={value} onChange={(evt)=> 
            onInputChange(evt.target.value) }></input>
        </>
    )
}