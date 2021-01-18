import { useState } from "react";
import "./category.css";
import sampleImg from "./sample.jpg";

export default function Category(props){
    const [isHovered, setIsHovered] = useState(false);
    return(
        <div className="category-container">
            <div className="category"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <div className="category-title"><h3>{ props.title }</h3></div>
                <img className={"category-img" + (isHovered ? " hovered" : "")} alt="background" src={sampleImg} />
            </div>
        </div>
    )

}