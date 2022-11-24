import './App.css';
import Header from './component/Fijos/Header/header';
import Footer from './component/Fijos/footer';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Registro from './component/Registro/Registro';
import Productos from './component/Producto/Productos';
import Reservacion from './component/Reserva/Reservacion';
import { Routes, Route  } from 'react-router-dom';
import { useEffect, useState } from 'react';


function App() {
  const [logeado, setLo] = useState(false)
  const Autenticacion = () =>  {
    setLo(!logeado)
  };
  const [ID, setID] = useState(1000)
  const verMas = (x) => {
    setID(x)
    console.log("Seteando id  " + ID)
  }
  
  
  return (
    <>
      <Header logeado={logeado} Autenticacion={Autenticacion}/>
      <main>
        <Routes>
          <Route path='/' element = { <Home verMas= { verMas }/> } />
          <Route path='/login' element = { <Login Autenticacion={Autenticacion}/> } />
          <Route path='/Registro' element = { <Registro Autenticacion={Autenticacion} /> } />
          <Route path='/Productos' element = { <Productos ID={ID}/> } />
          <Route path='/Reserva' element = { <Reservacion ID={ID}/> } />
        </Routes> 
      </main>
      <Footer/>
    </> 
  );
}

export default App;
