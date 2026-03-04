import ToDo from "./components/ToDo.jsx";
import {TasksProvider} from "./context/TasksContext.jsx";

const App = () => {
  return (
    <TasksProvider>
      <ToDo />
    </TasksProvider>
  )
}

export default App
