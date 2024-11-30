import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import downArrow from '../../assets/icons/down.png';

const Header = () => {
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });

  const [dropdownOpen, setDropdownOpen] = useState(false); 
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.clear(); // Clear all data from local storage
    navigate("/login");
  };

  return (
    <header className="bg-[#14B8A6] text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h2 className="text-xl font-bold">MobileMart</h2>

        <div className="flex items-center space-x-4">
          {user && (
            <Link
              to="/cart"
              className="hover:bg-[#FB7185] text-white py-2 px-4 rounded-md"
            >
              Cart
            </Link>
          )}

          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <span>{user.email}</span>
                <img src={downArrow} alt="Down Arrow" className="w-4 h-4" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-gray-800 shadow-md rounded-md">
                  <button
                    onClick={handleLogout}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:bg-[#FB7185] text-white py-2 px-4 rounded-md"
              >
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;