export default function ToggleBackground({changeBackColor, text}) {

    return(
        <button 
            style={{color: "lightcoral"}}
            onClick={changeBackColor}
        >
            {text}
        </button>
    );
};