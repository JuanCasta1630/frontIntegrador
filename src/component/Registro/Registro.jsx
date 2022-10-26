import {  useState } from 'react';
import './RegistroCss.css';

function Registro() {
  const [email, setEmail] = useState( '' );
  const [password, setPassword] = useState( '' );
  const [confirmPassword, setConfirmPassword] = useState( '' );


  return (
      <main>
        <div className='register'>
        <form onSubmit={e => {
            e.preventDefault(); 
            VerificarRegistro(email, password, confirmPassword)
                              }}  >
          <label htmlFor=''>Registrarse</label>
          <input type="email" name='email' placeholder='email' value={email} onChange={e => setEmail(e.target.value)}></input>
          <input type="password" name='password' placeholder='password' value={password} onChange={e => setPassword(e.target.value)}></input>
          <input type="password" name='confirmPassword' placeholder='confirm password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
          <button type='submit' >Siguiente</button>
        </form>
      </div>
    </main>
    )
    function VerificarRegistro(email, password, confirmPassword) {
      const expReg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
      if(expReg.test(email) && password.length>5 && password===confirmPassword){
        alert('sii');
      }else{
        alert('Por el momento no tengo una validación con expresiones regulares usar Mail: Kaladin_Bendito@gmail.com Password > 3')
      }
    }
}

export default Registro