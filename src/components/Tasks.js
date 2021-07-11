import Task from "./Task"

const Tasks = ({listOfTasks, onDelete}) => {
    return (
        <>
           {listOfTasks.map(task => (
           <Task key={task.id} singleTask ={task} 
           onDelete = {onDelete}/> ))} 
        </>
    )
}

// const Tasks = () => {
   
// }

export default Tasks
