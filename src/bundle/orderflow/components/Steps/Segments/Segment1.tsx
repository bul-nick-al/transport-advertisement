import * as React from 'react';
import MenuWithFilters from '../../../../common/components/MenuWithFilters';
import styled from 'styled-components';
import { YMaps, Map } from 'react-yandex-maps';

const MockedRegions = [
    'Северный',
    'Восточный',
    'Западный',
    'Южный',
    'Октябрьский',
    'Молодежный',
];

const Menu = styled.div`
    overflow: auto;
`;

const Base = styled.div`
    display: flex;
    height: 100%;
`;

const MapWrapper = styled.div`
    padding: 6px 6px;
    height: 100%;
    flex-grow: 1;
    order: 1;
`;

const Segment1 = () => {
    return (
        <Base>
            <Menu>
                <MenuWithFilters regions={MockedRegions} />
            </Menu>
            <YMaps>
                <MapWrapper>
                    <Map height={500} width={950} defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
                </MapWrapper>
            </YMaps>
        </Base>
    );
};

export default Segment1;
