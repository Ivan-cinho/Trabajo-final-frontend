import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './componentes/layout/Nav';
import Footer from './componentes/layout/Footer';

import Home from './paginas/Home';
import Musicayredes from './paginas/Musicayredes';
import Contacto from './paginas/Contacto';
import Agenda from './paginas/Agenda';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="agenda" element={<Agenda/>}/>
        <Route path="musica y redes" element={<Musicayredes/>}/>
        <Route path="contacto" element={<Contacto/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
