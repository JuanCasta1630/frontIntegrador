import {  useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import POSTLOGIN from '../../LogicaJS/POSTLOGIN';
import './LoginCss.css';

function Login({Autenticacion}) {
  
   const navigate = useNavigate();
   const [email, setEmail] = useState( '' );
   const [password, setPassword] = useState( '' );
   return (
      <div className='Login'>
         <form className='Login_Form' onSubmit={e => {
             e.preventDefault(); 
             VerificarLogin(email, password, {Autenticacion})
            }}  >
            <label className='Form_Titulo'>Iniciar sesión</label>
            <div className='Form_Contenido'>
               <Link className='Form_Salida' to='/'><p className='Salida_Texto' > X </p></Link>
               <p className='Nombre_Form'> Email </p>
               <input type="text" className='Form_Input' name='email' placeholder='Email'  value={email} onChange={e => setEmail(e.target.value)}></input>
               <p className='Nombre_Form'>Contraseña</p>
               <input type="password" className='Form_Input' name='password' placeholder='Contraseña'  value={password} onChange={e => setPassword(e.target.value)} ></input>
            </div>
               <button  className='Form_Boton'>Iniciar Sesión</button> 
            <div className='redireccion1'>
               <p className='Form_Texto'>¿No tienes cuenta?<Link to='/Registro'><span className='Form_Link'> Crear una </span></Link></p>
            </div>
      </form>
    </div >
  )
  
function VerificarLogin(email, password, {Autenticacion}){
    const expReg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(expReg.test(email) && password.length>5){
      POSTLOGIN({keyword: 'auth/login', email, password}).then(() => {
        if(localStorage.getItem('jwt')){
          Autenticacion();
          alert('Iniciando sesión')
          navigate("/");
        }
        else{
          alert('Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde')
        }
      })
    }else{
      alert('Por favor vuelva a intentarlo. Sus credenciales son inválidas')
    }
  } 
}
export default Login