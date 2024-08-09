import { Suspense, useState } from 'react';
import { useParams } from "react-router-dom";
import DescriptionSection from './DescriptionSection';
import Table from './Table';
import { BackButton } from '../ui/Buttons';
import { DescriptionSkeleton, TableSkeleton } from '../ui/skeletons';
import ProvidersTabs from './ProvidersTabs';

const AnimeDetails = () => {
    const { animeId } = useParams();
    const [title, setTitle] = useState([]); // State to hold the title
    const [provider, setProvider] = useState('Erai-raws');

    const handleTitleReceived = (receivedTitle) => {
        setTitle(receivedTitle);
    };

    return (
        <div className="flex flex-col gap-8">
            <BackButton />
            <Suspense fallback={<DescriptionSkeleton />} >
                <DescriptionSection
                    animeId={animeId}
                    onTitleReceived={handleTitleReceived}
                />
            </Suspense>

            <ProvidersTabs
                setProvider={setProvider}
                provider={provider}
            />

            <Suspense fallback={<TableSkeleton />} >
                <Table
                    title={title}
                    provider={provider}
                />
            </Suspense>
        </div>
    );
}

export default AnimeDetails;
