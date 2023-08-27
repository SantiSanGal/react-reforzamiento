import { Contador } from "./components/Contador";
import { Funciones } from "./typescript/Funciones";
import { ObjetosLiterales } from "./typescript/ObjetosLiterales";
import { TiposBasicos } from "./typescript/TiposBasicos";

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Reforzamiento de Ts React</h1>
      <hr />
      <TiposBasicos/>
      <ObjetosLiterales/>
      <Funciones/>
      <Contador/>
    </div>
  )
}

export default App;