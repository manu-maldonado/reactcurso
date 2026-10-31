import { useEffect, useState } from 'react';

export function UseEffectVariables() {
  //hook para useState de busquedas
  const [busqueda, setBusqueda] = useState('');

  useEffect(() => {
    // si la busqueda encuentra algo vacio que regrese
    if (busqueda.trim() == '') return;

    console.log('Buscando API que coincidan con la busqueda');
  }, [busqueda]);

  return (
    <div>
      <input
        type="text"
        placeholder="escriba su busqueda"
        value={busqueda}
        //se ejecuta cada que lancemos busqueda
        onChange={(evt) => setBusqueda(evt.target.value)}
      />
    </div>
  );
}
