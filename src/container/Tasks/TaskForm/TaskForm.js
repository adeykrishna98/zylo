import React, { Component } from "react";
import Input from "../../../component/Input/Input";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class TaskForm extends Component {
    state = {
        startDate: new Date(),
        controls: [
            {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ''
                },
                value: '',
                label: "Task name",
                cType: "title"
            },
            {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: ''
                },
                value: '',
                label: "Task Description",
                cType: "description"
            }
        ]
    }

    handleChangeDate = (date) => {

        this.setState({
            startDate: date
        });
    }
    inputChangeHandler = (event, selectedInput) => {
        const updatedForm = [
            ...this.state.controls,
        ]
        updatedForm.forEach(el => {
            if (el.cType === selectedInput) {
                el.value = event.target.value;
            }
        })

        this.setState({
            controls: updatedForm,
        })
    }


    submitHandler = (event) => {
        event.preventDefault();
        let task1 = "";
        let description = "";
        this.state.controls.forEach(el => {

            if (el.cType === "title") {
                task1 = el.value;
            }
            if (el.cType === "description") {
                description = el.value;
            }

        })

        if (task1 !== "") {
            let task = {
                title: task1,
                description: description,
                dateTime: this.state.startDate
            }
            var tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            tasks.push(task)
            localStorage.setItem("tasks", JSON.stringify(tasks));


            this.state.controls.forEach(el => {
                    el.value = ""
            })
           
            this.setState({
                controls:this.state.controls
            })
        }
    }
    render() {
        let form = (
            <form onSubmit={this.submitHandler}>
                {this.state.controls.map(formElement => {
                    return <Input
                        floatLabel="floating-label"
                        key={formElement.cType}
                        elementType={formElement.elementType}
                        elementConfig={formElement.elementConfig}
                        invalid={!formElement.valid}
                        shouldValidate={formElement.validation}
                        touched={formElement.touched}
                        label={formElement.label}
                        value={formElement.value}
                        changed={(event) => this.inputChangeHandler(event, formElement.cType)}
                    />
                })}
                <div>
                    <DatePicker className="floating-input1"
                        selected={this.state.startDate}
                        onChange={this.handleChangeDate}

                    />
                    <DatePicker className="floating-input1"
                        selected={this.state.startDate}
                        onChange={this.handleChangeDate}
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        dateFormat="h:mm aa"
                        timeCaption="Time"
                    />
                </div>

                <button className="create_task" >create task </button>
            </form>
        )
        return (
            <div className="createTaskFrom">
                <div className="form-wrapper">
                    <div className="task-header">
                        <h2>
                            Task Creater
							</h2>
                    </div>
                    {form}
                </div>
            </div>
        )
    }
};


export default TaskForm;