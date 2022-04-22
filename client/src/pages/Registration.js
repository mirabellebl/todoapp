import React, { useState } from 'react';
import axios from 'axios';
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';
import {Button} from "reactstrap";
import NavBar from '../components/NavBar';

function Registration() {

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
      username: Yup.string().min(3).max(15).required(),
      password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    })
  };

  return (
    <div>
      <NavBar />
      <Formik 
        initialValues={initialValues} 
        onSubmit={onSubmit} 
        validationSchema={validationSchema}
      >
      <Form className='formContainer'>
          <div className="form-group">
            <label>Username:</label>
            <ErrorMessage name='username' component='span' />
            <Field 
              autocomplete="off"
              className="form-control"
              id="inputCreateTask" 
              name="username" 
              placeholder="Create a username" 
            />
          </div>
          <div className="form-group">
          <label>Description:</label>
          <ErrorMessage name='password' component='span' />
            <Field 
              autocomplete="off"
              type="password"
              className="form-control"
              id="inputCreateTask" 
              name="password" 
              placeholder="4 to 20 characters" 
            />
          </div>
            <Button
              color="primary"
              type="submit"
            >
            Register
            </Button>

      </Form>
      </Formik>
      
    </div>
  )
}

export default Registration;