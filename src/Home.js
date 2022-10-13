import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Info } from './Info';

export const Home = () => {
    return (
        <div className='h-full bg-gradient-to-tl from-white to-pink-100'>
            <Navbar />
            <Hero />
            <Info />
        </div>
    );
};
