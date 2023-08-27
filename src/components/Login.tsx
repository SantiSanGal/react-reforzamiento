export const Login = () => {
  return (
    <>
        <h3>Login</h3>
        <div className="alert alert-info">
            Validando...
        </div>

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
