import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {

    let title = props.title;
    let i = props.i;
   
    
    return (
        <div>
            <p className='bookmark-title'>{title[i]}</p>
        
        </div>
    );
};

export default Bookmark;