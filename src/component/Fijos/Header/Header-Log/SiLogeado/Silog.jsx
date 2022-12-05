import React from 'react'
import { parceJASON } from '../../../../../LogicaJS/parceJASON';
import "./Silog.css";
const Silog = ({Autenticacion}) => {
  const Array = JSON.parse(localStorage.getItem('usuario'))
  return (
    <>
      <div className='Bloque_Perfil' >
        <div className='Perfil_Imagen'> <p className='Imagen_Nombre'> {Array.nombre[0].toUpperCase()}{Array.apellido[0].toUpperCase()}  </p> </div>
        <button className='Perfil_Boton' onClick={() => {Autenticacion(); localStorage.setItem("jwt", '')}}>Cerrar sesion</button>
      </div>
    </>
  )
}

export default Silog