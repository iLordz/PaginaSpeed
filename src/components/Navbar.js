/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Speed from '../assets/Speed.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container bg-transparent">
        <Link className='link' to={'/'}><img className='speed' src={Speed}></img></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? (<svg xmlns="http://www.w3.org/2000/svg" className="icon1" height="2rem" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" className="icon1" fill="none" height="2rem" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          )}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className='link' to={'/'}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className='link' to={'/Formulario'}>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}