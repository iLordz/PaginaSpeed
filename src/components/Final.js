/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../components/contacto.css';
import { Link } from 'react-router-dom';

export const Final = () => {
    return (
        <><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <div className='footer'>
            <div className='container1'>
                <div className='row1'>
                    <div className='footer-col'>
                        <h4>Acerca</h4>
                        <Link className='link' to={'/Historia'}><li>Historia</li></Link>
                        {/* <Link className='link' to={'/Ubicaciones'}><li>Ubicaciones</li></Link> */}
                    </div>
                    <div className='footer-col'>
                        <h4>Servicios</h4>
                            <Link className='link' to={'/Productos'}><li>Nuestros productos</li></Link>
                    </div>
                    <div className='footer-col'>
                        <h4>Contacto</h4>
                        <p>(686) 553-1228</p>
                        <Link className='link' to={'/Formulario'}><li>Ver mas</li></Link>
                    </div>
                    {/* <div className='footer-col'>
                        <h4>Siguenos</h4>
                    <div className='social-link'>
                        <a href='#'><i className="fab fa-facebook"></i></a>
                        <a href='#'><i className="fab fa-instagram"></i></a>
                        <a href='#'><i className="fab fa-whatsapp"></i></a>
                        <a href='#'><i className="fab fa-twitter"></i></a>
                    </div>
                    </div> */}
                </div>
            </div>
            
        </div>
        <div className="footer1">
            <p>Copyright &copy; 2023. David Gaspar Romero | Todos los derechos reservados</p>
        </div></>
    )
}
