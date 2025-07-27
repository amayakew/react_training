import LeaderDetails from "./LeaderDetails";
import PlayerDetails from "./PlayerDetails";

export default function GamesScore({ player1, player2 }) {
  let winner;
  if (player1.score > player2.score) {
    winner = player1.playerName;
  } else if (player2.score > player1.score) {
    winner = player2.playerName;
  } else {
    winner = "Tie";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid",
        borderColor: "grey",
        padding: "2em",
      }}
    >
      <LeaderDetails leader={winner} />
      <div className="gamePlayersWrap">
        <PlayerDetails playerInfo={player1} />
        <PlayerDetails playerInfo={player2} />
      </div>
    </div>
  );
}
