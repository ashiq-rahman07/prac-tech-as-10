import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LeftSide from '../Pages/Shared/LeftSide/LeftSide';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='grid grid-cols-9 gap-3 w-10/12 m-auto mt-10'>
                <div className='lg:col-span-2 hidden lg:block'><LeftSide></LeftSide></div>
                <div className='col-span-9 lg:col-span-7'><Outlet></Outlet></div>
            </div>
            
        </div>
    );
};

export default Main;