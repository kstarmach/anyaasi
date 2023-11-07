import React, { useState } from 'react';
import Table from './Table';
import ProvidersTabs from './ProvidersTabs';

const DownloadSection = ({ title }) => {
    const [selectedProvider, setSelectedProvider] = useState('Erai-raws');

    return (
        <div className='mb-8'>
            <ProvidersTabs
                selectedProvider={selectedProvider}
                setSelectedProvider={setSelectedProvider}
            />
            <Table
                title={title}
                provider={selectedProvider}
            />
        </div>
    );
}

export default DownloadSection;

