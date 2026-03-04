import {memo, useContext} from 'react'
import ToDoItem from "./ToDoItem.jsx";
import {TaskContext} from "../context/TasksContext.jsx";

const ToDoList = () => {
  const {
    tasks,
    filteredTasks,
  } = useContext(TaskContext)

  const hasTasks = tasks.length > 0
  const isEmptyFilteredTasks = filteredTasks?.length === 0

  if (!hasTasks) {
    return <div className="todo__empty-message">There are not tasks yet</div>
  }

  if (hasTasks && isEmptyFilteredTasks) {
    return <div className="todo__empty-message">Tasks not found</div>
  }

  return (
    <ul className="todo__list">
      {(filteredTasks ?? tasks).map((task) => (
        <ToDoItem
          className="todo__item"
          key={task.id}
          {...task}
        />
      ))}
    </ul>
  )
}

export default memo(ToDoList)