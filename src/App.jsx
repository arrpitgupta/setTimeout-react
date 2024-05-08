import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const colors = ["red", "yellow", "green"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);

    return () => clearTimeout(interval);
  }, [currentColorIndex, colors.length]);

  return (
    <>
       <div className="container">
        {colors.map((color, index) => (
          <div
            key={index}
            className="circle"
            style={{
              backgroundColor: index === currentColorIndex ? color : "transparent",
            }}
          ></div>
        ))}
      </div>
    </>
  );
}

export default App;
