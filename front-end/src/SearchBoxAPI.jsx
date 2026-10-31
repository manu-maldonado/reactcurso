import { useState } from "react"
import { searchService } from "./searchService";

export function SearchBoxAPI(){
    const [search,setSearch] = useState()
    const response =  searchService.searchTerms()

    return (
        <>
        <label htmlFor="searchBoxAPI">
        Buscar:
        </label>
        <input id="searchBoxAPI" value={search} onChange={(evt)=> setSearch(evt.target.value)}></input> 
      
        {
            response ? response.map(x=> (<p>{x.title}</p>)) :""
        }
        </>
    );
}