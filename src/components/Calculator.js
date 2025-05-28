import React from "react";
import { Link } from "react-router-dom";
import "./Calculator.css";

function Calculator() {
  return (
    <div className="calculator-container">
      <h1>타일 계산기</h1>
      <div className="content">
        <p>타일 계산기 페이지입니다.</p>
      </div>
      <Link to="/" className="back-button">
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default Calculator;
