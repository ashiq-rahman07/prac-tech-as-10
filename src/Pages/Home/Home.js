import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../../components/Card';

const Home = () => {
    const allCourse = useLoaderData();
    return (
        <div>
            <h2>Course Home: {allCourse.length}</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    allCourse.map(course => <Card key={course._id} course={course}></Card>)
                }
            </div>
           
        </div>
    );
};

export default Home;