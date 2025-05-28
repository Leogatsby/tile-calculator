import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>타일 계산기</h1>
      <div className="button-container">
        <Link to="/calculator" className="nav-button">
          타일계산기로 가기
        </Link>
        <Link to="/estimate" className="nav-button">
          욕실 견적내기
        </Link>
      </div>
    </div>
  );
}

export default Home;
