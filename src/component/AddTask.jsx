

function AddTask(props) {
        let {
            saveNewTask,
            inputChange,
            newTask
        } = props;

    return (
        <>
            <center>
            <div className="card">
                <div className="card-body">
                    <h3 className="card-title text-danger">Plan Out Activities</h3>
                    <p className="card-text text-primary">
                        Happy Day ..!
                    </p>             
                    <label>
                    <input id="task-ip" type="text" className="form-control" name="task_name" value={newTask.task_name} onChange={inputChange} />
                    </label>
                    <button className="btn btn-success" onClick={saveNewTask} >Add</button>
                </div>
            </div>
            </center>
        </>
    )
}

export default AddTask;