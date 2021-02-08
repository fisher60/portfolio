import "./home.css";

import Intro from "./intro.jsx";
import Category from "./category.jsx";

import aviationImg from "./aviation.jpg";
import personalImg from "./personal.jpg";
import programmingImg from "./programming.jpg";

export default function Home(){
    return(
        <div className="home-content">
            <Intro />

            <div className="categories-container">
                <Category title="Aviation" navLink="aviation" backgroundImg={aviationImg}/>
                <Category title="Personal" navLink="personal" backgroundImg={personalImg}/>
                <Category title="Programming" navLink="programming" backgroundImg={programmingImg}/>
            </div>

        </div>
    )
}