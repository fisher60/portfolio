import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import homeIcon from "./home.png";
import "./navbar.css";

export default class Navbar extends Component{
    state = {
            // navWidth: 65,
            navClass: "collapsed",
            // buttonWidth: 20,
            toggle: false
        }

    toggleCollapse = () => {
        this.setState({navClass: this.state.toggle ? "collapsed" : "extended", toggle: !this.state.toggle})
    }
    render(){
        return(
            <div className={"nav " + this.state.navClass}>
                <div className={"icon " + this.state.navClass}>
                    <Link to="/">
                        <img src={homeIcon} alt="home icon"/>
                    </Link>
                </div>

                <button className={"collapse-button " + this.state.navClass} onClick={this.toggleCollapse}>E/C</button>

            </div>
        )
    }
}
