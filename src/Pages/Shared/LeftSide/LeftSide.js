
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const LeftSide = () => {
const [courseName, setCourseName]= useState([]);

useEffect(()=>{
    fetch('http://localhost:5000/course-details')
    .then( res=> res.json())
    .then(data => setCourseName(data));
},[])

    return (
        <div>
            <h2>Course Name: {courseName.length}</h2>
            {
                courseName.map(course=><li key={course._id}><Link>{course.name}</Link></li>)
            }
        </div>
    );
};

export default LeftSide;