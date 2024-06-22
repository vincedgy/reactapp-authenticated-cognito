import { useContext } from "react";
import { AuthContext } from "./Auth/AuthContext";

function Home() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>Home</h1>
      {user ? (
        <>
          <p>Welcome! You are logged in.</p>
          <button onClick={logout}>Logout</button>

          <div class="ui container">
            <div class="ui message">
              <h1 class="ui huge header">
                Navbar example 
              </h1>
              <p class="lead">
                This example is a quick exercise to illustrate how the default, static navbar and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device.
              </p>
              <p class="lead">
                To see the difference between static and fixed top navbars, just scroll.
              </p>
              <a class="ui big purple button">View navbar docs &raquo; </a>
            </div>
          </div>

        </>
      ) : (
        <p>Please log in to access more features.</p>
      ) }
    </div>
  );
}

export default Home;