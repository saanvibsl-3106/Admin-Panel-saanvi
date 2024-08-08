// index.jsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./Layout";
import Home from "./components/Home/Home";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AboutUs from "./components/AboutUs/AboutUs";
import Dashboard from "./components/Dashboard/Dashboard";
import Admin from "./components/Admin/AdminDashboard";
import NotFound from './404er';
import { AuthProvider } from "./context/Authcontext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> {/* Wrap Router with AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            
          </Route>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="admin" element={<Admin />} >
                <Route></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
         
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);
