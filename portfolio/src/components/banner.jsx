import { useLayoutEffect, useRef } from "react";
import {gsap} from "gsap";

import LoopText from "./loopText";
import {GITHUB_URL, LINKEDIN_URL} from "./constants";

import airplaneImage from "./airplane.png";
import githubLogo from "./github.svg";
import linkedinLogo from "./linkedin.svg";

export default function Banner() {
    const airplaneRef = useRef();
    const tl = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            tl.current = gsap.timeline()
            .fromTo(airplaneRef.current, {
                y: 400,
                duration: 6
            },
            {
                y: 0,
                duration: 3,
                ease: "back"
            })
        }, airplaneRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="w-screen flex flex-col justify-center items-center px-6 py-6 md:px-0">
            <h1 className="text-8xl text-center md:text-9xl">Kyler Roloff</h1>
            
            <h1 className="text-4xl mt-6">
                <LoopText />
            </h1>

            <div className="flex justify-center w-screen md:text-center md:mt-12">
                <div className="w-full md:w-1/2 p-8 md:p-0">
                    <p className="text-xl mt-4">
                        I am a software developer who is passionate about learning. I have a wide variety of interests and hobbies
                        that I often incorporate into technology. 
                        <br className="md:hidden" /> <br className="md:hidden" />
                        Much of my free time is spent programming for open-source software and personal
                        projects. I also love gaming, flying airplanes, and spending time with my dog.
                    </p>
                </div>

            </div>

            <div className="avatar mt-12 md:mt-20">
                <div className="w-64 p-3 bg-white bg-opacity-30 rounded-full">
                    <img src={airplaneImage} ref={airplaneRef} alt="Pixel art of a fighter jet airplane"/>
                </div>
            </div>

            <div className="flex justify-center w-1/2 h-12 mt-12 space-x-6">
                <a className="h-full" href={GITHUB_URL} rel="noreferrer" target="_blank"><img className="h-full" src={githubLogo} alt="The Github logo"/></a>
                <a className="h-full" href={LINKEDIN_URL} rel="noreferrer" target="_blank"><img className="h-full scale-90" src={linkedinLogo} alt="The Linkedin logo"/></a>
            </div>
            
        </div>
    )
}