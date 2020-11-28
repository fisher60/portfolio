import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import homeIcon from "./home.png";
import "./navbar.css";

export default class Navbar extends Component{
    state = {
            navWidth: 65,
            buttonWidth: 20,
            toggle: false
        }

    toggleCollapse = () => {
        this.setState({navWidth: this.state.toggle ? 65 : 250, toggle: this.state.toggle ? false : true})
    }
    render(){
        return(
            <div className="nav" style={{width: String(this.state.navWidth) + "px"}}>
                <div className="icon">
                    <Link to="/">
                        <img src={homeIcon} alt="home icon"/>
                    </Link>
                </div>

        <h1>{String(this.state.navWidth)}</h1>

                <div className="icon">
                    <Link to="/about">
                        <img src={homeIcon} alt="home icon"/>
                    </Link>
                </div>

                <button className="collapse-button" onClick={this.toggleCollapse} style={{marginLeft: String(this.state.navWidth - this.state.buttonWidth) + "px"}}>E/C</button>

            </div>
        )
    }
}
