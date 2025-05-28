import React from "react";
import CalculatorCard from "../../components/CalculatorCard/CalculatorCard";
import "./Home.css";

const cardData = [
  {
    title: "타일 계산기",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69ttex2j7St9Rq0_U368d8bkH1Ebnb9QQkQ&s", // 예시 타일 이미지
    buttonText: "타일계산기로 가기",
    to: "/calculator"
  },
  {
    title: "욕실 견적내기",
    image:
      "https://m.inusmall.com/web/product/extra/big/202208/ec2a7b4954e37eba78d9937ce2094aba.jpg", // 예시 욕실 이미지
    buttonText: "욕실 견적내기",
    to: "/estimate"
  },
  {
    title: "천장 계산기",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8X5HgtHqGM75fXBFr5AH1Zk6vsW3CJ9dLnw&s", // 예시 천장 이미지
    buttonText: "천장 계산기로 가기",
    to: "/ceiling-calculator"
  }
];

function Home() {
  return (
    <div className="home-container">
      <div className="card-list">
        {cardData.map((card) => (
          <CalculatorCard key={card.to} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Home;
