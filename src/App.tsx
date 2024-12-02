import AddToDo from "./components/AddToDo"
import {Todos }from "./components/Todos"


const App = () => {
  return (
    <main>
      <h1>TODO REACT + TYPESCRIPT</h1>
      <AddToDo/>
      <Todos  />
    </main>
  )
}

export default App