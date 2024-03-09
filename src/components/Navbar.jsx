import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log("aqui el nombre", isAuthenticated, user? user.rol:"nada");

  return (
    <>
    <div class="p-3 m-0 border-0 bd-example" >

      <nav className="navbar navbar-expand-lg navbar-dark" style={ { backgroundColor: "#21D192"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/"></a>

            <div>

              <Link className="nav-link active" to={isAuthenticated ? "/" : "/login"}>  
                <img src="./img-recycle.png" width={40}/>
              </Link>

            </div>  

                    {/* <a className="navbar-brand" href="#">Navbar</a> */}

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">

                { isAuthenticated && user.rol === "admin" ? (
                <>

                  <li className="nav-item">
                    <Link className="nav-link active" to={isAuthenticated ? "/" : "/login"}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/container">Container</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/organization">Organization</Link>
                  </li>

                </>
                ) : ( isAuthenticated && user.rol === "user" ? (
                <>

                  <li className="nav-item">
                    <Link className="nav-link active" to={isAuthenticated ? "/" : "/login"}>Home</Link>
                  </li>

                </> 
                ) : (
                <>

                  <li className="nav-item">
                    <Link className="nav-link active" to="/">Home</Link>
                  </li>
                  <li>
                    <ButtonLink  to="/login">Login</ButtonLink>
                  </li>
                  <li>
                    <ButtonLink to="/register">Register</ButtonLink>
                  </li> 

                </>
                ) )}

              </ul>
              
              { isAuthenticated ? (
              <ul className="navbar-nav ms-auto">

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {user? user.rol === "admin" ? "admin : " :"":""} {user? user.userName:""}
                  </a>
                  <ul class="dropdown-menu" style={ { backgroundColor: "#21D192"}}>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li><a class="dropdown-item" href="#">Preferences</a></li>
                    <li><hr class="dropdown-divider"/></li>
                    <li>
                      <Link className="dropdown-item" to="/" onClick={() => logout()}>Logout</Link>
                    </li>
                  </ul>
                </li>
                <li className="navbar-brand"> 
                  <img src="./user-icon.png" width={30} height={24}/>
                </li>
              </ul>):("")}

            </div>

        </div>
      </nav>
    </div>
    
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>

    {/* <li>Welcome {user.name}</li> */}

    </>
  );
}
