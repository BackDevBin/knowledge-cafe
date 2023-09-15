import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';
import Question from '../Question/Question';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Blogs = () => {

    let index = 0;

    const [blogs, setBlogs] = useState([]);
    const [titles, setTitles] = useState([]);
    const [sum, setSum] = useState(0);


    // Data load

    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


//  Bookmark listener part

    const bookHandeler = (title) => {

        if (titles.includes(title)) {

            toast.warn('This Blog Already Exist !', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });

        } else {
            const newtitles = [...titles, title];
            setTitles(newtitles);
        }
    }


    // Time Count listener part

    const timeHandeler = (time) => {
        setSum(sum + time);
    }



    return (
        <div className='blogs-container'>
            <div>
                {
                    blogs.map(blog => <Blog
                        blog={blog}
                        key={blog.id}
                        bookHandeler={bookHandeler}
                        timeHandeler={timeHandeler}
                    ></Blog>)
                }
                <Question></Question>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>


            <div >
                <div className='freeze'>

                    <p className='time-display'>Spent time on read : {sum} min</p>

                    <div className='bookmarked-container'>

                        <p className='author'>Bookmarked Blogs : 0{titles.length}</p>
                        {

                            titles.map(title => {
                                return <Bookmark title={titles}
                                    i={index++}
                                ></Bookmark>
                            })
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;