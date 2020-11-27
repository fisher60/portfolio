import React from 'react';
import { Link } from 'react-router-dom';

import homeIcon from "./home.png";
import "./navbar.css";

export default function Navbar(){
    return(
        <div className="nav">
            <div className="icon">
                <Link to="/">
                    <img src={homeIcon} alt="home icon"/>
                </Link>
            </div>

            <div className="icon">
                <Link to="/about">
                    <img src={homeIcon} alt="home icon"/>
                </Link>
            </div>

        </div>
    )
}
