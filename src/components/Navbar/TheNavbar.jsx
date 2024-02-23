import React, { useState } from 'react';
import logo from '../../assets/img/logo.jpg';
import { Link, NavLink } from 'react-router-dom';

const TheNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className='bg-lemonWhite md:flex md:items-center md:justify-between py-2 px-5 md:px-20 text-sm md:text-md lg:text-lg font-custom2'>
        <div className='flex items-center justify-between'>
          <div className='mb-2 md:mb-0'>
            <Link to={'/'}>
              <img src={logo} alt='little-lemon-logo' className='h-10 lg:h-20' />
            </Link>
          </div>
          <div className='md:flex-grow'>
            <button
              className='md:hidden px-4 py-2 border rounded text-lemonBlack border-lemonBlack'
              onClick={toggleMenu}
            >
              {isOpen ? 'Close' : 'Menu'}
            </button>
          </div>
        </div>

        <div>
          <ul className={`flex flex-col md:flex-row gap-3 ${isOpen ? 'flex' : 'hidden md:flex'}`}>
            <NavLink to={'/'} className="hover:bg-lemonYellow py-2 px-3 duration-500 rounded">
              Home
            </NavLink>
            <NavLink to={'/about'} className="hover:bg-lemonYellow py-2 px-3 duration-500 rounded">
              About
            </NavLink>
            <NavLink to={'/reserve'} className="hover:bg-lemonYellow py-2 px-3 duration-500 rounded">
              Reserve Table
            </NavLink>
            <NavLink to={'/contact'} className="hover:bg-lemonYellow py-2 px-3 duration-500 rounded">
              Contact
            </NavLink>
            <NavLink to={'/login'} className="hover:bg-lemonYellow py-2 px-3 duration-500 rounded">
              Login
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TheNavbar;
