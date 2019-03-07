import React ,{Component}from "react";
import TaskFrom from "./TaskForm/TaskForm";
import './Task.css';
import TaskDetails from "./TaskDetails/TaskDetails";


class Tasks extends Component{
    render(){
        return(
            <div className="main_container">
                    <div id="left_side">
                        <TaskFrom />
                    </div>
                    <div id="right_side">
                        <TaskDetails />
                    </div>
            </div>
        )
    }
}


export default Tasks;