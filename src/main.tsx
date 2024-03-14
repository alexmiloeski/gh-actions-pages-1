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
      domain={import.meta.env.VITE_AUTH0_TENANT_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        audience: import.meta.env.VITE_API_BASE_URL,
        redirect_uri:
          window.location.origin + import.meta.env.VITE_BASE_PATH + "/sth/else",
        scope: "openid profile email read:custom_one",
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
