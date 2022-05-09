import Intro from "./Intro.jsx";
import Category from "./Category.jsx";

import aviationImg from "./aviation.jpg";
import personalImg from "./personal.jpg";
import programmingImg from "./programming.jpg";


const homeContentStyle = "text-center";
const categoriesContainerStyle = "flex justify-center mt-60";


export default function Home(){
    return(
        <div className={homeContentStyle}>
            <Intro />

            <div className={categoriesContainerStyle}>
                <Category title="Aviation" navLink="aviation" backgroundImg={aviationImg}/>
                <Category title="Personal" navLink="personal" backgroundImg={personalImg}/>
                <Category title="Programming" navLink="programming" backgroundImg={programmingImg}/>
            </div>

        </div>
    )
}