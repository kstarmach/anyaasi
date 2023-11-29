import { useState, useRef, useEffect } from 'react';
import Card from '../Card';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid'

const Carousel = ({ data, title, height, width, carouselType }) => {
    // We use the useRef hook to get a reference to the slider container
    const sliderRef = useRef(null);
    const imageWidth = 300; // Width of one image
    const padding = 20; // Padding added to the images-container

    const scroll = (direction) => {
        const container = sliderRef.current;
        const maxScrollLeft =
            container.scrollWidth - container.clientWidth + padding * 2;

        if (direction === "left" && container.scrollLeft > 0) {
            container.scrollLeft -= imageWidth + padding;
        } else if (direction === "right" && container.scrollLeft < maxScrollLeft) {
            container.scrollLeft += imageWidth + padding;
        }
    };

    return (
        <div className="carousel  mx-auto ">
            <div className='flex mb-5 mr-20'>
                <p className='text-2xl font-semibold  flex-grow pl-20'>{title}</p>
                <div className='flex gap-4 items-center'>
                    <button
                        onClick={() => scroll("left")}
                        className='bg-white color-black rounded-xl p-2 flex items-center '
                    >
                        <ChevronLeftIcon className="h-5 w-5" />

                    </button>

                    <button
                        onClick={() => scroll("right")}
                        className='bg-white color-black rounded-xl p-2 flex items-center'
                    >
                        <ChevronRightIcon className="h-5 w-5" />

                    </button>
                </div>
            </div>

            {/* Image container */}
            <div className="images-container relative flex gap-10 overflow-hidden px-20" ref={sliderRef}>
                {data.map((entry, index) => {
                    let coverImage;

                    if (carouselType === "normal") {
                        coverImage = entry.coverImage.extraLarge;
                        // coverImage = entry.media.coverImage.extraLarge;
                    } else if (carouselType === "wide") {
                        //coverImage = entry.media.bannerImage;
                        coverImage = entry.bannerImage;
                    }

                    return (
                        <Card
                            entry={entry}
                            //key={`${entry.media.id}-${index}`}
                            key={`${entry.id}-${index}`}
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
