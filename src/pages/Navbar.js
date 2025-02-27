import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active">Home</Link> 
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link active">About</Link> 
                    </li>
                    <li className="nav-item">
                        <Link to="/Contact" className="nav-link active">Contact</Link> 
                    </li>
                    <li className="nav-item">
                        <Link to="/Students" className="nav-link active">Students</Link> 
                    </li>
                    
                   
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;