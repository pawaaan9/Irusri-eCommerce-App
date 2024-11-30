import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [user, setUser] = useState(() => {
    // Retrieve user from localStorage if needed
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  });

  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle the dropdown
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="bg-[#14B8A6] text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h2 className="text-xl font-bold">MobileMart</h2>

        <div className="flex items-center space-x-4">
          {/* Cart button */}
          {user && (
            <Link
              to="/cart"
              className="hover:bg-[#FB7185] text-white py-2 px-4 rounded-md"
            >
              Cart
            </Link>
          )}

          {/* Show user email and dropdown if logged in */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
                className="flex items-center space-x-2 focus:outline-none"
              >
                <span>{user.email}</span>
                <span>⬇️</span>
              </button>

              {/* Dropdown for logout */}
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
            // Links if not logged in
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
