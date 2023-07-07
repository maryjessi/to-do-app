


const TaskList = (props) => {
    let {
        newTaskList
    } = props;

    return (
        <>
        {
            newTaskList.map((task, index) => {
                return (
                    <center key={index}>
                    <div className="card task-card">
                        <div className="card-body d-flex justify-content-between">
                            <p className="card-text h4" style={{color: "purple"}}>{task.task_name}</p>
                            <input type="checkbox" className="text-secondary" style={{width: "20px", height: "20px"}}/>
                        </div>
                    </div>
                    </center>
                )
            })
        }
        </>
    )
}




export default TaskList;