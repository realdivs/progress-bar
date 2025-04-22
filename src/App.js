import "./styles.css";
import { useState, useEffect } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => setAnimatedProgress(progress), 100);
  }, [progress]);
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${animatedProgress}%`, //over here its repainting again and again
          transform: `translateX(${-(100 - animatedProgress)}%)`, //use transform for smooth transition
          color: progress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
};
export default function App() {
  const bars = [0, 5, 10, 30, 50, 70, 90, 100];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((value) => (
        <ProgressBar key={value} progress={value} />
      ))}
    </div>
  );
}
