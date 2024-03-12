import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { NavElement } from "./components/NavElement";
import "./App.css";
import { useEffect } from "react";

function App() {
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    console.log("import.meta.env", import.meta.env);
    console.log("import.meta.env.VITE_BASE_PATH", import.meta.env.VITE_BASE_PATH);
    console.log("import.meta.env.BASE_PATH", import.meta.env.BASE_PATH);
    console.log("import.meta.env.THIRD", import.meta.env.THIRD);
  });

  return (
    <>
      <nav>This is the app!</nav>
      <div>
        {<NavElement path="/" label="Home" />}
        {<NavElement path="/help" label="Help" />}
        {isAuthenticated ? (
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
