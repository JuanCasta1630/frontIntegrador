import React from 'react'

export const Slider = ({Imagenes}) => {
   
   return (
      <>
      {
      Imagenes.map((imagenes, index) => {
         return(
            <li key={index}> 
               <img className='Imagen_Slider' src={imagenes.url}/>  
               <p className='Numero_Silder'> {index +1} / {Imagenes?.length} </p>
               <button className='VerModal' > <a href='#Modal' className='VerModal_Texto'> Ver más </a> </button>
            </li>
         )
       })
      }
      </>
  )
}