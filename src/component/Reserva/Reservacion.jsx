import { useState, useEffect } from 'react'
import { Link, useParams} from 'react-router-dom'
import './Reservacion.css'
import GET from '../../LogicaJS/GET'
import Calendario from '../Producto/Calendarios/Calendario'


function Reservacion(){
    const [ProductoID , setProductoID] = useState('')
    const {id} = useParams(':id')
   useEffect(() => {
      GET({keyword: ('productos/porId/' + id)}).then(datosP_id => setProductoID(datosP_id))
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
                <div className='datos_reserva'>
                    <h2 className='titulo_info'>Completa tus Datos</h2>
                </div>
                <div className='imagen_reserva'>
                    <h2 className='titulo_reserva'>Detalle de la reserva</h2>
                    <div className="grid-item-2"> 
                     <img  className='imagen1' src={ProductoID.imagenList[0].url}/> 
                    </div>
                    <div className='extra_reserva1'>
                    <p className='titulo_auto2'> {ProductoID.categoria.titulo}: {ProductoID.titulo} </p>
                    <p> <strong2>Pais: </strong2> {ProductoID.ciudad.pais}  <strong2> - Provincia: </strong2> {ProductoID.ciudad.provincia} <strong2>- Ciudad: </strong2> {ProductoID.ciudad.nombre} </p>
                    </div>
                </div>
                <div className='extra_reserva2'>
                    <Calendario/>
                    <h2 className='info_auto'>Politicas del vehiculo :</h2>
                    <ul className='info'>
                    {
                     ProductoID.politicaList.map((politicas, index)=>{
                         return(
                             <li className='info_Texto2' key={index}>{politicas.descripcion}</li>
                             )
                            })
                        }
                    </ul>
                </div>
                <Link to={'/'}><button className='Boton_Boton' > Confirmar Reservacion </button></Link>
            </div>
        </div>
        }
    </>
    )
}

export default Reservacion