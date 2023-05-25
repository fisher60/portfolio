export default function CarouselCard(props) {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                <a href={props.link} className="btn btn-outline" rel="noreferrer" target="_blank">Github</a>
                </div>
            </div>
        </div>
    )
}