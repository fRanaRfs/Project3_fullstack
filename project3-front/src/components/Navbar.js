import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">
        <button>Portada</button>
      </Link>
      {isLoggedIn
        ? (<>
            <Link to="/anuncios">
            <button>Anuncios</button>
            </Link>  
            <Link to="/projects">
              <button>Mis anuncios</button>
            </Link>
            <button onClick={logOutUser}>Salir</button>
            <span>{user.name}</span>
          </>)
        : 
        (<>
          <Link to="/signup"> <button>Registrarse</button> </Link>
          <Link to="/login"> <button>Entrar</button> </Link>
        </>)
      }
    </nav>
  );
}

export default Navbar;