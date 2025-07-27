import HighestNumberGame from "./components/HighestNumberGame"

function App() {

  return (
    <main style={{display: "flex", flexDirection:"column", gap:"2em", alignItems: "center"}}>
      <h1>Who Knows The Higher Number?</h1>
      <HighestNumberGame/>
    </main>
  )
}

export default App