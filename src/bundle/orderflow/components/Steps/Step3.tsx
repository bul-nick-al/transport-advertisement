import * as React from 'react';
import styled from 'styled-components';

import StepBar from '../../../common/components/StepBar';
import MenuWithFilters from '../../../common/components/MenuWithFilters';
import { AdPlacementTileContainer } from '../AdPlacementTile';

const Body = styled.div`
    height: 100%;
`;

const MainContainer = styled.div`
    display: inline-block;
`;

const data = [
    'Стандарт (27 м2)',
    'Вокруг (46,8 м2)',
    'Полоски (5 м2)',
    'Флажок (7,3 м2)',
    'Мобильная афиша (10 м2)',
    'Заднее стекло (1,8 м2)',
];

const Step3 = props => {
    return (
        <Body>
            <StepBar onClickBack={() => props.sendStateEvent('back')} />
            <MainContainer>
                <MenuWithFilters regions={data} />
                <AdPlacementTileContainer />
            </MainContainer>
        </Body>
    );
};
export default Step3;
