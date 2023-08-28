import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimeListEntry from './AnimeListEntry';

const Carousel = ({ data }) => {
    const itemWidth = useRef(0); // Reference to store the width of a single item.
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);

    const movePrev = () => {
        if (currentIndex === (data.length - 1)) {
            setCurrentIndex(data.length - 6)
        } else {
            setCurrentIndex((prevState) => (prevState - 1 + data.length) % data.length);
        }
    };

    const moveNext = () => {
        if (currentIndex === (data.length - 5)) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex((prevState) => (prevState + 1) % data.length);
        }

    };

    useEffect(() => {
        if (carousel.current !== null) {
            itemWidth.current = carousel.current.scrollWidth / data.length;
        }
    }, [data]);


    useEffect(() => {
        if (carousel.current !== null) {
            const scrollPosition = (currentIndex + data.length) % data.length * itemWidth.current;
            carousel.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    }, [currentIndex, data]);


    return (
        <div className="carousel my-12 mx-auto ">
            <div className='flex mb-5 mr-20'>
                <p className='text-2xl font-semibold  flex-grow pl-40'>Recently Added</p>
                <div className='flex gap-4 '>
                    <button
                        onClick={movePrev}
                        className='bg-white color-black rounded-md p-1 flex items-center'
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-10"
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
                        onClick={moveNext}
                        className='bg-white color-black rounded-md p-1 flex items-center'
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-10"
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
            <div className="relative overflow-hidden ">
                <div
                    ref={carousel}
                    className="carousel-container relative flex gap-8 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0 px-40"
                >
                    {data.map((entry, index) => {
                        return (
                            <Link to={`/anime/${entry.media.id}`} key={entry.media.title.userPreferred}>
                                <AnimeListEntry entry={entry} />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
