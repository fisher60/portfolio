import {GITHUB_URL} from "./constants";
import "./info.css";

export default function Programming(){
    return(
        <div className="info-container">
            <h1 className="info-title">Programming</h1>
            <hr/>
            <p className="info-about">
                I am a programming hobbyist with large interests in Python and Aviation. I love learning and have played
                with a handful of languages, but Python has always been my favorite.
            </p>
            <p className="info-about">
                Most of my recent experience in Python has been with backend web development and leading various
                projects. Many of my passion projects involve combining discord bots with backend web services and APIs.
                My favorite stack tends to be Docker + Django + REST, however I have also enjoyed playing around with
                FastAPI as well as GraphQL.
            </p>
            <h3>Most of my public projects can be viewed on my
                <a className="info-link" href={GITHUB_URL} target="_blank" rel="noopener noreferrer"> Github</a>
            </h3>
        </div>
    )
}