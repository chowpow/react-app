import {FaTimes} from "react-icons/fa"

const Task = ({singleTask, onDelete, onToggle}) => {
    return (
        <div className = {`task ${singleTask.reminder ? "reminder" : ""}`} onDoubleClick = {() => 
        onToggle(singleTask.id)}>
            <h3>{singleTask.text} <FaTimes style = {{color: "black",
            cursor: "pointer"}} 
            onClick = {() => onDelete(singleTask.id)}/></h3>
            <p>{singleTask.day}</p>
        </div>
    )
}

export default Task
