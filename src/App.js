import React from "react";
import Info from "./components/Info";
import About from "./components/FeeCalculator";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="full-content">
      <div className="content">
        <Info />
        <About />
      </div>
      <Footer />
    </div>
  );
}
