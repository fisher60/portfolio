import LoopText from "./loopText";
import {GITHUB_URL, LINKEDIN_URL} from "./constants";

import airplaneImage from "./airplane.png";
import githubLogo from "./github.svg";
import linkedinLogo from "./linkedin.svg";

export default function Banner() {
    return (
        <div className="w-screen flex flex-col justify-center items-center px-6 py-6 md:px-0">
            <h1 className="text-9xl">Kyler Roloff</h1>
            
            <h1 className="text-4xl mt-6">
                <LoopText />
            </h1>

            <div className="avatar mt-12">
                <div className="w-64 p-3 bg-white bg-opacity-30 rounded-full">
                    <img src={airplaneImage} alt="Pixel art of a fighter jet airplane"/>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-screen justify-center p-4 md:p-0 mt-6 space-y-12 md:space-x-12 md:space-y-0">
                <div className="flex flex-col items-center">
                    <h1 className="text-5xl">Who I Am</h1>
                    <div className="divider md:w-[460px] self-center" />
                    <p className="md:w-[460px] text-xl">
                        I am a software developer who loves learning. I have a wide variety of interests and hobbies
                        that span from gardening and dog training to aviation and technology.
                    </p>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-5xl">What I Do</h1>
                    <div className="divider md:w-[460px] self-center" />
                    <p className="md:w-[460px] text-xl">
                        I spend my free time refining my programmign skills through open-source software and personal
                        projects. I also love gaming, flying airplanes, and spending time with my dog.
                    </p>
                </div>

            </div>

            <div className="flex justify-center w-1/2 h-12 mt-12 space-x-6">
                <a href={GITHUB_URL} rel="noreferrer" target="_blank"><img className="h-full" src={githubLogo} alt="The Github logo"/></a>
                <a href={LINKEDIN_URL} rel="noreferrer" target="_blank"><img className="h-full scale-90" src={linkedinLogo} alt="The Linkedin logo"/></a>
            </div>
            
        </div>
    )
}