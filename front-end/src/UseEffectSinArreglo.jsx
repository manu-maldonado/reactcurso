export function UseEffectSinArreglo() {
  const [contador, setContador] = useState(0);      

  useEffect(() => {
    console.log("Se ejecuta el useEffect");
  }, [contador]);

    return (
         <>
         <p>Contador: {contador}</p>
         <button onClick={() => setContador(contador + 1)}>Incrementar</button>
          
        </>

    )

}
