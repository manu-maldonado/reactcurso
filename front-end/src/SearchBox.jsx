// import { useState } from "react"

export function SearchBox({ value, onInputChange }){
    // const [name, setName] = useState("")

    //setName(evt.target.value)
    return (
        <>
        <label>{value}</label>
        <input 
        placeholder="Escribe un producto..." 
        id="searchBox"
        value={value}
        onChange={(evt)=> 
        onInputChange(evt.target.value) }>
        </input>
        </>
    )
}