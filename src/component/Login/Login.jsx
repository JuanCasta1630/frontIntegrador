import {  useState } from 'react';
import {Link} from 'react-router-dom';
import './LoginCss.css';


function Login() {
  const [email, setEmail] = useState( ' ' );
  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }


  return (
    <main>
      <div className='login'>
        <form onSubmit={e => {
            e.preventDefault(); 
            
                              }}
        >
          <label htmlFor=''>Iniciar sesión</label>
          <input type="email" name='email' placeholder='email' value={email} onChange={handleOnChange}></input>
          <input type="password" name='password' placeholder='password'></input>
          <button type='submit' >Acceder</button>
          <div className='redireccion1'>
          <lo>¿No tienes cuenta?<Link to='/Registro'><span> Crear una </span></Link></lo>
          </div>
        </form>
      </div>
    </main>
  )
  
}
export default Login