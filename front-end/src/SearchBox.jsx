// import { useState } from "react"
export function SearchBox({ value, onInputChange }) {
    return (
        <>
            <label>{value}</label>
            <input id="searchBox" value={value} onChange={(evt) =>
                onInputChange(evt.target.value)} />
        </>
    )
}