import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLoginToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <header className="header">
      <img src="/vite.svg" alt="Logo" className="logo" />
      {!isLogin ? (
        <button className="login-button" onClick={handleLoginToggle}>
          Login
        </button>
      ) : (
        <div className="user-icon" onClick={handleDropdownToggle}>
          User Icon
          {isDropdownOpen && (
            <div className="dropdown">
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
