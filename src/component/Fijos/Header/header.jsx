import "./Header.css";
import React from 'react';
import {Link} from 'react-router-dom';
import Nolog from './Header-Log/NoLogeado/Nolog';
import Silog from './Header-Log/SiLogeado/Silog';

const logoimg = require.context('../../../assets/img', true );

function header({logeado, Autenticacion}){
    return(
        <header>
            <div className="Header_Contenedor">
                <div className='Contenedor_Logo'>
                    <Link to='/' > <img src={"https://images-ext-1.discordapp.net/external/A6bI-qMY14oV43-c7QWPJW8cRZlzh1Z2urWQeZJubp4/https/static.tildacdn.com/tild3337-3463-4335-b934-626465373566/cartechlogo.png?width=1440&height=206" } alt= "cartech" className='Logo_Imagen'/> </Link>
                    <Link to='/' className="Nombre_Link"> <h1 className='Logo_Nombre'> Comienza tu aventura</h1> </Link>
                </div>
                <div className='Contenedor_Router'>
                   {logeado ? <Silog Autenticacion={Autenticacion} /> : <Nolog/> }
                </div>
            </div> 
        </header>
    )
}
export default header