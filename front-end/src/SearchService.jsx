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
const API_URL =  "https://scraper.iguzman.com.mx/search" //import.meta.env.VITE_API_URL
export const searchService = {
    async searchTerms(){
        try{
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': 'diplomado-unam-26'
                },
                body: JSON.stringify({'query': "Hola mundo"})
            })
            
            if(!response.ok){
                throw new Error(`Error en la llamada al request ${API_URL}`)
            }
            const resultado = response.json();
            return {data: resultado.data, total: resultado.data.length}
        }catch(error){
            console.log("Error al procesar el search", error)
            throw error
        }
    }
}