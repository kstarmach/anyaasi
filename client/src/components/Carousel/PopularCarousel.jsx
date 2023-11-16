import React from 'react';
import Carousel from '.';


function PopularCarousel({ animeLists }) {
  // Sort entries by progress in ascending order

  const sortedEntries = animeLists.flatMap(list => list.entries).sort((a, b) => b.progress - a.progress);

  return (
    <>
      <Carousel
        data={sortedEntries}
        title={"Popular"}
        height={400}
        width={300}
        carouselType="popular"
      />
    </>
  );
}

export default PopularCarousel;
