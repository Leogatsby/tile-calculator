import React from "react";
import { Link } from "react-router-dom";
import "./Estimate.css";

function Estimate() {
  return (
    <div className="estimate-container">
      <h1>욕실 견적내기</h1>
      <div className="content">
        <p>욕실 견적 페이지입니다.</p>
      </div>
      <Link to="/" className="back-button">
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default Estimate;
