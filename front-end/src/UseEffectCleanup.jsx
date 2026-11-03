
import { useEffect, useState } from "react";

export function UseEffectCleanup() {

  //Estado para almacenar los segundos transcurridos
  const [segundos, setSegundos] = useState(0);

  //Iniciar el temporizador al montar el componente
  useEffect(() => {

    console.log("Iniciando temporizador...");

    //Ejecutar cada segundo
    const intervalo = setInterval(() => {
      setSegundos((prevSegundos) => prevSegundos + 1);
    }, 1000);

    //Función de limpieza (cleanup)
    return () => {
      console.log("Limpiando intervalo para evitar fugas de memoria");
      clearInterval(intervalo);
    };

  }, []);

  return (
    <div>
      <h2>Ejemplo: useEffect con cleanup</h2>

      <p>Segundos activos: {segundos}</p>
    </div>
  );
}
