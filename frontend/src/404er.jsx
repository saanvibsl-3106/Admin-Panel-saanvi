// components/404err.jsx
import { Link } from 'react-router-dom'; // Import Link for navigation if using react-router

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, the page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
