import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // ✅ adjust path

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between items-center">
      <h2 className="text-xl font-bold">My App</h2>
      <nav className="flex gap-4 items-center">
        <NavLink to="/" className="hover:underline">Home</NavLink>
        {isAuthenticated ? (
          <button onClick={logout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
            Logout
          </button>
        ) : (
          <NavLink to="/login" className="hover:underline">Login</NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
