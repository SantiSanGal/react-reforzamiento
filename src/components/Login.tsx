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


/* este es el payload que esperaré cuando se dispare un evento de tipo login */
type LoginPayload = {
    username: string,
    nombre: string
}

/*objetos planos que no se pueden expandir
el tipo AuthAction puede ser de un tipo o solo otro de los definidos
*/
type AuthAction = 
    | { type: "logout" }
    //| { type: "login", payload: { username: string, nombre: string }} 
    | { type: "login", payload: LoginPayload}

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
        case 'login':
            const { nombre, username } = action.payload;
            return {
                validando: false,
                token: 'ABCASKDJFASHDFJASHDFKLJASDHFAS',
                nombre,
                username
            }
        default:
            return state;
    }
}

export const Login = () => {
    //recibe la funcion y el estado que definimos primeramente con la interface
    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type:'logout' });    
        }, 1500);
    }, [])

    const login = () => {
        dispatch({
            type: 'login',
            payload: {
                nombre: "Santiago",
                username: "Santiux"
            }
        });
    };

    const logout = () => dispatch({type: 'logout'});

    if ( validando ) {
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

        {
            ( token )
            ?   <div className="alert alert-success">Autenticado como: { nombre }</div>
            :   <div className="alert alert-danger">No Autenticado</div> 

        }

        {
            ( token )
            ?   <button 
                    className="btn btn-danger"
                    onClick={ logout }
                >
                    Logout
                </button>
            :   <button 
                    className="btn btn-success"
                    onClick={ login }
                >
                    Login
                </button>
        }

        &nbsp; {/*caracter de espacio */}

    </>
  )
}
