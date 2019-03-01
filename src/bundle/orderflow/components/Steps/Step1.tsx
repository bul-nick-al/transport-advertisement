import * as React from 'react';
import styled from 'styled-components';

import { ChooseTilesContainer } from '../../../orderflow/components/ChooseTilesContainer';
import StepBar from '../../../common/components/StepBar';

const Body = styled.div`
    height: 100%;
`;

const Step1 = props => {
    return (
        <Body>
            <StepBar
                onClickBack={() => props.sendStateEvent('back')}
                onClickNext={() => props.sendStateEvent('next')}
            />
            <ChooseTilesContainer />
        </Body>
    );
};
export default Step1;
