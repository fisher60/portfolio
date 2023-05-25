export default function CarouselCard(props) {
    return (
        <div className="card text-white bg-slate-600 w-96 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                <a href={props.link} className="btn bg-transparent border-orange-500 hover:bg-orange-500" rel="noreferrer" target="_blank">Github</a>
                </div>
            </div>
        </div>
    )
}