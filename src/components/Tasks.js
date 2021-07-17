import Task from "./Task"

const Tasks = ({listOfTasks, onDelete, onToggle}) => {
    return (
        <>
           {listOfTasks.map(task => (
           <Task key={task.id} singleTask ={task} 
           onDelete = {onDelete} onToggle = {onToggle}/> ))} 
        </>
    )
}

// const Tasks = () => {
   
// }

export default Tasks
