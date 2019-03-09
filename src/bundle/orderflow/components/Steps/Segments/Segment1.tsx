import * as React from 'react';
import MenuWithFilters from '../../../../common/components/MenuWithFilters';

const MockedRegions = [
    'Северный',
    'Восточный',
    'Западный',
    'Южный',
    'Октябрьский',
    'Молодежный',
];

const Segment1 = () => {
    return (
        <div>
            <MenuWithFilters regions={MockedRegions}/>
        </div>
    );
};

export default Segment1;
