import { useState, useRef, useEffect } from 'react';
import Card from '../Card';


const Carousel = ({ data, title, height, width, carouselType }) => {
    // We use the useRef hook to get a reference to the slider container
    const sliderRef = useRef(null);
    const scrollAmount = 320; // The amount to scroll when clicking the navigation buttons


    return (
        <div className="carousel  mx-auto ">
            <div className='flex mb-5 mr-20'>
                <p className='text-2xl font-semibold  flex-grow pl-20'>{title}</p>
                <div className='flex gap-4 items-center'>
                    <button
                        onClick={() => {
                            const container = sliderRef.current;
                            container.scrollLeft -= scrollAmount; // Scroll left by the specified amount
                        }}
                        className='bg-white color-black rounded-xl p-2 flex items-center '
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={() => {
                            const container = sliderRef.current;
                            container.scrollLeft += scrollAmount; // Scroll right by the specified amount
                        }}
                        className='bg-white color-black rounded-xl p-2 flex items-center'
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Image container */}
            <div className="images-container relative flex gap-10 overflow-hidden  " ref={sliderRef}>
                {data.map((entry, index) => {
                    let coverImage;

                    if (carouselType === "popular") {
                        coverImage = entry.media.coverImage.extraLarge;
                    } else if (carouselType === "recent") {
                        coverImage = entry.media.bannerImage;
                    }

                    return (
                        <Card
                            entry={entry}
                            key={`${entry.media.id}-${index}`}
                            height={height}
                            width={width}
                            coverImage={coverImage}
                        />
                    );
                })}
            </div>

        </div>

    );
};

export default Carousel;
