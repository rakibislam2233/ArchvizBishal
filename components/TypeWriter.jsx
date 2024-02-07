"use client";
import { TypeAnimation } from "react-type-animation";
const TypeWriter = () => {
  return (
    <div className="text-4xl md:text-6xl lg:text-7xl font-semibold text-center">
      <TypeAnimation
        sequence={["Architectural Designer", 1000, "And Visualizer", 1000]}
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypeWriter;
