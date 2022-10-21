import {  useState } from 'react';
import './LoginCss.css';

function Login() {
  const [email, setEmail] = useState( ' ' );
  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }
  const [password, setPassword] = useState( ' ' );


  return (
    <main>
      <div className='Prueba'>
        <form onSubmit={e => {
            e.preventDefault(); 
            
                              }}
        >
          <label htmlFor=''>Email</label>
          <input type="text" name='email' placeholder='email' value={email} onChange={handleOnChange}></input>
          <input type="password" name='password' placeholder='password'></input>
          <button type='submit' >Iniciar Sesión</button>
        </form>
      </div>
    </main>
  )
  
}
export default Login