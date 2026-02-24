import AddTaskForm from "./AddTaskForm.jsx";
import SearchTaskForm from "./SearchTaskForm.jsx";
import ToDoInfo from "./ToDoInfo.jsx";
import ToDoList from "./ToDoList.jsx";

const ToDo = () => {
  const tasks = [
    { id: 'task-1', title: 'Купить молоко', isDone: false },
    { id: 'task-2', title: 'Погладить кошку', isDone: true },
  ]

 return (
   <div className="todo">
     <h1 className="todo__title">To Do List</h1>
     <AddTaskForm />
     <SearchTaskForm />
     <ToDoInfo total={tasks.length} done={tasks.filter(({isDone}) => isDone).length} />
     <ToDoList tasks={tasks} />
   </div>
 )
}

export default ToDo