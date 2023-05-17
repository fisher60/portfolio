import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import homeIcon from "./home.png";
import arrowIcon from "./right-arrow.png";
import "./navbar.css";

export default class Navbar extends Component{
    state = {
            navClass: "collapsed",
            toggle: false
        }

    toggleCollapse = () => {
        this.setState({navClass: this.state.toggle ? "collapsed" : "extended", toggle: !this.state.toggle})
    }
    
    render(){
        let desktopNavbar = <div className="float-left h-screen">
            <div className={"absolute bg-orange-400 duration-500 h-full nav " + this.state.navClass}>
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
    
    let mobileNavbar = <div className={"flex justify-center w-screen bg-orange-400 h-20 p-4 duration-500 mobile-nav " + this.state.navClass}>
        <Link to="/">
            <img className="h-full" src={homeIcon} alt="home icon"/>
        </Link>

        <img 
            src={arrowIcon} 
            className={
                "absolute right-3 top-8 rotate-[270deg] w-10 duration-500 bg-black bg-opacity-0 rounded-r-lg" +
                "hover:bg-opacity-10 mobile-collapse-button " + this.state.navClass}
            onClick={this.toggleCollapse}
            alt="Navbar expand/collapse button"
        />
    </div>

        return(
            <>
                <div className="md:hidden">
                    {mobileNavbar}
                </div>

                <div className="hidden md:block">
                    {desktopNavbar}
                </div>
            </>
        )
    }
}
