import React from 'react';

import './Logo.css';
import logo from '../../images/f-img.jpeg';

const Logo = ({type}) => {
    if (type === "grade") {
        return (
            <div className="logo">
                    <img src={logo} alt="F-"/>
                    <h1>Calculator | Grades</h1>
            </div>
        )
    } else {
        return (
            <div className="logo">
                    <img src={logo} alt="F-"/>
                    <h1>Calculator | GPA</h1>
            </div>
        )
    }
}

export default Logo;