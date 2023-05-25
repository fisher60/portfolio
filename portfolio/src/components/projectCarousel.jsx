import CarouselCard from "./carouselCard";

const cardsData = [
    {
        title: "This Portfolio",
        description: "Personal website build in Javascript with React and TailwindCSS",
        link: "https://github.com/fisher60/portfolio"
    },
    {
        title: "Django Fullstack Web App",
        description: "Fullstack website built with Django, GraphQL, and Postgres. Includes account logins via Discord OAuth.",
        link: "https://github.com/fisher60/Friendo_Site_Django"
    },
    {
        title: "Discord Bot",
        description: "Discord chat user interface for the Django-GraphQL backend. Built fully in Python",
        link: "https://github.com/fisher60/friendo-bot"
    },
    {
        title: "Identity Management Web App",
        description: "A REST API for helping authenticate a single user from multiple identity providers. Built with FastAPI.",
        link: "https://github.com/AbandonTech/abandonauth"
    }
]
export default function ProjectCarousel() {
    let carouselItems = cardsData.map((obj, i) => {
        return (
            <div id={"item" + i} key={i} className="carousel-item flex justify-center w-full">
                <CarouselCard {...obj} />
            </div>
        )
    }
)

let carouselButtons = [...Array(carouselItems.length).keys()].map((i) => <a href={"#item" + i} key={i} className="btn btn-xs">{i + 1}</a>)
    return (
        <div className="flex flex-col items-center mt-4">
            <h1 className="text-2xl">Some of my projects:</h1>
            <div className="carousel text-black w-full mt-4">
                {carouselItems}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                {carouselButtons}
            </div>
        </div>
    )
}