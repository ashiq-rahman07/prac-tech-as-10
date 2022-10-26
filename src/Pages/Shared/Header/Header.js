import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar  bg-purple-200 opacity-80 px-6">
            <div className="navbar-start">
                <div className="dropdown z-50">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-96">
                        <li><a>Item 1</a></li>
                      
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            {/* navbar end */}
          
                <div className="navbar-end hidden  lg:flex">
                    <ul className="menu menu-horizontal p-0  -ml-20">
                        <li className='text-gray-900' ><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='/'>Home</Link></li>
                    <Link to='/login'><button className="btn btn-sm mt-2 btn-outline btn-primary mr-4">Sign In</button></Link>
                    <Link to='/register'><button className="btn btn-sm mt-2 btn-outline btn-primary">Sign UP</button></Link>
                   
                    

                    </ul>
                </div>
                
                  

               
          
           
        </div>
    );
};

export default Header;