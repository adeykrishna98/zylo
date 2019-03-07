import React,{Component} from "react";
import Details from "./Details";


class  TaskDetails extends Component{
    state = {
        tasks:[]
    }

    componentWillUpdate(prevProps){
        
    }
    getAllTaks =()=>{
        let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        let newtasks =tasks.sort((a,b)=>{
            var c = new Date(a.dateTime);
            var d = new Date(b.dateTime);
            return c-d
        })
        this.setState({
            tasks:newtasks
        })
    }
    getTopThreeTasks=()=>{
        let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        tasks.sort((a,b)=>{
            let c = new Date(a.dateTime);
            let d = new Date(b.dateTime);
            return c-d
        })
        let newtasks = tasks.slice(0,3)
        this.setState({
            tasks:newtasks
        })
    }
    render(){
        console.log(this.state.tasks,"state update")
        let taskRender = null;
        if(this.state.tasks.length>0){
             taskRender = this.state.tasks.map((task,i)=>{
                return <Details key={i} task={task}/>
            })
        }

        
        return(
            <div className="button_wrapper">
                <button className="taskButtons upcoming" onClick={this.getTopThreeTasks}>upcoming</button>
                <button className="taskButtons" onClick={this.getAllTaks}>all</button>
                <div className="task_details_list">
                {taskRender}
                </div>
            </div>
        )
    }
}


export default TaskDetails;