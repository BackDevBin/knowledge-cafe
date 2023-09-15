import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blog = (props) => {

    const { id, author, title, cover, time, date, pic } = props.blog;

    const bookHandeler = props.bookHandeler ;
    const timeHandeler = props.timeHandeler;

    return (
        <div className='blog-container'>
            <img src={cover} alt="" />

            <div className='info-container'>

            <div className='information'>
                <img src={pic} alt="" />
                <div>
                <h5 className='author'>{author}</h5>
                <p className='date'>{date}</p>
                </div>
            </div>

            <div className='information'>
                <p className='date'>{time} min read</p>
                <button onClick={()=>bookHandeler(title)}
                className='bookmark-btn'><FontAwesomeIcon icon={faBookmark} /></button>
            </div>

            </div>


            <h2 className='title'>{title}</h2>
            <p className='date'>#interview #programing #problem solving</p>
            <button onClick={()=>timeHandeler(time)}
            className='read'><u>Mark as read</u></button>
            
        </div>
    );
};

export default Blog;