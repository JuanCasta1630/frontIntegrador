import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GET from '../../LogicaJS/GET';
import "./Tienda.css";
import Datess from '../Producto/Calendarios/Calendario';


function Tienda({verMas}) {
  
  const [Ciudades, setCiudades] = useState([])      //Listar Ciudades
  const [Categorias, setCategorias] = useState([])  //Listar Categorias
  const [Producto, setProducto] = useState([])      //ListarProductos
  
  const [City, setCity] = useState('')              // Ciudad ID
  const [FechaMinima, setFechaMinima] = useState('')// Fecha Iniciar YYYY-MM-DD
  const [FechaMaxima, setFechaMaxima] = useState('')// Fecha Final   YYYY-MM-DD

  const [busquedaCate, setBusquedaCate] = useState('')
  const Dia = new Date();
  const BuscarProductos = ((ciudad, fechaReservaInicial, fechaReservaFinal)=>{
    console.log("Ciudad" + ciudad)
    

      if(ciudad !== '' && fechaReservaInicial !== '' && fechaReservaFinal !== ''){
        GET({ keyword: `productos/porCiudadYFecha/${ciudad}/${fechaReservaInicial}/${fechaReservaFinal}`}).then(datosCI_FC => {setProducto(datosCI_FC)})
      }else{
          if(ciudad !== ''){
            GET( { keyword: `productos/porCiudad/${ciudad}` } ).then(datosCI_ID => {setProducto(datosCI_ID)})
          }
          else{
              if(fechaReservaInicial !== '' && fechaReservaFinal !== ''){
                GET( { keyword: `productos/porFecha/${fechaReservaInicial}/${fechaReservaFinal}` } ).then(datosFC => {setProducto(datosFC)})
              }
              else{
                alert('Error en la carga de datos')
                GET( { keyword: 'productos/random' } ).then(datosP =>{ setProducto(datosP)})
              }
            }
          }
    
  })
  const BusquedaLimpia = (( ) => {GET( { keyword: 'productos/random' } ).then( datosP =>{ setProducto ( datosP ) } ); setBusquedaCate('')} )
  useEffect(()=>{
    GET( { keyword: 'productos/random' } ).then(datosP =>{ setProducto(datosP)})
    GET({keyword: 'ciudades'}).then(datosCI => {setCiudades(datosCI)})
    GET({ keyword: 'categorias' }).then(datosCA => {setCategorias(datosCA)})
   },[]
   )
   
    
  return (
    <div className="Home" >
     <form className='Home_From' onSubmit={e => {
          e.preventDefault(); 
          BuscarProductos(City, FechaMinima, FechaMaxima)
                            }}> 
        <h2 className='HForm_Input_Titulo' >Comienza tu viaje ideal con nosotros</h2>
          <section className='HForm_Input'>
            <label className='Input_Label'>
               <strong className='HForm_Strong'> Ciudad </strong>
               <select className='selector'  onChange={e => {setCity(e.target.value)}}>
                  {Ciudades.map(ciudades => {
                    return(
                      <option className='selector' key={ciudades.id} value={ciudades.id} >{ciudades.nombre}</option>
                    )
                  })}
                </select>
            </label>
            <label className='Input_Label'>
              <strong className='HForm_Strong'> Categorias </strong>
              <select className='selector'  onChange={e => {setCity(e.target.value)}}>
                {Categorias.map(categorias => {
                    return(
                      <option className='selector' key={categorias.id}  >{categorias.titulo}</option>
                    )
                })}
              </select>
            </label>
            <label className='Input_Label'>
              <strong className='HForm_Strong'> Check in - Check out </strong>
              <Datess/>
            </label>
            <label className='HForm_Label_Button'>
              <button type='submit' className='HForm_Boton'>Buscar</button>    
            </label>
          </section>
      
      
      
      </form>
      <div className='Cards'>
        {Producto.filter((producto) => 
          {
            return  producto.categoria.titulo.includes(busquedaCate)
          })
          .map(producto => 
            (
              <div className='card' key={producto.id}>
                <img className='Card_Img'  src={producto.imagenList[1].url}/>
                <div className='Div_descripcio' >
                  <p className='Card_Titulo'> { producto.titulo }</p>  
                  <p className='Card_Descripcion'>{producto.descripcion}</p>
                  <div className='Card_Bot'>
                    <p className='precio_Card'> $ { producto.precio } </p>
                    <Link to={`/Productos/${producto.id}`} className='Card_Link'> <button  className='button_Card' onClick={ ( ) => { verMas(producto.id); sessionStorage.setItem('ID', producto.id) } }> Ver más </button> </Link>
                  </div>
                </div>
              </div>  
            )
        )}
      </div>
    </div>
  )
}

export default Tienda;  