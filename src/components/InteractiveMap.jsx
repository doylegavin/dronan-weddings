import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fixes issues with missing marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const locations = [
  {
    name: 'Cliffs of Moher',
    lat: 52.9715,
    lng: -9.4265,
    description: 'A beautiful coastal location perfect for elopements.',
    image: 'link-to-image-of-cliffs.jpg',
  },
  {
    name: 'Dingle Peninsula',
    lat: 52.1414,
    lng: -10.2689,
    description: 'Scenic views ideal for intimate wedding ceremonies.',
    image: 'link-to-image-of-dingle.jpg',
  },
];


const InteractiveMap = ({ locations }) => {
  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
    <MapContainer center={[53.2707, -9.0568]} zoom={7} style={{ height: '75vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
      />
      {locations && locations.length > 0 && locations.map((location, index) => (
  location.lat && location.lng && ( // Ensure lat/lng are defined
    <Marker key={index} position={[location.lat, location.lng]}>
      <Popup>
        <div>
          <h3 className='text-2xl font-semibold m-2'>{location.name}</h3>
          <p>{location.description}</p>
          <img src={location.image} alt={location.name} className='rounded-lg' />
        </div>
      </Popup>
    </Marker>
  )
))}

    </MapContainer>
    </div>
  );
};

export default InteractiveMap;
