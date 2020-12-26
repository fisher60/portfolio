import "./home.css";
import Category from "./category.jsx";

export default function Home(){
    return(
        <div className="home-content">
            <div className="home-title">
                <h1>Intro</h1>
            </div>
                <div className="categories-container">
                <Category title="Programming" />
                <Category title="Personal" />
                <Category title="Portfolio" />
            </div>
        </div>
    )
}