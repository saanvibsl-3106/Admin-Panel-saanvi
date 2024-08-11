// src/index.jsx
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
import AdminUsers from "./components/Admin/AdminUsers";
import AdminExp from "./components/Admin/AdminExp";
import NotFound from './404er';
import { AuthProvider } from "./context/Authcontext";
import UserOutlet from "./components/Dashboard/UserOutlet";
import MyQueries from "./components/Dashboard/MyQueries";
import MyReplies from "./components/Dashboard/MyReplies";
import Profile from "./components/Dashboard/Profile";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="dashboard" element={<UserOutlet />}>
            <Route index element={<Dashboard />} />
            <Route path="my-queries" element={<MyQueries />} />
            <Route path="my-replies" element={<MyReplies />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/admin" element={<Admin />} >
            <Route path="users" element={<AdminUsers />} />
            <Route path="Exp" element={<AdminExp />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  </React.StrictMode>
);