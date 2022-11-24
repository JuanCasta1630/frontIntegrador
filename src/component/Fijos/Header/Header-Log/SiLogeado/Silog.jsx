import React from 'react'
import "./Silog.css";
const Silog = ({Autenticacion}) => {
  return (
    <>
    <div className='Bloque_Perfil' >
      <div className='Perfil_Imagen'> <p className='Imagen_Nombre'> LD </p> </div>
      <button className='Perfil_Boton' onClick={Autenticacion}>Cerrar sesion</button>
    </div>
    </>
  )
}

export default Silog