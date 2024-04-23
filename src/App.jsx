import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import Registrar from './components/registrar/Registrar';
import Login from './components/login/Login';
import Recuperar from './components/recuperar/Recuperar';
import Faturamento from './components/faturamento/Faturamento';


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar" element={<Recuperar />} />
          <Route path="/faturamento" element={<Faturamento />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
