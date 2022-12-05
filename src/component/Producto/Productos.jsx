import { useState } from 'react'
import { useEffect } from 'react'
import { Link,  useNavigate, useParams} from 'react-router-dom'
import GET from '../../LogicaJS/GET'
import Calendario2 from './Calendarios/Calendario2'
import Modal from './Modal'
import './Productos.css'
import { Slider } from './Slider'



function Productos(){
   const navigate = useNavigate();
   const {id} = useParams(':id')
   const [ProductoID , setProductoID] = useState('')

   useEffect(() => {
      GET({keyword: ('productos/porId/' + id)}).then(datosP_id => setProductoID(datosP_id))
   },[]
   )
   const reserva = (() => {
      if(localStorage.getItem('jwt')){
         navigate(`/Reserva/${id}`)
      }else{
         navigate('/login').then(() => {alert('El login es obligatiorio para realizar una reserva')})
      }
   })
   return(
      <>
         {ProductoID == '' ? 
         <>
            <h2>Actualizando datos.....</h2>
            
         </>
         :
         <div className='Producto'>
            <div className='header_productos'>
               <div className='header_top'>
                  <h1 className='titulo_auto'> {ProductoID.categoria.titulo}: {ProductoID.titulo} </h1>
                  <Link to='/'> <img src='https://cdn-icons-png.flaticon.com/128/189/189254.png' alt= "regresar" className='back_button'/> </Link>
               </div>
               <div className='header_bot'>
                  <p> <strong>Pais: </strong> {ProductoID.ciudad.pais}  <strong>Provincia: </strong> {ProductoID.ciudad.provincia} <strong>Ciudad: </strong> {ProductoID.ciudad.nombre} </p>
               </div>
            </div>
            <div className='mas_Info'>
               <div className='imagen_Info'>
                  <div className="grid-item tall"> 
                     <img  className='imagen1' src={ProductoID.imagenList[0].url}/> 
                  </div>
                  <div className="grid-item"> 
                     <img className='imagen2' src={ProductoID.imagenList[1].url} /> 
                  </div>
                  <div className="grid-item"> 
                     <img className='imagen3' src={ProductoID.imagenList[2].url}/> 
                  </div>
                  <div className="grid-item"> 
                     <img className='imagen4' src={ProductoID.imagenList[3].url} /> 
                  </div>
                  <div className="grid-item"> 
                     <img className='imagen5' src={ProductoID.imagenList[4].url} />   
                  </div>
                  <button className='VerModal' > <a href='#Modal' className='VerModal_Texto'> Ver más </a> </button>
               </div>
               
                  <div className='slider'>
                     <ul>
                        <Slider Imagenes={ProductoID.imagenList} />
                     </ul>
                  </div>
               <div className='modal' id="Modal">
                  <Modal Imagenes={ProductoID.imagenList} />
               </div>
         
               <section className='Informacion_Contacto'>
                  <div className='Informacion'>
                        <h2 className='info_auto'>Caracteristicas :</h2>
                     <div className='caracteristicas'>
                        {
                        ProductoID.caracteristicaList.map((caracteristicas, index)=>{
                           return(
                              <li className='Caracteristicas_Info' key={index}>
                                 <img className='Info_Imagen' src='https://as1.ftcdn.net/v2/jpg/05/30/40/00/1000_F_530400037_6SPh1Odm7EUCaCKyvBYdfpIyqsHK4Sqt.webp' alt='True'/>   {caracteristicas.nombre}
                              </li>
                           )
                        })
                        }
                     </div>
                     <h2 className='info_auto'>Politicas del vehiculo :</h2>
                     {
                     ProductoID.politicaList.map((politicas, index)=>{
                        return(
                           <li className='info_Texto' key={index}>{politicas.descripcion}</li>
                        )
                     })
                     }
                  </div>
               </section>
               <div className='Contenedor_Reserva'>
                     <h2 className='Reserva_Titulo'> Fechas disponibles </h2>
                  <div className='Contenedor_Bot'> 
                   <Calendario2/>
                     <div className='Reserva_Boton'>
                        <p className='Boton_Texto'>Agrega las fechas disponibles para obtener los precios exactos</p>
                        <button className='Boton_Boton' onClick={reserva}> Iniciar Reserva </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         }
      </>
    )
}
export default Productos