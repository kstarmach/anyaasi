import { Suspense, useState } from 'react';
import { useParams } from "react-router-dom";
import DescriptionSection from './DescriptionSection';
import Table from './Table';
import { BackButton } from '../ui/Buttons';
import { DescriptionSkeleton, TableSkeleton } from '../ui/skeletons';

const AnimeDetails = () => {
    const { animeId } = useParams();
    const [title, setTitle] = useState(null); // State to hold the title

    // Function to set the title received from DescriptionSection
    const handleTitleReceived = (receivedTitle) => {
        setTitle(receivedTitle);
    };

    return (
        <div className="flex flex-col gap-8 mb-40">
            <BackButton />
            <Suspense fallback={<DescriptionSkeleton />} >
                <DescriptionSection
                    animeId={animeId}
                    onTitleReceived={handleTitleReceived}
                />
            </Suspense>

            <Suspense fallback={<TableSkeleton />} >
                <Table
                    title={title}
                />
            </Suspense>
        </div>
    );
}

export default AnimeDetails;
