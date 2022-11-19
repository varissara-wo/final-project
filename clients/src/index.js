import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { RegisProvider } from "./contexts/register";
import { AuthProvider } from "./contexts/professionalAuth";
import { AuthRecruiterProvider } from "./contexts/recruiterAuth";
import jwtInterceptor from "./utils/jwtInterceptor";
import App from "./App";

jwtInterceptor();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthRecruiterProvider>
        <AuthProvider>
          <RegisProvider>
            <App />
          </RegisProvider>
        </AuthProvider>
      </AuthRecruiterProvider>
    </BrowserRouter>
  </React.StrictMode>
);
