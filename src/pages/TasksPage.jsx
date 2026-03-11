import {TasksProvider} from "../context/TasksContext.jsx";
import ToDo from "../components/ToDo/ToDo.jsx";

const TasksPage = () => {
  return (
      <TasksProvider>
        <ToDo />
      </TasksProvider>
  )
}

export default TasksPage