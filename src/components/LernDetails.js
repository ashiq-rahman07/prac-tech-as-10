import React from 'react';
import { FaCheck } from "react-icons/fa";
const LernDetails = ({det}) => {
    return (
        <div className='flex items-center gap-2 bg-purple-200 py-2 px-4 rounded shadow-lg'>
            <div className='text-2xl '><FaCheck ></FaCheck></div>
            
            <p className='font-medium'>{det}</p>
        </div>
    );
};

export default LernDetails;