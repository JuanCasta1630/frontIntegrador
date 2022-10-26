import React from 'react';
import {Link} from 'react-router-dom';

const logoimg = require.context('../../assets/img', true );

function header(){
    return(
        <header>
            <div className='Contenedor_Logo'>
                <Link to='/'> <img src={logoimg('./cartech.jpg') } alt= "cartech" className='Logo_Imagen'/> </Link>
                <h1 className='Logo_Nombre'>CARTECH</h1> 
            </div>
            <div className='Contenedor_Router'>
                <Link to='/Login'> <button type="button" className='Router_Botones'> Iniciar sesión </button> </Link>
                <Link to='/Registro'> <button type="button" className='Router_Botones'> Registrarse </button> </Link>
                
            </div>
        </header>
    )
}
export default header