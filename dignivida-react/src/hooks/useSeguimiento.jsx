import { useEffect, useState } from 'react';

export function useSeguimiento(origen, destino, duracionSegundos = 10) {
  const [posicion, setPosicion] = useState(origen);
  const [progreso, setProgreso] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgreso(p => {
        if (p >= 1) {
          clearInterval(interval);
          return 1;
        }
        return p + 1 / duracionSegundos;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [duracionSegundos]);

  useEffect(() => {
    const nuevaLat = origen[0] + (destino[0] - origen[0]) * progreso;
    const nuevaLng = origen[1] + (destino[1] - origen[1]) * progreso;
    setPosicion([nuevaLat, nuevaLng]);
  }, [progreso, origen, destino]);

  return posicion;
}