import React from 'react'
import { useState } from 'react'

const Modal = ({Imagenes}) => {
   const [nImagen, setNImagen] = useState(0)
   const CambiarImagenMas = () => {
      if((nImagen) >= (Imagenes.length - 1)){
         setNImagen(Imagenes.length - 1)
         
      }else{
         setNImagen(nImagen + 1)
      }
   }
   const CambiarImagenMenos = () => {
      if((nImagen) <= 0){
         setNImagen(0)
      }
      else{
         setNImagen(nImagen - 1)
      }
   }
   
   return (
      <>
         <div className='Modal_Imagenes' >
            <h3 className='Modal_Text'> Imagen  {nImagen + 1} / {Imagenes?.length}  </h3>
            <img className='Imagenes_Izq' onClick={ () => { CambiarImagenMenos() } } src='https://cdn-icons-png.flaticon.com/512/271/271220.png' alt='Izquierda' />
            <img className='Imagenes'   src={Imagenes[nImagen].url} alt={Imagenes[nImagen].titulo}/>               
            <img className='Imagenes_Der' onClick={() => { CambiarImagenMas() } } src='https://cdn-icons-png.flaticon.com/512/271/271228.png' alt='Derecha' />
            <p className="Modal_Salir"> <a href='#' className='Salir_Texto'> Salir </a> </p> 
         </div>
      </>
   )
}

export default Modal