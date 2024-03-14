import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { NavElement } from "./components/NavElement";
import "./App.css";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>
      <nav>This is the app!</nav>
      <div>
        {<NavElement path="/" label="Home" />}
        {<NavElement path="/help" label="Help" />}
        {isLoading ? (
          <p>Loading...</p>
        ) : isAuthenticated ? (
          <>
            <LogoutButton />
            <br />
            {<NavElement path="/profile" label="Profile" />}
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </>
  );
}

export default App;
