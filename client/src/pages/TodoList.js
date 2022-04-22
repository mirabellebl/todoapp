import React, { useDebugValue, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import CreateTask from "../components/CreateTask";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
    const [modal, setModal] = useState(false);
    const [listOfTasks, setListOfTasks] = useState([]);

    let navigate = useNavigate();

    const toggle = () => {
        setModal(!modal);
    }

    useEffect(() => {
        axios.get("http://localhost:3001/tasks").then((response) => {
            setListOfTasks(response.data);
        });
    }, []);

    return (
        <>
            <div className="header text-center">
                <h3>Todo List</h3>
                <button className="btn btn-primary mt-3"
                onClick={() => setModal(true)}>+ Create New Task</button>
            </div>
            <CreateTask toggle = {toggle} modal = {modal} />
            
            {listOfTasks.map((value, key) => {
                return (
                    <div className="task-container">
                        <div className="task" onClick={() => navigate(`/task/${value.id}`)}>
                            <div className="taskName"> {value.taskName} </div>
                            <div className="taskDescription"> 
                            {value.description} 
                            </div>
                        </div>
                    </div>
                );
            })} 
        </>
    );
};

export default TodoList;