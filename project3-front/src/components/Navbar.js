import { Link } from "react-router-dom";
import { useContext } from "react";                       // <== IMPORT 
import { AuthContext } from "./../context/auth.context";  // <== IMPORT

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Portada</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      {isLoggedIn
        ? (<>
        <a class="nav-item nav-link active" href="/anuncios">Anuncios <span class="sr-only"></span></a>
        <a class="nav-item nav-link" href="/projects">Mis anuncios</a>
        <a class="nav-item nav-link" onClick={logOutUser}>Salir</a>
        </>)
      : 
        (<>
        <a class="nav-item nav-link" href="/signup">Registrarse</a>
        <a class="nav-item nav-link" href="/login">Entrar</a>
        </>)
  }
      </div>
    </div>
</nav>
  );
}

export default Navbar;


/* <nav>
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
    </nav> */