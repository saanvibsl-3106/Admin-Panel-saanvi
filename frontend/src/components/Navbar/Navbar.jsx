// components/Navbar/Navbar.jsx
import { NavLink } from 'react-router-dom';

const neonTextStyle = {
  textShadow: 
    '0 0 5px #00ff00, ' +
    '0 0 10px #00ff00, ' +
    '0 0 15px #00ff00, ' +
    '0 0 20px #00ff00, ' +
    '0 0 25px #00ff00, ' +
    '0 0 30px #00ff00, ' +
    '0 0 35px #00ff00'
};

const Navbar = () => {
  return (
    <nav className="bg-green-500 border border-green-600 p-4 shadow-md fixed top-0 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 text-white font-bold" style={neonTextStyle}>
            <span className="text-2xl">Logo</span>
          </a>
        </div>
        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => 
                `px-4 py-2 border border-white rounded-md
                ${isActive ? 'bg-green-600 text-white' : 'bg-transparent text-white'}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) => 
                `px-4 py-2 border border-white rounded-md
                ${isActive ? 'bg-green-600 text-white' : 'bg-transparent text-white'}`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => 
                `px-4 py-2 border border-white rounded-md
                ${isActive ? 'bg-green-600 text-white' : 'bg-transparent text-white'}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) => 
                `px-4 py-2 border border-white rounded-md
                ${isActive ? 'bg-green-600 text-white' : 'bg-transparent text-white'}`
              }
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => 
                `px-4 py-2 border border-white rounded-md
                ${isActive ? 'bg-green-600 text-white' : 'bg-transparent text-white'}`
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
