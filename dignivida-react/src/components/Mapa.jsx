import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useSeguimiento } from '../hooks/useSeguimiento';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
});

const autoIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/128/3097/3097144.png', // o una URL externa como "https://cdn-icons-png.flaticon.com/512/743/743007.png"
  iconSize: [40, 40],    // tamaño del ícono
  iconAnchor: [20, 20],  // punto del ícono que se posiciona en la coordenada
  popupAnchor: [0, -20], // punto donde aparece el popup
});


function Mapa({ origen, destino }) {
  const posicionAuto = useSeguimiento(origen, destino, 50); // 🚗 hook que mueve el auto en 10 segundos
    

  return (
    <MapContainer center={origen} zoom={14} style={{ height: '400px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <Marker position={origen}>
        <Popup>Origen</Popup>
      </Marker>

      <Marker position={destino}>
        <Popup>Destino</Popup>
      </Marker>

      <Marker  position={posicionAuto} icon={autoIcon}>
        <Popup>🚗 Voluntario en camino</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Mapa;