// index.jsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./Layout";
import Home from "./components/Home/Home";
import Contact from "./components/Contact.jsx/Contact";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AboutUs from "./components/AboutUs/AboutUs";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
