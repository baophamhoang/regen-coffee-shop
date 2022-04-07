import React from 'react';
import { useSelector} from 'react-redux';
import { commentsSelector } from '../../redux/selectors'
import CommentPages from './CommentPages';
import CommentSection from './CommentSection';
import { useState } from 'react';
import {  Fade, Stagger } from 'react-animation-components'

function Comments({ CommentForm, handleCommentBtnClick, dishId, maxCmtsPerPage=5}){
    const allCmts = useSelector(commentsSelector);
    const cmts = allCmts.comments.filter(cmt=> cmt.dishId === parseInt(dishId));
    const [cmtPageNum, setCmtPageNum] = useState(0);
    const getCmtPageNumbers = (len, maxCmtsPerPage) => {
        const numberOfPages = Math.ceil(len/maxCmtsPerPage);
        return Array.from({length:numberOfPages}, (_,index) => index+1);
    }
    
    const handlePagesBtn = (e) => {
        setCmtPageNum(e);
    }
    
    const arrPageNumbers = getCmtPageNumbers(cmts.length, maxCmtsPerPage);
    
    let cmtToShow=[];
    if (cmtPageNum===0 || cmtPageNum===arrPageNumbers.length){
        const amountCmtsToShow = cmts.length%maxCmtsPerPage;
        if (amountCmtsToShow===0){
            cmtToShow = [...cmts].splice(cmts.length-maxCmtsPerPage-1,maxCmtsPerPage)
        }
        else {
            cmtToShow = [...cmts].splice(cmts.length-amountCmtsToShow-1,amountCmtsToShow)
        }
    }
    else{
        cmtToShow = [...cmts].splice(maxCmtsPerPage*(cmtPageNum-1),maxCmtsPerPage);
    }
    console.log(cmtToShow);


    return (
        <Stagger in>
            <ul className="list-unstyled mb-auto" >
                <CommentSection cmts={cmtToShow}/>
            </ul>
            <CommentPages 
                arrPageNumbers={arrPageNumbers} 
                onCmtPageNum={cmtPageNum}
                handlePagesBtn={handlePagesBtn}
            />
            <CommentForm onClick={handleCommentBtnClick} />
        </Stagger>
                 
    )
}
export default Comments;