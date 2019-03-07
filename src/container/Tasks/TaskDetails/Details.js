import React from "react";



const Details =(props)=>{
    console.log(props.task)
    return(
        <div className="task_details">
            <div className="task_text">{props.task.title}</div>
            
            <div className="task_text">{new Date(props.task.dateTime).toLocaleTimeString()}</div>
        </div>
    )
}

export default Details;