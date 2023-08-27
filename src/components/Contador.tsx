import { useState } from "react";

export const Contador = () => {
    const [valor, setValor] = useState(0);
    
    return (
    <>
        <h3>Contador: <small> { valor } </small></h3>
        <button 
            className="btn btn-primary"
            onClick={()=>setValor(valor + 1)}
        >
            +1
        </button>
        &nbsp; {/*caracter de espacio */}
        <button 
            className="btn btn-primary"
            onClick={()=>setValor(valor - 1)}
        >
            -1
        </button>
    </>
  )
}
