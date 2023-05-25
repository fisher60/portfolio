import Category from "./category.jsx";
import ProjectCarousel from "./projectCarousel.jsx";

import aviationImg from "./aviation.jpg";
import personalImg from "./personal.jpg";
import programmingImg from "./professional.jpg";

export default function Home(){
    return(
        <div className="md:h-screen overflow-y-auto">
            <div className="flex flex-col pt-4">
                <p className="text-6xl text-center md:text-left md:hidden md:ml-16">Hello</p>
                <p className="text-6xl hidden md:block ml-16">Hello,</p>

                <p className="text-4xl text-center md:text-left md:ml-32 pt-2">I am <span className="text-orange-400">Kyler</span></p>
                <p className="text-2xl text-center md:text-left md:ml-40 pt-2">I program and fly airplanes.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center md:space-x-5 pt-8">
                <Category title="Aviation" navLink="aviation" backgroundImg={aviationImg}/>
                <Category title="Personal" navLink="personal" backgroundImg={personalImg}/>
                <Category title="Professional" navLink="professional" backgroundImg={programmingImg}/>
            </div>

            <ProjectCarousel />

        </div>
    )
}