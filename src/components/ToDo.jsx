import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import ToDoInfo from "./ToDoInfo.jsx";
import ToDoList from "./ToDoList.jsx";
import {useState} from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState([
    { id: 'task-1', title: 'Купить молоко', isDone: false },
    { id: 'task-2', title: 'Погладить кошку', isDone: true },
  ])

  const [newTaskTitle, setNewTaskTitle] = useState('')

  const deleteAllTasks = () => {
    const isConfirmed = confirm('Are you sure you want to delete all')

    if (isConfirmed) {
      setTasks([])
    }
  }

  const deleteTask = (taskId) => {
    setTasks(
        tasks.filter((task) => task.id !== taskId)
    )
  }

  const toggleTaskComplete = (taskId, isDone) => {
    setTasks(
        tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, isDone }
          }

          return task
        })
    )
  }

  const filterTasks = (query) => {
    console.log(`Поиск: ${query}`)
  }

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false
      }

      setTasks([...tasks, newTask])
      setNewTaskTitle('')
    }
  }

 return (
   <div className="todo">
     <h1 className="todo__title">To Do List</h1>
     <AddTaskForm
         addTask={addTask}
         newTaskTitle={newTaskTitle}
         setNewTaskTitle={setNewTaskTitle}
     />
     <SearchTaskForm
         onSearchInput={filterTasks}
     />
     <ToDoInfo
         total={tasks.length}
         done={tasks.filter(({isDone}) => isDone).length}
         onDeleteAllButtonClick={deleteAllTasks}
     />
     <ToDoList
         tasks={tasks}
         onDeleteTaskButtonClick={deleteTask}
         onTaskCompleteChange={toggleTaskComplete}
     />
   </div>
 )
}

export default ToDo