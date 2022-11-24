import {  useState } from 'react';
import './RegistroCss.css';
import { Link, useNavigate} from 'react-router-dom'

function Registro({Autenticacion}) {
  const [nombre, setNombre] = useState( '' );
  const [apellido, setApellido] = useState( '' );
  const [email, setEmail] = useState( '' );
  const [password, setPassword] = useState( '' );
  const [confirmPassword, setConfirmPassword] = useState( '' );
  const navigate = useNavigate();


  return (
      <>
        <div className='Register'>
        <form className='Register_Form' onSubmit={e => {
            e.preventDefault(); 
            VerificarRegistro(nombre, apellido, email, password, confirmPassword, {Autenticacion})
                              }}  >
          <label htmlFor='' className='Form_Nombre'>Registrarse</label>
          <Link className='Form_Salida' to='/'><p className='Salida_Texto' > X </p></Link>
          <p  className='Nombre_Form'>Nombre</p>
          <input type="texto" name='Nombre' className='Form_Input' placeholder='Nombre' value={nombre} onChange={e => setNombre(e.target.value)}></input>
          <p  className='Nombre_Form'>Apellido</p>
          <input type="texto" name='apellido' className='Form_Input' placeholder='Apellido' value={apellido} onChange={e => setApellido(e.target.value)}></input>
          <p className='Nombre_Form'>Email</p>
          <input type="email" name='email' className='Form_Input' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}></input>
          <p className='Nombre_Form'>Password</p>
          <input type="password" name='password' className='Form_Input' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}></input>
          <p className='Nombre_Form'>Confirmar Password</p>
          <input type="password" name='confirmPassword' className='Form_Input' placeholder='Confirm password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
          <button className='Form_Boton' type='submit' > Registrarse </button>
          <p className='Form_Texto'>¿ Ya tienes una cuenta ?<Link to='/Login'><span className='Form_Link'> Iniciar Sesión </span></Link></p>
        </form>
      </div>
    </>
    )
    function VerificarRegistro(nombre, apellido, email, password, confirmPassword, {Autenticacion}) {
      const expReg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
      if(expReg.test(email) && password.length>5 && password===confirmPassword && nombre.length>4 && apellido.length>4){
        alert('Registrado correctamente');
        Autenticacion()
        navigate("/");
      }else{
        alert('Por favor vuelva a intentarlo. Sus credenciales son inválidas')
      }
    }
}

export default Registro