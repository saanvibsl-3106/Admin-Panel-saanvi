// components/Root/Root.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

export default function Root() {
  return (
    <>
      <header>
        <Navbar /> {/* Include the Navbar component here */}
      </header>
      <main>
        <div id="detail">
          <Outlet /> {/* This is where nested routes will be rendered */}
        </div>
      </main>
      <footer>
        {/* Add footer content here if needed */}
      </footer>
    </>
  );
}
