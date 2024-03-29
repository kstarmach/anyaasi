import { useRef } from 'react';
import Card from '../Card';
import { ChevronLeftButton, ChevronRightButton } from '../ui/Chevrons'
import { Title } from '../ui/Title';

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
        <div className="carousel flex flex-col gap-6">
            <div className='flex justify-between'>
                <Title text={title} />
                <div className='flex gap-4 items-center'>
                    <ChevronLeftButton onClickHandler={() => scroll("left")} />

                    <ChevronRightButton onClickHandler={() => scroll("right")} />
                </div>
            </div>

            {/* Image container */}
            <div className="images-container relative flex gap-10 overflow-hidden " ref={sliderRef}>
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
