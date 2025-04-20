import React  from "react";
import { Link,NavLink } from 'react-router-dom';
import Policy from './../pages/Policy';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";



const Header = ()=>{
    const getUsers = async ()=>{
        const response = await fetch('http://localhost:8080/api/v1/auth/getusers', {mode:'cors'});
        const data = await response.json();
        console.log(data)
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand app-brand" href="#">Ecommers Application</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/about'>About</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/contact'>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link active" aria-current="page" to='/login'>Login</NavLink>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    )
}

export default Header