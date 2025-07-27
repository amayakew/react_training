export default function PlayerDetails({playerInfo}) {
    return <p style={{margin: "1em", marginBottom: 0}}>{playerInfo.playerName}: {playerInfo.score}</p>;
};