import { createContext } from "react";
import useTasks from '../hooks/useTasks.js'
import useIncompleteTaskScroll from "../hooks/useIncompleteTaskScroll.js";

export const TaskContext = createContext({})

export const TasksProvider = (props) => {
  const {children} = props

  const {
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,

    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask,
  } = useTasks()

  const {
    firstIncompleteTaskRef,
    firstIncompleteTaskId,
  } = useIncompleteTaskScroll(tasks)

  return (
      <TaskContext.Provider
          value={{
            tasks,
            filteredTasks,
            firstIncompleteTaskRef,
            firstIncompleteTaskId,
            deleteTask,
            deleteAllTasks,
            toggleTaskComplete,

            newTaskTitle,
            setNewTaskTitle,
            searchQuery,
            setSearchQuery,
            newTaskInputRef,
            addTask,
          }}
      >
        {children}
      </TaskContext.Provider>
  )
}