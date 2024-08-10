// AdminNavbar.jsx
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4 items-center">
        <li>
          <Link to="/admin" className="hover:underline">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/users" className="hover:underline">Manage Users</Link>
        </li>
        <li>
          <Link to="/admin/Exp" className="hover:underline">Manage Exp</Link>
        </li>
        <li className="ml-auto">
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;