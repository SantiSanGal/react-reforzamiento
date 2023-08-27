import { type } from "os";
import { useEffect, useReducer } from "react"

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: "",
    nombre: ""
}

//objetos planos que no se pueden expandir
type AuthAction = { type: "logout" };

/*reducer debe retornar un estado del mismo tipo que initialState
por eso definimos la interface y lo utilizamos en el objeto initialState
y en la funcion reducer
*/
const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: "",
                username: "",
            }
        
        default:
            return state;
    }
}

export const Login = () => {
    //recibe la funcion y el estado que definimos primeramente con la interface
    const [state, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type:'logout' });    
        }, 1500);
    }, [])
    
    if (state.validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">
                    Validando...
                </div>
            </>
        )
    }

  return (
    <>
        <h3>Login</h3>

        <div className="alert alert-danger">
            No Autenticado.
        </div>

        <div className="alert alert-success">
            Autenticado
        </div>

        <button className="btn btn-success">
            Login
        </button>
        &nbsp; {/*caracter de espacio */}
        <button className="btn btn-danger">
            Logout
        </button>
    </>
  )
}
