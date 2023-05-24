import {GITHUB_URL} from "./constants";

let responsibilties = [
    "Code Reviews",
    "Configuring Airflow DAGs",
    "Maintaining Documentation",
    "Keeping Stakeholders Up-To-Date",
    "On-Call",
    "Providing Metrics To Business Teams",
    "Large Production Rollouts"
]

responsibilties.sort();

export default function Professional(){
    let responsibilityItems = responsibilties.map((str, i) => <li key={i}>{str}</li>)
    return(
        <div className="pt-8 mx-8 md:px-20 md:pb-8 md:h-screen overflow-y-auto">
            <h1 className="text-4xl text-center md:text-left text-orange-500 mt-0">Professional</h1>

            <hr className="mt-6 mb-6" />
            
            <p className="text-lg mt-4">
                I am a professional<span className="text-orange-500"> Software Developer</span> with most of my 
                knowledge being in backend web developement with Python. I have professional experience with automated
                testing using both Python and Java as well as general Python experience from my position as a
                Backend Integration Engineer.
            </p>

            <h1 className="text-2xl text-center md:text-left text-orange-500 mt-4">Systems Test Engineer</h1>
            <p className="mt-2">
                In my role as a
                <span className="text-orange-500"> Systems Test Engineer</span> I used a variety of tools and
                frameworks to test REST APIs as well as frontend websites. My job required me to do both manual
                and automated testing. In addition to testing web applications, I was also tasked with manually
                testing avionics and software on other, similar devices. Most automated tests were either
                <span className="text-orange-500"> black-box</span> tests for new features or 
                <span className="text-orange-500"> regression</span> tests to ensure no exisitng features are broken.
            </p>

            <h1 className="text-2xl text-center md:text-left text-orange-500 mt-4">Backend Integration Engineer</h1>
            <p className="mt-2">
                In my role as a
                <span className="text-orange-500"> Backend Integration Engineer</span> I primarly 
                used <a className="text-orange-500 underline" href="https://github.com/google/starlark-go" rel="noreferrer" target="_blank" >Starlark-Go</a>
                --Google's Golang implementation of the bazel
                build language. My primary responsibilty was to extract, transform, and load data from third-party 
                merchants. Merchant data came in a range of formats and often sat somewhere between "structured" and
                "nearly random." My job was to ensure that data provided by the merchant fit into our existing API. I
                also had to help plan future improvements to our API to support new API definitions that are useful
                or could be useful in the future for the company as a whole. The goal was always to extract as much 
                data as possible form the third-party while transforming as little as possible while still confining
                it to our API.

                <br />
                <br />

                Other essential responsibilties included:
                

            </p>
            <ul className="list-disc pl-12 mt-2">
                {responsibilityItems}
            </ul>

            <p className="text-sm mt-4">Checkout my <a className="underline text-orange-500" href={GITHUB_URL} rel="noreferrer" target="_blank">Github</a> to see many of my personal projects</p>
        </div>
    )
}