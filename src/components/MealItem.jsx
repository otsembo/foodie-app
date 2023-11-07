
function MealItem(props){
    return(
        <div className="card">
            <img src={props.imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.mealName}</h5>
                <p className="card-text">{props.mealDesc}</p>
            </div>
        </div>
    )
}

export default MealItem;
