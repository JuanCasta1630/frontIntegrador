import {  useState } from 'react';
import './RegistroCss.css';

function Registro() {
  const [email, setEmail] = useState( ' ' );
  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }

  return (
      <main>
        <div className='register'>
        <form onSubmit={e => {
            e.preventDefault(); 
            
                              }}
        >
          <label htmlFor=''>Registrarse</label>
          <input type="email" name='email' placeholder='email' value={email} onChange={handleOnChange}></input>
          <input type="password" name='password' placeholder='password'></input>
          <button type='submit' >Siguiente</button>
        </form>
      </div>
    </main>
    )
  
}

export default Registro