import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RegisProvider } from "./contexts/register";
import { AuthProvider } from "./contexts/authentication";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RegisProvider>
          <App />
        </RegisProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
