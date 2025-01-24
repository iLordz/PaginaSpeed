import React from 'react'
import '../components/ubicaciones.css';
import Angeles from '../assets/angeles.jpg';
import Aviacion from '../assets/aviacion.jpg';
import Calle1 from '../assets/calle11.jpg';
import Carranza from '../assets/carranza.jpg';
import Checoslovaquia from '../assets/checoslovaquia.jpg';
import Oaxaca from '../assets/oaxaca.jpg';
import Pedragal from '../assets/pedregal.jpg';
import Valle from '../assets/valle.jpg';
import Villadelrey from '../assets/villadelrey.jpg';

export const Ubicaciones = () => {
  return (
    <section className='contenedorUbicaciones'>
            <div className='cartas__textos'>
                <h2>¿Donde nos ubicamos?</h2>
            </div>

            <div className='sucursales'>
                <div className='sucursales__fotos'>
                    <img src={Carranza} alt='#'></img>
                    <h1>Cedis Frutería Nena's</h1>
                    <p>Ave. Río Santacruz S/N,</p><p>Fracc. Hacienda Bilbao</p>
                </div>
            </div>

            <div className='sucursales1'>
                <div className='sucursales__fotos'>
                    <img src={Carranza} alt='#'></img>
                    <h1>Sucursal Carranza</h1>
                    <p>Ave.J #1599,</p><p>Col.Venustiano Carranza</p>
                </div>
                <div className='sucursales__fotos'>
                   <img src={Valle} alt='#'></img>
                    <h1>Sucursal Valle de Puebla</h1>
                    <p>Calz. Río San Ángel #201</p><p>Col. Valle de Puebla</p>
                </div>
                <div className='sucursales__fotos'>
                    <img src={Angeles} alt='#'></img>
                    <h1>Sucursal Ángeles de Puebla</h1>
                    <p>Claz. Heroica de Puebla #699,</p><p>Fracc. Ángeles de Puebla</p>
                </div>
            </div>

           <div className='sucursales2'>
                <div className='sucursales__fotos'>
                    <img src={Carranza} alt='#'></img>
                    <h1>Sucursal Carranza</h1>
                    <p>Ave.J #1599,</p><p>Col.Venustiano Carranza</p>
                </div>
                <div className='sucursales__fotos'>
                    <img src={Valle} alt='#'></img>
                    <h1>Sucursal Valle de Puebla</h1>
                    <p>Calz. Río San Ángel #201</p><p>Col. Valle de Puebla</p>
                </div>
                <div className='sucursales__fotos'>
                    <img src={Angeles} alt='#'></img>
                    <h1>Sucursal Aviación</h1>
                    <p>Claz. Cuauhtémoc #1375</p><p>Fracc. Vista Hermosa</p>
                 </div>
            </div>


            <div className='sucursales2'>
                <div className='sucursales__fotos'>
                    <img src={Pedragal} alt='#'></img>
                    <h1>Sucursal Pedregal</h1>
                    <p>Claz. Rosa del Desierto #4860,</p><p>Col. Valle del Pedregal</p>
                </div>
                <div className='sucursales__fotos'>
                    <img src={Villadelrey} alt='#'></img>
                    <h1>Sucursal Villas del Rey</h1>
                    <p>Calzada de los monarcas y calle primera,</p><p>Col. Villas del Rey</p>
                </div>
                <div className='sucursales__fotos'>
                    <img src={Aviacion} alt='#'></img>
                    <h1>Sucursal Aviación</h1>
                    <p>Claz. Cuauhtémoc #1375</p><p>Fracc. Vista Hermosa</p>
                </div>
             </div>
            <div className='sucursales3'>
                <div className='sucursales__fotos'>
                    <img src={Oaxaca} alt='#'></img>
                    <h1>Sucursal Oaxaca</h1>
                    <p>Ave. Oaxaca y Chilpancingo #501,</p><p>Col. Pueblo Nuevo</p>
                </div>
                <div className='sucursales__fotos'>
                    <img src={Calle1} alt='#'></img>
                    <h1>Sucursal Calle 11</h1>
                    <p>Ave. Michoacan #1939</p><p>Col. Orizaba</p>
                </div>
                <div className='sucursales__fotos'>
                    <img src={Checoslovaquia} alt='#'></img>
                    <h1>Sucursal Checoslovaquia</h1>
                    <p>Ave. Checoslovaquia</p><p>y Luis Echeverría</p>
                </div>
            </div>
        </section>
  )
}
