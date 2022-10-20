import React from 'react';
import {Link} from 'react-router-dom';

const logoimg = require.context('../../assets/img', true );

function header(){
    return(
        <header>
            <Link to='/'> <img src={logoimg('./cartech.jpg') } alt= "cartech" className='Logo'/> </Link> 
            <div className='cosa'>
                <Link to='/Login'> <button type="button" > Iniciar sesión </button> </Link>
                <Link to='/Registro'> <button type="button" > Registrarse </button> </Link>
                
            </div>
        </header>
    )
}
export default header