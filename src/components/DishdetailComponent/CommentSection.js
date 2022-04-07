import {  Fade, Stagger } from 'react-animation-components'
import React from 'react';
function CommentSection({cmts}){
    return(
        
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
    )
}

export default CommentSection;