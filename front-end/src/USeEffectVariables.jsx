export function UseEffectVariables() {
    const [busqueda, setBusqueda] = useState(0);


    UseEffect(() => {
        if(busqueda.trim() !== "") {
            console.log("Buscando API de productos que coincidan con: " + busqueda);
        }
    }, [busqueda]);

    return (
        <div>  
        <input type="text" placeholder="Escriba su termino de busqueda" value={busqueda} onChange={(evt) => setBusqueda(evt.target.value)} />
        </div>
    )
}