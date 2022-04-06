import React from 'react';
import {  Fade, Stagger } from 'react-animation-components';
import { useSelector} from 'react-redux';
import { commentsSelector } from '../../redux/selectors'
function Comments({ CommentForm, handleCommentBtnClick, dishId}){
    const allCmts = useSelector(commentsSelector);
    const cmts = allCmts.comments.filter(cmt=> cmt.dishId === parseInt(dishId));
    return (
        <React.Fragment>
            <Stagger in>
            {cmts.map((x, id)=>{
                return (
                    <Fade key={id} in>
                        <li key={id}>
                            <p>{x.comment}</p>
                            <p>--{x.author}, {new Intl.DateTimeFormat('en-us',{year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(x.date)))}</p>
                        </li>
                    </Fade>
                    )
            })}
                </Stagger>
                <CommentForm onClick={handleCommentBtnClick} />
        </React.Fragment>
                
    )
}
export default Comments;