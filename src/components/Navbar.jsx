import { FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const {cart} = useSelector((state) => state);

  return (
    <div className="bg-slate-900/95 backdrop-blur-lg border-b border-slate-800">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto px-4">
        <NavLink to="/" className="text-2xl font-bold text-white">
          E-Shop
        </NavLink>

        <div className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-slate-300 hover:text-white transition-colors ${isActive ? 'text-white font-medium' : ''}`
            }
          >
            Home
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-slate-300 hover:text-white transition-colors ${isActive ? 'text-white font-medium' : ''}`
            }
          >
            Contact
          </NavLink>

          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-64 px-4 py-2 rounded-xl bg-slate-800/50 text-white border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-200"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <NavLink 
            to="/login" 
            className={({ isActive }) => 
              `text-slate-300 hover:text-white transition-colors ${isActive ? 'text-white font-medium' : ''}`
            }
          >
            <div className="flex items-center space-x-2">
              <FaUser className="text-xl" />
              <span className="hidden md:inline">Login</span>
            </div>
          </NavLink>

          <NavLink to="/cart" className="relative">
            <div className="relative">
              <FaShoppingCart className="text-2xl text-slate-300 hover:text-white transition-colors"/>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-xs w-5 h-5 flex justify-center items-center rounded-full text-white font-medium animate-bounce">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
