import { TiposBasicos } from "./typescript/TiposBasicos";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { Funciones } from "./typescript/Funciones";
import { Contador } from "./components/Contador";
import { ContadorConHook } from "./components/ContadorConHook";
import { Login } from "./components/Login";
import { Usuarios } from "./components/Usuarios";

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Reforzamiento de TS React</h1>
      <hr />
      <TiposBasicos/>
      <hr />
      <ObjetosLiterales/>
      <hr />
      <Funciones/>
      <hr />
      <Contador/>
      <hr />
      <ContadorConHook/>
      <hr />
      <Login/>
      <hr />
      <Usuarios/>
    </div>
  )
}

export default App;