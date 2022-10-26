import {  useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginCss.css';



function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState( '' );
  const [password, setPassword] = useState( '' );

  return (
    <main>
      <div className='login'>
      <form onSubmit={e => {
            e.preventDefault(); 
            VerificarLogin(email, password)
                              }}  >
          <input type="text" name='email' placeholder='Email'  value={email} onChange={e => setEmail(e.target.value)}></input>
          <input type="password" name='password' placeholder='Contraseña'  value={password} onChange={e => setPassword(e.target.value)} ></input>
          <button type='submit' >Iniciar Sesión</button>
          <div className='redireccion1'>
          <lo>¿No tienes cuenta?<Link to='/Registro'><span> Crear una </span></Link></lo>
          </div>
        </form>
      </div>
    </main>
  )
  
  function VerificarLogin(email, password){
    const expReg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(expReg.test(email) && password.length>5){
      alert('sii');
      navigate("/")
    }else{
      alert('Por el momento no tengo una validación con expresiones regulares usar Mail: Kaladin_Bendito@gmail.com Password > 3')
    }
  } 
}
export default Login