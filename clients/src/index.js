import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RegisProvider } from "./contexts/register";
import { AuthProvider } from "./contexts/authentication";
import jwtInterceptor from "./utils/jwtInterceptor";
import App from "./App";

jwtInterceptor();

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
