import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
return (
    <nav className="navbar">
    <h1 className="navbar-logo"> 
    <a href="/"> <img src="logo.jpeg" alt="Logo"/> </a></h1>
    <ul className="navbar-links">
    <li><Link to="/" className="navbar-link">Counter</Link></li>
    <li><Link to="/movie" className="navbar-link">Movie</Link></li>
    <li><Link to="/todo" className="navbar-link">To-Do</Link></li>
    </ul>
    </nav>
);
}
