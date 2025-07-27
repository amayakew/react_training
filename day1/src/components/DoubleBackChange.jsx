import ToggleBackground from "./ToggleBackground";
import { useState } from "react";


// export default function DoubleBackChange() {
//     let initialColor = "white";

//     const[divColor, setDivColor] = useState(initialColor);
    
//     const handleDivBackChange = (color) => {
//         if(divColor === "blue" && color === "yellow" || divColor === "yellow" && color === "blue"){
//             setDivColor("green");
//         } else if (divColor === color){
//             setDivColor(initialColor);
//         } else if (divColor === "green" && color === "blue"){
//             setDivColor("yellow");
//         } else if (divColor === "green" && color === "yellow"){
//             setDivColor("blue");
//         } else {
//             setDivColor(color);
//         }
//     };
    
//     return(
//         <div style={{padding: "1.5em", display: "flex", gap: "1.5em", backgroundColor: divColor}}>
//             <ToggleBackground 
//                 changeBackColor={()=>handleDivBackChange("blue")} 
//                 text={divColor === "blue" || divColor === "green" ? "Color Changed" : "Change Color"}
//             />
//             <ToggleBackground 
//                 changeBackColor={()=>handleDivBackChange("yellow")} 
//                 text={divColor === "yellow" || divColor === "green" ? "Color Changed" : "Change Color"}
//             />
//         </div>
//     );
// };




const getColor = (yellowIsOn, blueIsOn) => {
    if (yellowIsOn && blueIsOn) return 'green';
    if (yellowIsOn) return 'yellow';
    if (blueIsOn) return 'blue';
    return 'white'
}

export default function DoubleBackChange() {
    const [yellowCollorOn, setYellowColorOn] = useState(false);
    const [blueCollorOn, setBlueColorOn] = useState(false);
    let color = getColor(yellowCollorOn, blueCollorOn);

    return(
        <div style={{padding: "1.5em", display: "flex", gap: "1.5em", backgroundColor: color}}>
            <ToggleBackground 
                changeBackColor={()=>setBlueColorOn(state => !state)} 
                text={blueCollorOn ? "Color Changed" : "Change Color"}
            />
            <ToggleBackground 
                changeBackColor={()=>setYellowColorOn(state => !state)} 
                text={yellowCollorOn ? "Color Changed" : "Change Color"}
            />
        </div>
    );
};




