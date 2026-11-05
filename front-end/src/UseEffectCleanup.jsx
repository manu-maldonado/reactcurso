export function UseEffectCleanup() {
    const [segundos, SetSegundos] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            SetSegundos((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [])
    return (
        <p>Segundos activos en la vista renderada: {segundos}</p>
    )

}