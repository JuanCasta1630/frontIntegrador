import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GET from '../../LogicaJS/GET';
import "./Home.css";

function Home({verMas}) {
  
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
        GET({ keyword: `productos/porFechaYCiudad/${ciudad}/${fechaReservaInicial}/${fechaReservaFinal}`}).then(datosCI_FC => {setProducto(datosCI_FC)})
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
  const BusquedaLimpia = (( ) => GET( { keyword: 'productos/random' } ).then( datosP =>{ setProducto ( datosP ) } ) )
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
        <label>
          <strong> Ciudades </strong>
              <select className='selector'  onChange={e => {setCity(e.target.value)}}>
                {Ciudades.map(ciudades => {
                  return(
                    <option className='selector' key={ciudades.id} value={ciudades.id} defaultValue='hola'>{ciudades.nombre}</option>
                  )
                })}
              </select>
        </label>
        <label>
          <strong> Fecha inicio</strong>
          <input type="date" name='fecha' min={Dia.toISOString().split('T')[0]} value = { FechaMinima } onChange={ev => {setFechaMinima(ev.target.value)}}  className='selector'/>
        </label>
        <label>
          <strong> Fecha final</strong>
          <input type="date" name='fecha' min={FechaMinima} value = { FechaMaxima } onChange={ev => {setFechaMaxima(ev.target.value)}} className='selector'/>
        </label>

        <button type='submit' className='boton'>Buscar</button>
      </form>
      <div className='Form_Caregorias'> 
        {Categorias.map(categorias => <button className='Categorias_button' key={categorias.id} onClick={() => {setBusquedaCate(categorias.titulo)}}> <p className='Categoria_Texto'> { categorias.titulo }  </p>  </button>)}
        <button className='Categorias_button' onClick={() => {BusquedaLimpia() }} > <p className='Categoria_Texto'> Limpiar filtros </p> </button>
      </div>
      <div className='Cards'>
      {Producto.filter((producto) => 
        {
          return  producto.categoria.titulo.includes(busquedaCate)
        }).slice(0,10)
        .map(producto => 
          (
            <div className='card' key={producto.id}>
              <img className='img_Card'  src={producto.imagenList[1].url}/>
              <div className='Div_descripcio' >
                <p className='descripcion_Card'> { producto.titulo }</p>  
                <p className='descripcion_Card'> { producto.categoria.titulo } </p>
                <p className='descripcion_Card'> $ { producto.precio } </p>
                <Link to='/Productos' className='Card_Link'> <button  className='button_Card' onClick={ ( ) => { verMas(producto.id) } }> Ver más </button> </Link>
              </div>
            </div>  
          )
        )}
      </div>
    </div>
  )
}

export default Home;  