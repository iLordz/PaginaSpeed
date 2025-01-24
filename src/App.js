import React from 'react'
import { Navbar } from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';
import { Formulario } from './components/Formulario';
import { Final } from './components/Final';
import { Ubicaciones } from './components/Ubicaciones';
import { Historia } from './components/Historia';
import { Productos } from './components/Productos';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/ubicaciones" element={<Ubicaciones />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Final />
    </div>
  )
}
