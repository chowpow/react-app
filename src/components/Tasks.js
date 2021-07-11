import Task from "./Task"

const Tasks = ({listOfTasks}) => {
    return (
        <>
           {listOfTasks.map(task => (
           <Task key={task.id} singleTask ={task}/> ))} 
        </>
    )
}

// const Tasks = () => {
   
// }

export default Tasks
