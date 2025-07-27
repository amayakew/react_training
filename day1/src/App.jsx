import { useState } from "react";
import ToggleButtons from "./components/ToggleButtons";
import ToggleBackground from "./components/ToggleBackground";
import DoubleBackChange from "./components/DoubleBackChange";

function App() { 
  let initialColor = "white";

  const[backColor, setBackColor] = useState({color: initialColor, state: false});

  const handleBackColorChange = (color) => {
    setBackColor(currentState => ({
      color: currentState.color !== color ? color : initialColor,
      state: !currentState.state
    }));
  };

  return (
    <main style={{backgroundColor: backColor.color}}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5em"}}>
        <ToggleButtons/>
        <ToggleBackground 
          changeBackColor={() => handleBackColorChange("blue")} 
          text={backColor.state ? "Color Changed" : "Change Color"}
        />
        <DoubleBackChange/>
      </div>
    </main>
  )
}

export default App