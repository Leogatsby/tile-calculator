import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          타일 계산기
        </Link>
        <nav className="nav">
          <Link to="/calculator" className="nav-link">
            타일계산기
          </Link>
          <Link to="/estimate" className="nav-link">
            욕실 견적계산기
          </Link>
          <Link to="/ceiling-calculator" className="nav-link">
            돔천장 계산기
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
