import './App.css';
import Header from './component/Fijos/header';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Registro from './component/Registro/Registro';
import { Routes, Route  } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header/>
      <body>
        <Routes>
          <Route path='/' element = { <Home/> } />
          <Route path='/login' element = { <Login/> } />
          <Route path='/Registro' element = { <Registro/> } />
        </Routes> 
      </body>
    </div> 
  );
}

export default App;