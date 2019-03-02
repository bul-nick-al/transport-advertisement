import * as React from 'react';
import styled from 'styled-components';

import { ChooseTilesContainer } from '../../../orderflow/components/ChooseTilesContainer';
import StepBar from '../../../common/components/StepBar';
import { BreadCrumbsContainer } from '../BreadCrumbs';

const Body = styled.div`
    height: 100%;
`;

const Step1 = props => {
    return (
        <Body>
            <StepBar onClickNext={() => props.sendStateEvent('next')} />
            <BreadCrumbsContainer />
            <ChooseTilesContainer />
        </Body>
    );
};
export default Step1;
