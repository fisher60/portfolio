let hobbies = [
    "Archery",
    "Guitar",
    "Scuba/Freediving",
    "Woodworking",
    "3D printing",
    "Motorcycling",
    "Arduino/Electronics",
    "Home Automation"
]

hobbies.sort();

export default function Personal(){
    let hobbyItems = hobbies.map((str, i) => <li key={i}>{str}</li>)
    return(
        <div className="pt-8 mx-8 md:px-20 md:pb-8 md:h-screen overflow-y-auto">
            <h1 className="text-4xl text-center md:text-left text-orange-500">Personal</h1>

            <hr className="mt-6 mb-6" />
            
            <p className="text-lg">
                Programming is one of my greatest passions. I often work on my personal projects or contribute
                to open source in my spare time. My favorite language is Python. I owe much of my knowledge and
                experience to Python and the Python community. As a result, I am actually an admin for a very large
                Python community--<a className="text-orange-500 underline" href="https://www.pythondiscord.com/" rel="noreferrer" target="_blank" >Python Discord</a>

                <br />
                <br />

                Aside from time spent in front of the computer, I am also an avid fan of the outdoors. I frequently
                enjoy going on walks and hiking where I get to spend quality time with my dog--Ella.
                I rescued Ella as a puppy and have loved training her as she grew up.

                <br />
                <br />

                I am often criticized for my vast expanse of hobbies. The hobby that takes up the largest percentage
                of my time is <span className="text-orange-500">learning new things</span>. Thanks to this, I have
                spent considerable amounts of time learning new hobbies while also refining the skills I have in
                my existing hobbies.

                <br />
                <br />
                Some of my many hobbies include:
            </p>
            <ul className="list-disc pl-12 mt-2">
                {hobbyItems}
            </ul>
        </div>
    )
}