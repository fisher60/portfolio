import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./category.css";

export default function Category(props){
    const [isHovered, setIsHovered] = useState(false);
    return(
        <div className="w-screen md:w-[25vw]">
            <div className={
                    "relative h-[50vh] md:h-[20vw] border-solid border-transparent rounded-2xl border-8 " +
                    "bg-transparent overflow-hidden"
                }
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
                <NavLink 
                    to={"/" + props.navLink} 
                    className="absolute z-10 bg-black bg-opacity-40 left-2/4 translate-x-[-50%] w-full h-full no-underline text-white"
                >
                    <h3 className="flex w-full h-full items-center justify-center text-4xl">{ props.title }</h3>
                </NavLink>
                <img className={"relative h-full max-w-none duration-700 category-img" + (isHovered ? " hovered" : "")} alt="background" src={props.backgroundImg} />
            </div>
        </div>
    )

}