import React, { useState } from 'react';
import Table from './Table';
import ProvidersTabs from './ProvidersTabs';

const DownloadSection = ({ title }) => {
 

    return (
        <div className='mb-8'>

            <Table
                title={title}
       
            />
        </div>
    );
}

export default DownloadSection;

