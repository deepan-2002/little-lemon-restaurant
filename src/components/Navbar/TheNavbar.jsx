import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.jpg';

const TheNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className='bg-lemonWhite md:flex md:items-center md:justify-between py-2 px-5 md:px-20 text-sm md:text-md lg:text-lg font-custom2 transition-all'>
        <div className='flex items-center justify-between'>
          <div className='mb-2 md:mb-0'>
            <Link to={'/'}>
              <img src={logo} alt='little-lemon-logo' className='h-10 lg:h-20' />
            </Link>
          </div>
          <div className='md:flex-grow'>
            <button
              className='md:hidden'
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='2em'
                  height='2em'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeWidth={2}
                    d='M12 19V5m6 14V5M6 19V5'
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='2em'
                  height='2em'
                  viewBox='0 0 24 24'
                >
                  <path
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeWidth={2}
                    d='M5 6h14M5 12h14M5 18h14'
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>

        <div>
          <ul
            className={`flex flex-col md:flex-row gap-3 ${
              isOpen ? 'flex' : 'hidden md:flex'
            }`}
          >
            <NavLink
              to={'/'}
              className='hover:bg-lemonYellow py-2 px-3 duration-500 rounded'
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink
              to={'/about'}
              className='hover:bg-lemonYellow py-2 px-3 duration-500 rounded'
              onClick={closeMenu}
            >
              About
            </NavLink>
            <NavLink
              to={'/reserve'}
              className='hover:bg-lemonYellow py-2 px-3 duration-500 rounded'
              onClick={closeMenu}
            >
              Reserve Table
            </NavLink>
            <NavLink
              to={'/contact'}
              className='hover:bg-lemonYellow py-2 px-3 duration-500 rounded'
              onClick={closeMenu}
            >
              Contact
            </NavLink>
            <NavLink
              to={'/login'}
              className='hover:bg-lemonYellow py-2 px-3 duration-500 rounded'
              onClick={closeMenu}
            >
              Login
            </NavLink>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default TheNavbar;
