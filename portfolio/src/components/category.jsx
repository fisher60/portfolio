import "./category.css";

export default function Category(props){
    return(
        <div className="category-container">
            <div className="category">
                <h3 className="category-title">{ props.title }</h3>
            </div>
        </div>
    )

}