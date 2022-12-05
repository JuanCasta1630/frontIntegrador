import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import GET from '../../LogicaJS/GET';
import "./Home.css";
import Datess from '../Producto/Calendarios/Calendario';
import { scrollLeft } from 'rsuite/esm/DOMHelper';

const Home = ({verMas}) => {
  
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
      <div className="Home1" >
         <form className='Home_Form_Buscador' onSubmit={e => {
             e.preventDefault(); 
             BuscarProductos(City, FechaMinima, FechaMaxima)
                               }}> 
            <h2 className='Buscador_Titulo' >Comienza tu viaje ideal con nosotros</h2>
            <section className='Buscador_Input'>
               <label className='Input_Ciudades'>
                 <strong className='Selector_Titulo'> Ciudad </strong>
                 <select className='selector'  onChange={e => {setCity(e.target.value); }}>
                    {Ciudades.map(ciudades => {
                       return(
                          <option  key={ciudades.id} value={ciudades.id} >{ciudades.nombre}</option>
                          )
                    })}
                 </select>
               </label>
               <label className = 'Input_Fechas'  >
                  <strong className='Selector_Titulo'> Check in - Check out</strong>
                  <Datess/>
               </label>
               <label className='Buscador_Label_Button'>
                  <button type='submit' className='HForm_Boton'>Buscar</button>
               </label>
            </section>
         </form>
      
         <div className='Contendor_Categorias'>
            <h2 className='Categorias_Titulo'>Busca tu tipo de vehiculo</h2>
            <div className='Contenedor_Categorias_Card'>
               {Categorias.map(categorias => {
                  return(
                     <div className='Categorias_Card' key={categorias.id} onClick={() => {setBusquedaCate(categorias.titulo); console.log(busquedaCate)}}>
                        <img className='Categorias_Card_Imagen' src={categorias.urlImagen} alt={'Categorias' + categorias.id} />
                        <p className='Categorias_Card_Titulo'>{categorias.titulo}</p>
                        <p className='Categorias_Card_Cantidad' > Cantidad de Prodcutos: 8 </p>
                     </div>
                  )
               })}
            </div>
         </div>
      
         <div className='Contenedor_Recomendados' >
            <h2 className='Recomendados_Titulo' > Productos destacados {busquedaCate}</h2>
            <div className='Recomendados_Cards'>
               <img className='Scroll_Left' onClick={ () => { const Left = document.querySelector('.Scroll'); Left.scrollLeft-=200 } } src='https://cdn-icons-png.flaticon.com/512/271/271220.png' alt='Izquierda' />
               <img className='Scroll_Right' onClick={() => { const Right = document.querySelector('.Scroll'); Right.scrollLeft+=200 } } src='https://cdn-icons-png.flaticon.com/512/271/271228.png' alt='Derecha' />
               <div className='Scroll'>
                  <div className='flex'>
                     {Producto.filter((producto) => 
                     {
                        return  producto.categoria.titulo.includes(busquedaCate)
                     }).slice(0,3)
                      .map(producto => 
                      (
                         <div className='Scroll_Card' key={producto.id}>
                           <img className='Scroll_Img'  src={producto.imagenList[1].url}/>
                           <div className='Contenedor_Info' >
                              <p className='Scroll_Titulo'> { producto.titulo }</p>  
                              <p className='Scorll_Descripcion'>{producto.descripcion}</p>
                              <div className='Info_Bot'>
                                 <p className='Info_Precio'> $ { producto.precio } </p>
                                 <Link to={`/Productos/${producto.id}`} className='Info_Link'> <button  className='Info_Bot_Button' > Ver más </button> </Link>
                              </div>
                           </div>
                         </div>  
                      ))
                     }     
                  </div>
               </div>
            </div>
      </div>
      <div className='Contenedor_Cards'>
         <h2 className='Recomendados_Titulo' > Otros productos de nuestra selección</h2>
         <div className='Cards'> 
            {Producto.filter((producto) => 
             {
               return  producto.categoria.titulo.includes(busquedaCate)
             }).slice(3,8)
             .map(producto => 
               (
                 <div className='card' key={producto.id}>
                   <img className='Card_Img'  src={producto.imagenList[3].url}/>
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
         <h3 className='Recomendados_Titulo' > Ver más productos en la <Link to='/Tienda'><span className='Form_Link'> Tienda </span></Link></h3>
      </div>
    </div>
  )
}


export default Home