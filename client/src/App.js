import React from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Task from './pages/Task';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todolist' element={<TodoList />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
        <Route path='/task/:id' element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
