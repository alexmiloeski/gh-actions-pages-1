import React from "react";
import ReactDOM from "react-dom/client";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./views/Home";
import { Help } from "./views/Help";
import Profile from "./views/Profile";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-xm2agcqpmkinclt4.eu.auth0.com"
      clientId="SCDiQPdlg80P9KTOL6w8JWefvOg32zo7"
      authorizationParams={{
        // redirect_uri: window.location.origin,
        redirect_uri:
          window.location.origin + import.meta.env.VITE_BASE_PATH + "/sth/else",
      }}
    >
      <Router>
        <App />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </Router>
    </Auth0Provider>
  </React.StrictMode>
);
