import React from 'react';
import './Course.css';

const Course = (props) => {
    return (
        <div className="main-course">
            <div className="img">
                <img src={props.image} alt=""/>
            </div>
            <div className="course-info">
                <h2>Title: {props.title}</h2>
                <p><small>{props.name}</small></p>
                <p>Price: {props.price}</p>
                <button>Enroll Now</button>
            </div>
        </div>
        
    );
};

export default Course;