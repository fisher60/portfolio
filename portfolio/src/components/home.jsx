import Category from "./category.jsx";

import aviationImg from "./aviation.jpg";
import personalImg from "./personal.jpg";
import programmingImg from "./programming.jpg";

export default function Home(){
    return(
        <div>
            <div className="flex flex-col">
                <p className="text-6xl ml-16">Hello,</p>
                <p className="text-4xl ml-32 pt-2">I am <span className="text-orange-400">Kyler</span></p>
                <p className="text-2xl ml-40 pt-2">I program and fly airplanes.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center pt-20">
                <Category title="Aviation" navLink="aviation" backgroundImg={aviationImg}/>
                <Category title="Personal" navLink="personal" backgroundImg={personalImg}/>
                <Category title="Programming" navLink="programming" backgroundImg={programmingImg}/>
            </div>

        </div>
    )
}