import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Header from "./components/nav/Header.jsx";
import Galeria from "./pages/Galeria.jsx";
import Footer from "./components/footer/Footer.jsx";
import Tarifas from "./pages/Tarifas.jsx";
import Instalaciones from "./pages/Instalaciones.jsx";
import Contacto from "./pages/Contacto.jsx";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tarifas" element={<Tarifas />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/instalaciones" element={<Instalaciones />} />
          <Route path="/contacto" element={<Contacto />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;