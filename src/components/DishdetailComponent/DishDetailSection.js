import Comments from "./CommentComponent";
import Rating from "./RatingPoints";
import Tab from "./DetailTabs";
import { useSelector } from "react-redux";
import { commentsSelector } from "../../redux/selectors";

function DishDetailSection({selectedDish, selectedDishId, CommentForm, handleCommentBtnClick}){
    const allCmts = useSelector(commentsSelector);
    const cmts = allCmts.comments.filter(cmt=> cmt.dishId === parseInt(selectedDishId));
    const ratings = (cmts.reduce( (total, cmt)=> total+cmt.rating, 0))/cmts.length
    const handleDishDetailBtn = (e) => {
        if (!e.target.classList.contains('active')){
            document.querySelectorAll('.dish-details-btn-group div').forEach(m=>m.classList.remove('active'));
            e.target.classList.add('active');
            const show = document.querySelector('.tab-detail.show');
            show.classList.remove('show');
            document.querySelector('.tab-detail.hide').classList.add('show');
            show.classList.add('hide');
            document.querySelector('.tab-detail.hide.show').classList.remove('hide');
        }
    }

    return(
        <div className="tab-detail-section col-md-6 col-12">
            <div className="mb-3">
                <h2 className="text-center">{selectedDish.name}</h2>
                <Rating  ratings={ratings} numofCmts={cmts.length}/>
                <Tab handleDishDetailBtn={handleDishDetailBtn}/>
            </div>                
            <div className="tab-detail tab-detail-description show">
                <h4>Description</h4>
                <p>{selectedDish.description}</p>
            </div>
            <div className="tab-detail tab-detail-comment hide ">
                <h4>Comments</h4>                    
                <Comments cmts={cmts} handleCommentBtnClick={handleCommentBtnClick} CommentForm={CommentForm} dishId={selectedDishId}  />
            </div>
        </div>
    )
}

export default DishDetailSection;