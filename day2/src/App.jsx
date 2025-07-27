import ListExerciseContainer from "./components/5/ListExerciseContainer"
import FullName from "./components/FullName"
import InputToText from "./components/InputToText"

function App() {

  return (
    <main>
      <InputToText labelText="First Heading: "/>
      <InputToText labelText="Second Heading: "/>
      <FullName/>
      <div style={{margin: "1.5em"}}>
        <ListExerciseContainer/>
      </div>
    </main>
  )
}

export default App
