

import Home from './Components/ComponentesReact/Home';
import NavBar from './Components/ComponentesReact/NavBar';
import Peluqueria from './Components/ComponentesReact/Peluqueria';
import Galeria from './Components/ComponentesReact/Galeria';
import Contacto from './Components/ComponentesReact/Contacto';
import Novias from './Components/ComponentesReact/Novias';
import Barberia from './Components/ComponentesReact/Barberia';


import {Routes,Route} from 'react-router-dom';
import style from './App.module.css'

//// nota aclaratoria: siempre colocar los parametros en Mayuscula al inicio pra que enrrute adecuadamente.


function App() {
  return (
    <div className={style.App} >
      {'/' && <NavBar/>}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Home" element={<Home/>}></Route>
        <Route path="/Peluqueria" element={<Peluqueria/>}></Route>
        <Route path="/Galeria" element={<Galeria/>}></Route>
        <Route path="/Contacto" element={<Contacto/>}></Route>
        <Route path="/Novias" element={<Novias/>}></Route>
        <Route path="/Barberia" element={<Barberia/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
