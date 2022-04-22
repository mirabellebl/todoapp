import React from "react";
import {Link} from "react-router-dom"

function NavBar(){
    return(
        <div className="navbar">
            <ul>
                <li>
                    <Link to="/registration">Sign Up</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;