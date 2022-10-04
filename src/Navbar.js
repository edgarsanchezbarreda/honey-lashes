import React from 'react';

export const Navbar = () => {
    return (
        <div className='mx-10 mb-6 pt-6'>
            <div className='navbar'>
                <div className='navbar-start flex gap-6 text-black font-gothamLight'>
                    <a
                        href='#'
                        className='hover:text-pink-400 mr-4 transition ease-in-out delay-100 duration-200'
                    >
                        HONEY LASHES
                    </a>
                    <div className='hidden tablet:flex gap-6  md:visible'>
                        <a
                            href=''
                            className='text-xs text-gray-800 hover:text-pink-400 transition ease-in-out delay-100 duration-200'
                        >
                            EXAMPLES
                        </a>
                        <a
                            href=''
                            className='text-xs text-gray-800 hover:text-pink-400 transition ease-in-out delay-100 duration-200'
                        >
                            STYLES
                        </a>
                        <a
                            href=''
                            className='text-xs text-gray-800 hover:text-pink-400 transition ease-in-out delay-100 duration-200'
                        >
                            CONTACT
                        </a>
                    </div>
                </div>
                <div className='navbar-end'>
                    <div className='dropdown dropdown-end dropdown-hover group'>
                        {/* <a
                            tabIndex={0}
                            href='#'
                            className='flex items-center  justify-center text-black h-10 w-10 hover:text-pink-400 hover:scale-105 outline-none transition-all ease-in-out delay-100 duration-200'
                        >
                            <img src={require('./images/lashes.png')} alt='' />
                        </a> */}
                        <a
                            tabIndex={0}
                            href='#'
                            className='flex items-center justify-center text-black  rounded-full  h-12 w-12 group-hover:text-pink-400 group-hover:border group-hover:border-pink-400 transition-all ease-in-out delay-100 duration-200'
                        >
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='w-6 h-6'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 8h16M4 16h16'
                                />
                            </svg>
                        </a>
                        <ul
                            tabIndex={0}
                            className='dropdown-content menu bg-gradient-to-r from-white to-transparent p-2 shadow-sm rounded-box w-32'
                        >
                            <li>
                                <a
                                    href='#'
                                    alt='Examples Link'
                                    className='text-xs text-gray-800 hover:text-pink-400 transition ease-in-out delay-75 duration-200'
                                >
                                    EXAMPLES
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    alt='Styles Link'
                                    className='text-xs text-gray-800 hover:text-pink-400 transition ease-in-out delay-75 duration-200'
                                >
                                    STYLES
                                </a>
                            </li>
                            <li>
                                <a
                                    href='#'
                                    alt='Contact Link'
                                    className='text-xs text-gray-800 hover:text-pink-400 transition ease-in-out delay-75 duration-200'
                                >
                                    CONTACT
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
