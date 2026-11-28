import { useState } from "react"
import { GetAllProducts } from "./ProductList"
import { allProducts } from "./productosMock"

export function SearchBox({value,onInputChange}){
    //const[name,setName]=useState("")
    //const filterProducts = products.filter((product)=> product.nombre.toLowerCase().includes(name.toLowerCase()));
//     let product = allProducts.find((x)=> x.nombre.include("clado"))
// console.log(product)
   
    return (
        <>
        <label htmlFor="searchBox">
        Buscar producto:
        </label>
        <input id="searchBox" value={value} onChange={(evt)=> onInputChange(evt.target.value)}></input> 
        {/* <GetAllProducts products={sorterProducts} 
        ascending={ascending} 
        setAscending={setAscending} /> */}
        </>
    );
}