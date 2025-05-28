import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={handleLinkClick}>
          타일 계산기
        </Link>
        <button
          className="hamburger"
          onClick={handleMenuClick}
          aria-label="메뉴 열기"
        >
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
          <span className={menuOpen ? "bar open" : "bar"}></span>
        </button>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <Link to="/calculator" className="nav-link" onClick={handleLinkClick}>
            타일계산기
          </Link>
          <Link to="/estimate" className="nav-link" onClick={handleLinkClick}>
            욕실 견적계산기
          </Link>
          <Link
            to="/ceiling-calculator"
            className="nav-link"
            onClick={handleLinkClick}
          >
            돔천장 계산기
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
