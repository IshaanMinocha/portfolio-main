import React from 'react';
import Type from "./Type";

function Hero() {
    return (
        <>
            <div className="bg-[url('ishu-effect-nobg-70.png')] h-[75vh] bg-no-repeat bg-fixed bg-center bg-[length:75vh] bg-secondary">
                <h1 className='text-5xl relative right-[19rem] text-center pt-24 font-bold font-thinspaced text-dark tracking-wider'>
                Hi! you have reached..
                </h1>
                <h2 className='text-7xl text-center my-5 font-boldhead text-white tracking-wider'>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-green-600">Ishaan Minocha</span>'s Portfolio Website
                </h2>
                <p className='text-5xl my-5 pt-10 px-40 flex justify-center font-bold font-thinspaced text-dark tracking-wider'>
                    <span className='mr-2 text-3xl pt-2 font-thinspaced font-normal tracking-widest'>And I'm </span>  <Type/>                    
                </p>
                <div className="flex space-x-4 justify-center">
                    <a href="#portfolio" className="text-white border-solid rounded-full border-2 border-dark font-semibold m-2 p-3 px-10 text-lg duration-200 hover:bg-dark">View my Projects</a>
                </div>
            </div>
            <div className="container mx-auto mt-8 text-center scroll-smooth">
                <a href="#about-section">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto my-10 animate-bounce">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                    </svg>
                </a>
            </div>
        </>
    )
}

export default Hero