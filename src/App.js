import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect } from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

// Fetching tasks
const fetchTasks = async () => {
  const res = await fetch("http://localhost:5000/tasks")
  const data = await res.json()

  return data
}

const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()

  return data
}

// Method for deleting tasks
const deleteTask = async (id) => {
  // Delete request to server
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE',
  })
  setTasks(tasks.filter(task => task.id !== id))
}

// Method for adding tasks
const addTask = async (task) => {
  // Post request for adding data to server
  const responce = await fetch(`http://localhost:5000/tasks`, {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(task),
  })

  const data = await responce.json()
  // const id = Math.floor(Math.random() * 10000) + 1

  // const newTask = {id, ...task}
  setTasks([...tasks, data])
}

// Toggle reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id)
  const updateTask = {...taskToToggle, reminder: !taskToToggle.reminder}
  
  // Put request to update server
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(updateTask)
  })

  const data = await res.json()
  
  setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: data.reminder} : task))
}

return (
  <div className="container">
    <Header onAdd = {() => 
    setShowAddTask(!showAddTask)} 
    showAdd = {showAddTask}/>
    { showAddTask && <AddTask onAdd = {addTask}/>}
    {tasks.length > 0 ? (
      <Tasks listOfTasks={tasks} onDelete = {deleteTask}
      onToggle = {toggleReminder}/>
    ): (
      "No tasks to show"
    )}
  </div>
);
}

export default App;
