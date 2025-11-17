import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AUTH_EVENT = 'wedjust-auth-change';

const Navbar = () => {
  const navigate = useNavigate();
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('wedjust_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleAuthClick = (mode) => {
    setAuthMode(mode);
    navigate(`/auth?mode=${mode}`);
  };

  const handleLogout = () => {
    localStorage.removeItem('wedjust_token');
    localStorage.removeItem('wedjust_user');
    setUser(null);
    setIsMenuOpen(false);
    window.dispatchEvent(new Event(AUTH_EVENT));
    navigate('/auth?mode=login');
  };

  useEffect(() => {
    const handleAuthChange = () => {
      try {
        const stored = localStorage.getItem('wedjust_user');
        setUser(stored ? JSON.parse(stored) : null);
      } catch {
        setUser(null);
      }
    };

    window.addEventListener(AUTH_EVENT, handleAuthChange);
    return () => {
      window.removeEventListener(AUTH_EVENT, handleAuthChange);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const profileInitial = user?.name?.trim()?.charAt(0)?.toUpperCase() || user?.email?.charAt(0)?.toUpperCase();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo/Brand Name */}
      <Link to="/" className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-900">WEDJUST</h1>
      </Link>

      {/* Navigation Items and Auth Buttons */}
      <div className="flex items-center gap-8">
        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">
            Services
          </a>
          <a href="#benefits" className="text-gray-700 hover:text-gray-900 transition-colors">
            About us
          </a>
          <a href="#support" className="text-gray-700 hover:text-gray-900 transition-colors">
            Support
          </a>
        </div>

        {/* Capsule-shaped Login/Register Box OR User Menu */}
        {user ? (
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="w-12 h-12 rounded-full bg-blue-600 text-white font-semibold flex items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="User menu"
            >
              {profileInitial || 'U'}
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 mt-3 w-48 rounded-xl border border-gray-200 bg-white shadow-lg p-4">
                <p className="text-sm font-semibold text-gray-900">{user.name || 'User'}</p>
                <p className="text-xs text-gray-500 truncate mb-3">{user.email}</p>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center rounded-full border border-gray-300 overflow-hidden shadow-sm">
            {/* Login - Blue Left Half */}
            <button
              onClick={() => handleAuthClick('login')}
              className="px-6 py-2.5 bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium rounded-l-full"
            >
              Login
            </button>
            
            {/* Register - White Right Half */}
            <button
              onClick={() => handleAuthClick('register')}
              className="px-6 py-2.5 bg-white text-gray-900 hover:bg-gray-50 transition-colors font-medium rounded-r-full border-l border-gray-300"
            >
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

