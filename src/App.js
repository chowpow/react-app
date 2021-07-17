import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Appointment",
        day: "July 10th at 2:10pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Pickup dry cleaning",
        day: "July 28th at 5:30pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Interview",
        day: "July 30th at 1:00pm",
        reminder: false,
    },
])

const deleteTask = (id) => {
  // console.log("delete", id)
  setTasks(tasks.filter(task => task.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
}

return (
  <div className="container">
    <Header />
    <AddTask />
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
