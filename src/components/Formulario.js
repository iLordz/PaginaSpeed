/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-escape */
/* eslint-disable no-undef */
import '../components/formulario.css';
import pin from '../assets/map-pin.svg';
import tel from '../assets/phone.svg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from "leaflet";
import 'leaflet/dist/leaflet.css';
import '../components/mapa.css';
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-icon.png";
// import axios frmzz

export const Formulario = () => {
    let iconUbicacion = new L.icon({
        iconUrl: icon,
        iconShadow: iconShadow,
        iconSize: [40, 55], // size of the icon
        iconAnchor: [22, 94],
        shadowAnchor: [22, 94],
        popupAnchor: [-3, -76]
    })

    return (
        <>
            <section className='formulario'>
                <div className='row'>
                    <div className='contentWrapper1'>
                        <div className='content'>
                            <h2>Contacto</h2>
                            <p>Si deseas consultar mayor información sobre nuestros servicios o tienes alguna duda al respecto, no dudes en solicitar una consultoría gratuita y uno de nuestros asesores te contactará a la brevedad.</p>
                            <img src={tel} className='pin'></img>
                            <p>Contáctanos por teléfono <br/> <b>(686) 553-1228</b></p>
                            <img src={pin} className='pin'></img>
                            <p>Nos ubicamos en Calle Oaxaca 501, Pueblo Nuevo, 21120 Mexicali, B.C.</p>

                        </div>
                    </div>
                    <div className='mapa'>
                        <MapContainer center={[32.65378200036553, -115.50037797576958]} zoom={17} scrollWheelZoom={false} className='mapa'>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={[32.65378200036553, -115.50037797576958]} icon={iconUbicacion}>
                                <Popup>
                                    Fruteria Nena Oaxaca
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </div>
            </section>
        </>
    )
}