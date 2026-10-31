import { useEffect, useState } from 'react';

export function UseEffectCleanUp() {
  //hook
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    //Inicializar Temporizador
    const intervalo = setInterval(() => {
      setSegundos((prev) => prev + 1);
    }, 1000); // cada 1000 ms

    return () => {
      console.log('Limpiando intervalo para evitar fugas de memoria...');
      clearInterval(intervalo);
    };
  }, []);

  return <p>Segundos activos en la vista rendereada: {segundos}</p>;
}
