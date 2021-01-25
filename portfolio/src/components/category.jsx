import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./category.css";

export default function Category(props){
    const [isHovered, setIsHovered] = useState(false);
    return(
        <div className="category-container">
            <div className="category"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <NavLink to={"/" + props.navLink} className="category-title"><h3>{ props.title }</h3></NavLink>
                <img className={"category-img" + (isHovered ? " hovered" : "")} alt="background" src={props.backgroundImg} />
            </div>
        </div>
    )

}