const tasks = [
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
]

const Tasks = () => {
    return (
        <>
           {tasks.map(task => (
           <h3>{task.text}</h3>))} 
        </>
    )
}

export default Tasks
