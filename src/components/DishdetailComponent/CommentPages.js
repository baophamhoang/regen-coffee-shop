
function CommentPages({arrPageNumbers, onCmtPageNum, handlePagesBtn} ){
    if (onCmtPageNum===0){onCmtPageNum= arrPageNumbers[arrPageNumbers.length-1]}
    return (
        <ul className="cmt-page-numbers">
        {arrPageNumbers.map( num => 
            <li className={(num===onCmtPageNum)?'page-btn active':'page-btn'} onClick={()=>handlePagesBtn(num)}>{num}
                {/* <button type="submit" onClick={handlePagesBtn}></button> */}
            {/* <Link to={`/menu/${dishId}?page=${num}`}>{num} </Link> */}
            </li>)}
        </ul>
    )
}

export default CommentPages;