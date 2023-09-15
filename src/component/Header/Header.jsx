import React from 'react';
import './Header.css'

const Header = () => {

    return (
        <nav >
            <h1>In<span>terVi</span>ew H<span>unt</span>er</h1>
            <div className='menu-container'>
                <div >
                    <a href="Course">Course</a>
                    <a href="Virtual Interview">Virtual Interview</a>
                    <a href="Free Blog">Free Blog</a>
                    <a href="Login">Login</a>
                </div>
                <div>
                <img src="https://i.ibb.co/hH8mQwZ/kindpng-6425473.png" alt="" />
                </div>
            </div>
        </nav>
    );
};

export default Header;