import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Calculator.css";

/**
 * 박스 장수 기준을 타일 사이즈별로 반환
 */
function getBoxCountPerBox(width, height) {
  const w = Number(width);
  const h = Number(height);
  if ((w === 300 && h === 300) || (w === 300 && h === 300)) return 16;
  if ((w === 300 && h === 600) || (w === 600 && h === 300)) return 8;
  if (w === 600 && h === 600) return 4;
  return 8; // 기본값
}

/**
 * 타일 규격명 반환 (300x300 → 300각, 600x600 → 600각, 300x600 → 300x600각)
 */
function getTileLabel(width, height) {
  const w = Number(width);
  const h = Number(height);
  if (w === 300 && h === 300) return "300각";
  if (w === 600 && h === 600) return "600각";
  if ((w === 300 && h === 600) || (w === 600 && h === 300)) return "300x600각";
  return `${w}x${h}각`;
}

function Calculator() {
  // 입력값 state
  const [inputs, setInputs] = useState({
    bathWidth: "",
    bathHeight: "",
    bathDepth: "",
    wallTileWidth: "",
    wallTileHeight: "",
    floorTileWidth: "",
    floorTileHeight: ""
  });
  const [useMM, setUseMM] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  // 입력값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value.replace(/[^0-9]/g, "") }));
  };

  // 계산 함수
  const calculate = () => {
    // 입력값 파싱
    const bathW = Number(inputs.bathWidth);
    const bathH = Number(inputs.bathHeight);
    const bathD = Number(inputs.bathDepth);
    const wallTileW = Number(inputs.wallTileWidth);
    const wallTileH = Number(inputs.wallTileHeight);
    const floorTileW = Number(inputs.floorTileWidth);
    const floorTileH = Number(inputs.floorTileHeight);

    // 박스 장수 기준 계산
    const wallBoxCount = getBoxCountPerBox(wallTileW, wallTileH);
    const floorBoxCount = getBoxCountPerBox(floorTileW, floorTileH);

    // 바닥 면적 (mm^2 → m^2)
    const floorArea = (bathW * bathD) / 1000000;
    // 바닥 타일 1장 면적 (mm^2 → m^2)
    const floorTileArea = (floorTileW * floorTileH) / 1000000;
    // 바닥 타일 장수
    const floorTileCount = floorTileArea
      ? Math.ceil(floorArea / floorTileArea)
      : 0;
    // 바닥 타일 박스 수
    const floorTileBox = floorTileCount
      ? Math.ceil(floorTileCount / floorBoxCount)
      : 0;

    // 벽 면적 (가로x높이x2 + 세로x높이x2) (mm^2 → m^2)
    const wallArea = (bathW * bathH * 2 + bathD * bathH * 2) / 1000000;
    // 벽 타일 1장 면적 (mm^2 → m^2)
    const wallTileArea = (wallTileW * wallTileH) / 1000000;
    // 벽 타일 장수
    const wallTileCount = wallTileArea ? Math.ceil(wallArea / wallTileArea) : 0;
    // 벽 타일 박스 수
    const wallTileBox = wallTileCount
      ? Math.ceil(wallTileCount / wallBoxCount)
      : 0;

    // 총 면적(㎡)
    const totalArea = wallArea + floorArea;
    // 평(3.3㎡ 기준)
    const totalPyeong = totalArea / 3.3;

    setResult({
      bathW,
      bathH,
      bathD,
      floorArea,
      floorTileW,
      floorTileH,
      floorTileCount,
      floorTileBox,
      floorBoxCount,
      wallArea,
      wallTileW,
      wallTileH,
      wallTileCount,
      wallTileBox,
      wallBoxCount,
      totalArea,
      totalPyeong
    });
    setShowResult(true);
  };

  // 폼 제출
  const handleSubmit = (e) => {
    e.preventDefault();
    calculate();
  };

  // 다시 계산하기
  const handleReset = () => {
    setShowResult(false);
  };

  return (
    <div className="calculator-container">
      <h1>욕실 타일 계산기</h1>
      <div className="content">
        {!showResult ? (
          <form onSubmit={handleSubmit} className="calc-form">
            <div className="form-section">
              <label>
                <input
                  type="checkbox"
                  checked={useMM}
                  onChange={() => setUseMM((v) => !v)}
                  readOnly
                />
                &nbsp;모든 사이즈는 <b>mm</b>를 사용합니다
              </label>
            </div>
            <div className="form-section">
              <div className="form-title">욕실</div>
              <input
                name="bathWidth"
                value={inputs.bathWidth}
                onChange={handleChange}
                placeholder="욕실가로"
                className="calc-input"
                required
              />
              <input
                name="bathDepth"
                value={inputs.bathDepth}
                onChange={handleChange}
                placeholder="욕실세로"
                className="calc-input"
                required
              />
              <input
                name="bathHeight"
                value={inputs.bathHeight}
                onChange={handleChange}
                placeholder="욕실높이"
                className="calc-input"
                required
              />
            </div>
            <div className="form-section">
              <div className="form-title">벽타일</div>
              <input
                name="wallTileWidth"
                value={inputs.wallTileWidth}
                onChange={handleChange}
                placeholder="벽타일가로"
                className="calc-input"
                required
              />
              <input
                name="wallTileHeight"
                value={inputs.wallTileHeight}
                onChange={handleChange}
                placeholder="벽타일세로"
                className="calc-input"
                required
              />
            </div>
            <div className="form-section">
              <div className="form-title">바닥타일</div>
              <input
                name="floorTileWidth"
                value={inputs.floorTileWidth}
                onChange={handleChange}
                placeholder="바닥타일가로"
                className="calc-input"
                required
              />
              <input
                name="floorTileHeight"
                value={inputs.floorTileHeight}
                onChange={handleChange}
                placeholder="바닥타일세로"
                className="calc-input"
                required
              />
            </div>
            <button type="submit" className="calc-btn">
              욕실 한 번에 계산하기
            </button>
          </form>
        ) : (
          <div className="result-box">
            <div className="result-title">욕실 계산결과</div>
            <div className="result-section">
              <div>
                욕실 크기: 가로 {result.bathW}mm, 세로 {result.bathD}mm, 높이{" "}
                {result.bathH}mm
              </div>
              <div
                style={{
                  marginTop: "8px",
                  marginBottom: "8px",
                  fontWeight: "bold"
                }}
              >
                총 면적:{" "}
                {result && result.totalArea !== undefined
                  ? result.totalArea.toFixed(2)
                  : "-"}{" "}
                헤베 /{" "}
                {result && result.totalPyeong !== undefined
                  ? result.totalPyeong.toFixed(2)
                  : "-"}
                평
              </div>
              <div
                style={{
                  marginTop: "18px",
                  marginBottom: "8px",
                  fontWeight: "bold"
                }}
              >
                타일 소요량
              </div>
              <table className="result-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>면적(헤베)</th>
                    <th>필요 타일(장)</th>
                    <th>주문 박스(박스)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>벽</td>
                    <td>
                      {result && result.wallArea !== undefined
                        ? result.wallArea.toFixed(2)
                        : "-"}
                    </td>
                    <td>{result.wallTileCount}</td>
                    <td>{result.wallTileBox}</td>
                  </tr>
                  <tr>
                    <td>바닥</td>
                    <td>
                      {result && result.floorArea !== undefined
                        ? result.floorArea.toFixed(2)
                        : "-"}
                    </td>
                    <td>{result.floorTileCount}</td>
                    <td>{result.floorTileBox}</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ marginTop: "8px", fontSize: "0.98em" }}>
                벽타일 주문:{" "}
                <b>
                  {result.wallTileBox}박스 (
                  {getTileLabel(result.wallTileW, result.wallTileH)} 1박스{" "}
                  {result.wallBoxCount}장 기준)
                </b>
                <br />
                바닥타일 주문:{" "}
                <b>
                  {result.floorTileBox}박스 (
                  {getTileLabel(result.floorTileW, result.floorTileH)} 1박스{" "}
                  {result.floorBoxCount}장 기준)
                </b>
              </div>
            </div>
            <div className="result-btns">
              <button className="calc-btn" onClick={handleReset}>
                다시 계산하기
              </button>
              <Link to="/" className="calc-btn secondary">
                처음으로
              </Link>
            </div>
          </div>
        )}
      </div>
      <Link to="/" className="back-button">
        홈으로 돌아가기
      </Link>
    </div>
  );
}

export default Calculator;
