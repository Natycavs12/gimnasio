// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import Navigation from './components/Navigation';
import MenuPrincipal from './components/menuPrincipal';
import ClasesList from './components/ClasesList';
import SociosList from './components/SociosList';
import CreateClase from './components/createClase';
import CreateSocio from './components/createSocio';
import GestionGeneral from './components/gestionGeneral';

function App() {
  return (

    // <div>
    //   <Navigation />
    //   HOLA TONOTOS
    // </div>  

      <Router>
        <Navigation />
        {/* <div>HOLA TONOTOS</div> */}
        <Routes>
          <Route path="/" element={<MenuPrincipal />} />
          <Route path="/clases" element={<ClasesList />} />
          <Route path="/crearClase" element={<CreateClase />} />
          <Route path="/edit/:id" element={<CreateClase />} />
          <Route path="/socios" element={<SociosList />} />
          <Route path="/crearSocio" element={<CreateSocio />} />
          <Route path="/gestionar" element={<GestionGeneral />} />
        </Routes>
      </Router>
  );

  // const rootElement = document.getElementById("root");
  // render(

}

export default App;
