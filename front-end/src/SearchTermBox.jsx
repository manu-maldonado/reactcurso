import { useState } from "react"
import { searchService } from "./SearchService"

export function async SearchTermBox (){
        const [search, setSearch] = useState()
        const response =  await searchService.searchTerms();
    


  return (<>
        <label>{search}</label>
        {/* <input id="searchBox" value={search} onInput={(evt)=>
            setSearch(evt.target.value) }></input> */}

        { response ? response.map(x=> (<p> {x.title}</p>)) : ''}
        </>)
}