import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import Header from './component/Fijos/header';
import Footer from './component/Fijos/footer';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Registro from './component/Registro/Registro';
import { Routes, Route  } from 'react-router-dom';


function App() {
  const [dropdown, setDropdown]=useState(false)

  const abrirCerrarDropdown=()=>{
    setDropdown(!dropdown);
  }

  return (
    <div className="App">
      <Header/>
      <main>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size='lg'>
          <DropdownToggle caret className='Dropdown1'>
            Elegir una Ciudad
          </DropdownToggle>

          <DropdownMenu>
            <DropdownItem>Buenos Aires</DropdownItem>
            <DropdownItem>Mar de Plata</DropdownItem>
            <DropdownItem>Ciudad de Córdoba</DropdownItem>
            <DropdownItem>Mendoza</DropdownItem>
          </DropdownMenu>

        </Dropdown>
        <Routes>
          <Route path='/' element = { <Home/> } />
          <Route path='/login' element = { <Login/> } />
          <Route path='/Registro' element = { <Registro/> } />
        </Routes> 
      </main>
      <Footer/>
    </div> 
  );
}

export default App;
