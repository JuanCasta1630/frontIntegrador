import './App.css';
import Header from './component/Fijos/Header/header';
import Footer from './component/Fijos/footer';
import Home from './component/Home/Home'
import Tienda from './component/Tienda/Tienda'; 
import Login from './component/Login/Login';
import Registro from './component/Registro/Registro';
import Productos from './component/Producto/Productos'
import Reservacion from './component/Reserva/Reservacion';
import { Routes, Route  } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {SelectedDatesContext } from './component/Producto/Calendarios/hooks/UseContext'
import data from './component/Producto/Calendarios/db.json'

function App() {
  const [logeado, setLo] = useState(false)
  const Autenticacion = () =>  {
    setLo(!logeado)
  };
  const [selectedDates, setSelectedDates] = useState(null)
  const [excludeDateIntervals, setExcludeDateIntervals] = useState(data);
  const [ID, setID] = useState('')
  const verMas = (x) => {
    setID(x)
    console.log("Seteando id  " + ID)
  }
  
  
  return (

    <>
     <SelectedDatesContext.Provider value={{ selectedDates, setSelectedDates, excludeDateIntervals, setExcludeDateIntervals }} >
      <Header logeado={logeado} Autenticacion={Autenticacion}/>
      <main>
        <Routes>
          <Route path='/' element = { < Home /> } />
          <Route path='/Tienda' element = { <Tienda verMas= { verMas }/> } />
          <Route path='/login' element = { <Login Autenticacion={Autenticacion}/> } />
          <Route path='/Registro' element = { <Registro Autenticacion={Autenticacion} /> } />
          <Route path={`/Productos/:id`} element = { <Productos /> } />
          <Route path={`/Reserva/:id`} element = { <Reservacion/> } />
        </Routes> 
      </main>
      <Footer/>
     </SelectedDatesContext.Provider>
    </> 
  );
}

export default App;
