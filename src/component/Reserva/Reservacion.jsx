import { useState } from 'react'
import { useEffect } from 'react'
import { Link} from 'react-router-dom'
import './Reservacion.css'
import GET from '../../LogicaJS/GET'


function Reservacion({ID}){
    const [ProductoID , setProductoID] = useState('')

   useEffect(() => {
      GET({keyword: ('productos/porId/' + ID)}).then(datosP_id => setProductoID(datosP_id))
   },[]
   )
   return(
      <>
         {ProductoID == '' ? 
         <>
            <h2>Actualizando datos.....</h2>
            
         </>
         :
         <div>
            <div className='header_productos'>
                <div className='reservacion_top'>
                  <h1 className='titulo_auto'> {ProductoID.categoria.titulo}: {ProductoID.titulo} </h1>
                  <Link to='/Productos'> <img src='https://cdn-icons-png.flaticon.com/128/189/189254.png' alt= "regresar" className='back_button'/> </Link>
                </div>
            </div>
            <div className ='info_reserva'>
                <h2 className='titulo_info'>Detalles de Reserva</h2>
                <div className='imagen_reserva'>
                  <div className="grid-item-2"> 
                     <img  className='imagen1' src={ProductoID.imagenList[0].url}/> 
                    </div>
                </div>
                <div className='extra_reserva'>
                    <p className='titulo_auto2'> {ProductoID.categoria.titulo}: {ProductoID.titulo} </p>
                    
                    <p> <strong2>Pais: </strong2> {ProductoID.ciudad.pais}  <strong2>Provincia: </strong2> {ProductoID.ciudad.provincia} <strong2>Ciudad: </strong2> {ProductoID.ciudad.nombre} </p>
                </div>
                <button className='Boton_Boton'> Confirmar Reservacion </button>
            </div>
        </div>
        }
    </>
    )
}

export default Reservacion