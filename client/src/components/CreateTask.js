import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateTask = ({modal, toggle}) => {
    let navigate = useNavigate();
    
    const initialValues = {
        taskName: "",
        description: "",
    };

    const validationSchema = Yup.object().shape({
        taskName: Yup.string(),
        description: Yup.string(),
    })

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/tasks", data, {
            headers: {
                accessToken: sessionStorage.getItem("accessToken"),
            },
        }).then((response) => {
            navigate("/todolist");
        });
    };

    

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>
            Create Task
            </ModalHeader>
            <ModalBody>
                <Formik 
                    initialValues={initialValues} 
                    onSubmit={onSubmit} 
                    validationSchema={validationSchema}
                >
                <Form>
                    <div className="form-group">
                        <label>Task Name:</label>
                        <Field 
                            autocomplete="off"
                            className="form-control"
                            id="inputCreateTask" 
                            name="taskName" 
                            placeholder="" 
                        />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <Field 
                            autocomplete="off"
                            className="form-control"
                            id="inputCreateTask" 
                            name="description" 
                            placeholder="" 
                        />
                    </div>

                    <Button
                        color="primary"
                        type="submit"
                        onClick={toggle}
                    >
                    Create
                    </Button>
                    {' '}
                    <Button onClick={toggle}>
                    Cancel
                    </Button>

                </Form>
                </Formik>
            </ModalBody>
        </Modal>
    );
}

export default CreateTask;
