import { useState } from "react";

export default function ToggleButton({onText = "On", offText = "Off"}) {
    const [buttonState, setButtonState] = useState(true);

    const handleButtonClick = () => {
        setButtonState(currentButtonState => !currentButtonState);
    };

    return (
        <button 
            style={{backgroundColor: buttonState ? "lightgreen" : "lightcoral"}}
            onClick={handleButtonClick}
        >
            {buttonState ? onText : offText}
        </button>
    );
};