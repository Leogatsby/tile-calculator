import React from "react";
import { useNavigate } from "react-router-dom";
import "./CalculatorCard.css";

function CalculatorCard({ title, image, buttonText, to }) {
  const navigate = useNavigate();
  return (
    <div
      className="calc-card"
      onClick={() => navigate(to)}
      tabIndex={0}
      role="button"
    >
      <img src={image} alt={title} className="calc-card-img" />
      <div className="calc-card-title">{title}</div>
      <button
        className="calc-card-btn"
        onClick={(e) => {
          e.stopPropagation();
          navigate(to);
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default CalculatorCard;
