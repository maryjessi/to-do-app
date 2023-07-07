import AddTask from "./component/AddTask";
import { useState } from "react";
import TaskList from "./component/TaskList";

const App = () => {

  let [newTaskList, setTaskList] = useState([]);
    let [newTask, setTask] = useState({
        task_name: "",
    });


    let inputChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        console.log(value, name);

        let _newTask = {...newTask};
        _newTask[name] = value;   // _newTask["task_name"] = "Workout";
        // updation
        setTask(_newTask);
    };

    let saveNewTask = (event) => {
        event.preventDefault();
        
        let _newTaskList = [...newTaskList, newTask];
        setTaskList(_newTaskList);
        setTask({task_name: ""});
    };

  return (
    <>
      <AddTask 
        saveNewTask = {saveNewTask}
        inputChange = {inputChange}
        newTask = {newTask}
      />
      <center>
      <div className="card">
      <TaskList newTaskList={newTaskList}/>
      </div>
      </center>
    </>
  )
  }


export default App;
