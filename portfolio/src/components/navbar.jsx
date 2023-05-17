import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import homeIcon from "./home.png";
import arrowIcon from "./right-arrow.png";
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
            <div className="float-left h-screen">
                <div className={"absolute bg-[#465d82] duration-500 h-full nav " + this.state.navClass}>
                    <div className={"duration-500 icon " + this.state.navClass}>
                        <Link to="/">
                            <img className="w-full bg-white bg-opacity-10 mt-2 rounded-md" src={homeIcon} alt="home icon"/>
                        </Link>
                    </div>
                </div>

                <div>
                    <img 
                        src={arrowIcon} 
                        className={
                            "absolute bottom-2/4 w-10 duration-500 bg-black bg-opacity-0 rounded-r-lg" +
                            "hover:bg-opacity-10 collapse-button " + this.state.navClass} 
                        onClick={this.toggleCollapse} 
                        alt="Navbar expand/collapse button"
                    />
                </div>

            </div>
        )
    }
}
