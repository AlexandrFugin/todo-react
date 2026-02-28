import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import ToDoInfo from "./ToDoInfo.jsx";
import ToDoList from "./ToDoList.jsx";
import {useEffect, useState} from "react";

const ToDo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')

    if (savedTasks) {
      return JSON.parse(savedTasks)
    }

    return [
      { id: 'task-1', title: 'Купить молоко', isDone: false },
      { id: 'task-2', title: 'Погладить кошку', isDone: true },
    ]
  })

  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

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

  const addTask = () => {
    if (newTaskTitle.trim().length > 0) {
      const newTask = {
        id: crypto?.randomUUID() ?? Date.now().toString(),
        title: newTaskTitle,
        isDone: false
      }

      setTasks([...tasks, newTask])
      setNewTaskTitle('')
      setSearchQuery('')
    }
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  const clearSearchQuery = searchQuery.trim().toLowerCase()
  const filteredTasks = clearSearchQuery.length > 0
      ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery))
      : null

 return (
   <div className="todo">
     <h1 className="todo__title">To Do List</h1>
     <AddTaskForm
         addTask={addTask}
         newTaskTitle={newTaskTitle}
         setNewTaskTitle={setNewTaskTitle}
     />
     <SearchTaskForm
         searchQuery={searchQuery}
         setSearchQuery={setSearchQuery}
     />
     <ToDoInfo
         total={tasks.length}
         done={tasks.filter(({isDone}) => isDone).length}
         onDeleteAllButtonClick={deleteAllTasks}
     />
     <ToDoList
         tasks={tasks}
         filteredTasks={filteredTasks}
         onDeleteTaskButtonClick={deleteTask}
         onTaskCompleteChange={toggleTaskComplete}
     />
   </div>
 )
}

export default ToDo