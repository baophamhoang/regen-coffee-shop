import React from 'react';
import CommentPages from './CommentPages';
import CommentSection from './CommentSection';
import { useState } from 'react';

function Comments({cmts, CommentForm, handleCommentBtnClick, dishId, maxCmtsPerPage=4}){
    
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
            cmtToShow = [...cmts].splice(cmts.length-maxCmtsPerPage,maxCmtsPerPage)
        }
        else {
            cmtToShow = [...cmts].splice(cmts.length-amountCmtsToShow,amountCmtsToShow)
        }
    }
    else{
        cmtToShow = [...cmts].splice(maxCmtsPerPage*(cmtPageNum-1),maxCmtsPerPage);
    }



    return (
        <React.Fragment>
            <ul className="list-unstyled " >
                <CommentSection cmts={cmtToShow}/>
            </ul>
            <CommentPages 
                arrPageNumbers={arrPageNumbers} 
                onCmtPageNum={cmtPageNum}
                handlePagesBtn={handlePagesBtn}
            />
            <CommentForm onClick={handleCommentBtnClick} />
        </React.Fragment>      
    )
}
export default Comments;