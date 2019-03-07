import React from "react";

let inputElement =  null;
const Input =(props)=>{
    switch (props.elementType) {
        case ("input"):
            inputElement = <input
                className="floating-input"
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
                autoComplete="true" />;
            break;
    }
    return(
        <div className="floating-label">
       
        {inputElement}
        <label>{props.label}</label>
    </div>
    )
}

export default Input;