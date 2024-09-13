"use client"; // Indique que ce composant est un composant client

import React, { useState } from 'react';
import Image from 'next/image';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

// Exemple de données pour les slides
const slides = [
    { image: '/assets/images/ch3.jpg' },
    { image: '/assets/images/ch3.jpg' },
    { image: '/assets/images/ch3.jpg' },
];

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div id='gallery' className='max-w-[1200px] max-h[350] mx-auto '>
            <h1 className='text-2xl font-bold text-center p-4'>Gallery</h1>
            <div>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={
                            index === current
                                ? 'opacity-[1] ease-in duration-1000'
                                : 'opacity-0'
                        }
                    >
                        <div className='relative flex justify-center p-4'>
                            <FaArrowCircleLeft
                                onClick={prevSlide}
                                className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                                size={50}
                            />
                            {index === current && (
                                <Image
                                    src={slide.image}
                                    alt={`Slide ${index + 1}`}
                                    width={1150}
                                    height={400}
                                    objectFit='cover'
                                />
                            )}
                            <FaArrowCircleRight
                                onClick={nextSlide}
                                className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                                size={50}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
