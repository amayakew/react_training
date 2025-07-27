import GameBoard from "./GameBoard";
import PlayersRegistration from "./PlayersRegistration";
import GamesScore from "./results/GamesScore";
import { useState } from "react";

export default function HighestNumberGame() {
  const [isRegistered, setIsRegistered] = useState(false);

  const [playerOne, setPlayerOne] = useState({
    playerName: "",
    score: 0,
  });
  const [playerTwo, setPlayerTwo] = useState({
    playerName: "",
    score: 0,
  });

  const handleRegistration = (player1Name, player2Name) => {
    setPlayerOne((currentPlayer) => ({
      ...currentPlayer,
      playerName: player1Name,
    }));
    setPlayerTwo((currentPlayer) => ({
      ...currentPlayer,
      playerName: player2Name,
    }));
    setIsRegistered(true);
  };

  const handleSubmit = (roundWinner) => {
    if (roundWinner === playerOne.playerName) {
      setPlayerOne((currentPlayer) => ({
        ...currentPlayer,
        score: currentPlayer.score + 1,
      }));
    } else if (roundWinner === playerTwo.playerName) {
      setPlayerTwo((currentPlayer) => ({
        ...currentPlayer,
        score: currentPlayer.score + 1,
      }));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "3em",
      }}
    >
      {!isRegistered && <PlayersRegistration onSubmit={(player1Name, player2Name) => handleRegistration(player1Name, player2Name)}/>}
      {isRegistered && 
            <>
              <GamesScore player1={playerOne} player2={playerTwo} />
              <GameBoard
                playerOneName={playerOne.playerName}
                playerTwoName={playerTwo.playerName}
                onSubmit={(roundWinner) => handleSubmit(roundWinner)}
              />
            </>

      }
    </div>
  );
}
