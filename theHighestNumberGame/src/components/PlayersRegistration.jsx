import { useState } from "react";

export default function PlayersRegistration({onSubmit}) {
    const [playerOneName,setPlayerOneName] = useState("");
    const [playerTwoName,setPlayerTwoName] = useState("");
    
    const buttonIsActive = playerOneName !== '' && playerTwoName !== '';

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(playerOneName, playerTwoName);
    };

    return (
        <form className="gameContainer" onSubmit={handleSubmit}>
            <h2>Please, register to start the game: </h2>
            <div className="gamePlayersWrap">
                <div className="gameInput">
                    <label htmlFor="player1">Player 1:</label>
                    <input type="text" id="player1" required value={playerOneName} onChange={(e) => setPlayerOneName(e.target.value === "" ? "" : e.target.value)}/>
                </div>
                <div className="gameInput">
                    <label htmlFor="player2">Player 2:</label>
                    <input type="text" id="player2" required value={playerTwoName} onChange={(e) => setPlayerTwoName(e.target.value === "" ? "" : e.target.value)}/>
                </div>
            </div>
            <button type="submit" disabled={!buttonIsActive} style={{backgroundColor: !buttonIsActive ? "lightgray" : "white"}}>Sign In</button>
        </form>
    );
};