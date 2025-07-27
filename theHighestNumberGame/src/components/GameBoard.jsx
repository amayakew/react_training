import { useState } from "react";

export default function GameBoard({playerOneName, playerTwoName, onSubmit}) {
    const [playerOneNumber, setPlayerOneNumber] = useState('');
    const [playerTwoNumber, setPlayerTwoNumber] = useState('');

    const getRoundWinner = () => {
        if (playerOneNumber > playerTwoNumber) return playerOneName;
        if (playerTwoNumber > playerOneNumber) return playerTwoName;
        return;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(getRoundWinner());
        setPlayerOneNumber('');
        setPlayerTwoNumber('');
    }

    const buttonIsActive = playerOneNumber !== '' && playerTwoNumber !== '';

    return (
        <form className="gameContainer" onSubmit={handleSubmit}>
            <div className="gamePlayersWrap">
                <div className="gameInput">
                    <label htmlFor="player1">{playerOneName}: </label>
                    <input 
                        id="player1" 
                        type="number" 
                        required 
                        value={playerOneNumber} 
                        onChange={(e) => setPlayerOneNumber(e.target.value === "" ? '' : Number(e.target.value))}
                    /> 
                </div>
                <div className="gameInput">
                    <label htmlFor="player2">{playerTwoName}: </label>
                    <input 
                        id="player2" 
                        type="number" 
                        required 
                        value={playerTwoNumber} 
                        onChange={(e) => setPlayerTwoNumber(e.target.value === "" ? '' : Number(e.target.value))}
                    />
                </div>  
            </div>

            <button type="submit" disabled={!buttonIsActive} style={{backgroundColor: !buttonIsActive ? "lightgray" : "white"}}> Play</button>
        </form>
    );
};