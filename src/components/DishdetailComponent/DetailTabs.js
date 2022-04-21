
function Tab({handleDishDetailBtn}){
    return(
        <div className="dish-details-btn-group text-center row">
            <div className="col col-6 active dish-details-description" onClick={handleDishDetailBtn}>Description</div>
            <div className="col col-6 dish-details-comments" onClick={handleDishDetailBtn}>Comments</div>
        </div>
    )
}
export default Tab;