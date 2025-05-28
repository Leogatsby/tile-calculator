import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Calculator from "./pages/Calculator/Calculator";
import Estimate from "./pages/Estimate/Estimate";
import CeilingCalculator from "./pages/CeilingCalculator/CeilingCalculator";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/estimate" element={<Estimate />} />
            <Route path="/ceiling-calculator" element={<CeilingCalculator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
