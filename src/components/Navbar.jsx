import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

export function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  console.log(isAuthenticated, user);

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

                { isAuthenticated ? (
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
                  <li>
                    <Link className="nav-link active" to="/" onClick={() => logout()}>Logout</Link>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                  </li> */}
                </>
                ) : (
                <>
                  <li>
                    <ButtonLink  to="/login">Login</ButtonLink>
                  </li>
                  <li>
                    <ButtonLink to="/register">Register</ButtonLink>
                  </li> 
                </>
                ) }

              </ul>
            </div>

        </div>
      </nav>
    </div>
    
    <br/><br/><br/><br/><br/><br/><br/><br/><br/>

    {/* <li>Welcome {user.name}</li> */}

    </>
  );
}
