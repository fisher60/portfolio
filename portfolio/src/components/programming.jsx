import {GITHUB_URL} from "./constants";

const infoContainerStyle = "ml-28 w-1/2";
const infoAboutStyle = "pt-2.5 text-sm";
const infoLinkStyle = "no-underline text-teal-300";

export default function Programming(){
    return(
        <div className={infoContainerStyle}>
            <h1>Programming</h1>
            <hr/>
            <p className={infoAboutStyle}>
                I am a programming hobbyist with large interests in Python and Aviation. I love learning and have played
                with a handful of languages, but Python has always been my favorite.
            </p>
            <p className={infoAboutStyle}>
                Most of my recent experience in Python has been with backend web development and leading various
                projects. Many of my passion projects involve combining discord bots with backend web services and APIs.
                My favorite stack tends to be Docker + Django + REST, however I have also enjoyed playing around with
                FastAPI as well as GraphQL.
            </p>
            <h3>Most of my public projects can be viewed on my
                <a className={infoLinkStyle} href={GITHUB_URL} target="_blank" rel="noopener noreferrer"> Github</a>
            </h3>
        </div>
    )
}