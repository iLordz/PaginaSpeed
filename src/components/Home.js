/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

/*Banner, Carousel*/
import Nenas2 from '../assets/Speed.png';
import Prueba4 from '../assets/Promocion1.jpg';
import Prueba5 from '../assets/Promocion2.jpg';
import Prueba6 from '../assets/Promocion3.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './banner.css';

/*Sucursales*/
import '../components/sucursales.css';
import Oaxaca from '../assets/oaxaca.jpg';

/*Misión, Visión y Valores */
import '../components/cards.css';
import Vision from '../assets/vision.png';
import Mision from '../assets/mision.png';
import Valor from '../assets/valor.png';


export const Home = () => {
    return (
        <><><>
            <section className='contenedor'>
                <div className='row'>
                    <div className='imgLogo'>
                        <img src={Nenas2} ></img>
                    </div>
                    <div className='contentWrapper'>
                        <div className='content'>
                            <h2>Nuestra Historia</h2>
                            <p>Nenas Fruterías es una empresa 100% cachanilla y 100% familiar. Fue fundada en el año 1994 por el Sr. Raúl Medina y la Sra. Agustina Morales en Mexicali, Baja California, México. En realidad, esta historia da inicio en el año de 1985 cuando el señor Raúl Medina, junto a su carreta y su caballo, empezó a vender frutas y verduras en los alrededores de las colonias Pueblo Nuevo, Baja California y Loma Lindas. Como buen emprendedor, al paso de los años su caballo pasó a ser un pick up Chevrolet año 64 y fue así como amplió su venta a Villa Verde y Bugambilias. Como dice el dicho detrás de un buen hombre hay una gran mujer y el siempre fue de la mano de su esposa. </p>
                            <p>Gracias al gran equipo de trabajo que formaron en el año de 1991 se establecieron en un sobre ruedas.</p>
                        </div>
                    </div>
                </div>
                <div className='container bg-transparent  pb-3'>
                    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={Prueba4} className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item" data-bs-interval="10000">
                                <img src={Prueba5} className="d-block w-100" alt="..."></img>
                            </div>
                            <div className="carousel-item">
                                <img src={Prueba6} className="d-block w-100" alt="..."></img>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className='contenedor2'>
                <div className='cartas__textos'>
                    <h2>¿Dónde nos ubicamos?</h2>
                </div>
                <div className='sucursales3'>
                    <div className='sucursales__fotos'>
                        <img src={Oaxaca} alt='#'></img>
                        <h1>Sucursal Oaxaca</h1>
                        <p>Av. Oaxaca y Chilpancingo #501,</p><p>Col. Pueblo Nuevo</p>
                    </div>
                </div>
            </section></>

            <section className='contenedor4'>
                <div className='cartas__textos1'>
                    <h2>Misión, Visión y Valores para Sucursal Speed</h2>
                </div>
                <div className="container">
                    <div className="card2">
                        <div className="left-column background1-left-column">
                            <h6>Speed</h6>
                            <img src={Mision} className='mision'></img>
                            <i className="fa fa-github"></i>
                        </div>
                        <div className="right-column2">
                            <div>
                                <h4></h4>
                                <h6></h6>
                            </div>
                            <h2>Misión</h2>
                            <p>Atender las necesidades de la canasta super básica de las familias de la localidad, a través de productos de una tienda de conveniencia completa, con los precios más bajos, con servicio rápido y un buen trato a la clientela.</p>
                        </div>
                    </div>
                    <div className="card2">
                        <div className="left-column background2-left-column">
                            <h6>Speed</h6>
                            <img src={Vision} className='vision'></img>
                            <i className="fa fa-android" aria-hidden="true"></i>
                        </div>
                        <div className="right-column2">
                            <div>
                                <h4></h4>
                                <h6></h6>
                            </div>
                            <h2>Visión</h2>
                            <p>Llegar a ser la "Tienda de convivencia" preferida de las familias en las localidades donde operamos, buscando en el tiempo tener una presencia regional en el Noroeste de México. En la parte laboral, que las personas nos vean como la primera opción para trabajar de manera permanente. </p>
                        </div>
                    </div>

                </div>

                <div className='container'>
                    <div className="card2">
                        <div className="left-column background3-left-column">
                            <h6>Speed</h6>
                            <img src={Valor} className='valores'></img>
                            <i className="fa fa-android" aria-hidden="true"></i>
                        </div>
                        <div className="right-column2">
                            <div>
                                <h4></h4>
                                <h6></h6>
                            </div>
                            <h2>Valores</h2>
                            <p><b>Nuestros valores</b> nos distinguen ya que no se limitan a nuestros clientes y colaboradores, si no a nuestro entorno social.</p>
                            <li><b>Lealtad</b> ante nuestros trabajadores, clientes y proveedores.</li>
                            <li><b>Congruencia</b> entre lo que decimos y hacemos.</li>
                            <li>Búsqueda permanente del <b>buen ambiente laboral</b> y el arraigo de nuestros trabajadores</li>
                            <li><b>Enfoque</b> a la obtención de <b>resultados</b> positivos cada vez más satisfactorios para el empleado y para los accionistas de la empresa.</li>
                            <li><b>Disciplina</b> de todo el personal para el cumplimiento de las políticas establecidas y para una superación permanente.</li>
                            <li><b>Orientación al cliente</b> para dar el servicio que requiere y el trato que le corresponde.</li>
                            <li> <b>Trabajo en equipo</b> de las personas que laboran en la empresa, para lograr los objetivos fijados.</li>
                        </div>
                    </div>
                </div>
            </section></>
        </>
    )
}
