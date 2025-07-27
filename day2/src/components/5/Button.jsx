export default function Button({buttonIsDisabled, buttonClick}) {
    return <button 
                style={{backgroundColor: buttonIsDisabled ? "lightcoral" : "lightgreen"}} 
                disabled={buttonIsDisabled} 
                onClick={buttonClick}
            >
                +
            </button>
};