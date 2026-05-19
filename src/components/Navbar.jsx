import React from "react";
import {Link} from "react-router-dom"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Navbar.css'
import logo1 from '../assets/logo1.png'
function Navbar(){
    return (
        <div className="navbar">
            <img src={logo1} alt="logo"/>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/add'>Add</Link></li>
                <li><Link to='/modify'>Modify</Link></li>
                <li><Link to='/delete'>Delete</Link></li>
            </ul>
        </div>
    );
}

export default Navbar
