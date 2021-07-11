
const Task = ({singleTask}) => {
    return (
        <div className = "task">
            <h3>{singleTask.text}</h3>
            <p>{singleTask.day}</p>
        </div>
    )
}

export default Task
