import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

function Home() {
    return (
        <div>
            <NavBar />
            <div className='homepage'>
            <h1>To do Homepage</h1>
            <br></br>
            <p>Login to continue or sign up if you're new</p>
            </div>
        </div>
    )
}

export default Home;