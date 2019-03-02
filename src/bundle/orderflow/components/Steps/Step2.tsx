import * as React from 'react';
import styled from 'styled-components';

import StepBar from '../../../common/components/StepBar';

const Body = styled.div`
    height: 100%;
`;

const Step2 = props => {
    return (
        <Body>
            <StepBar
                onClickBack={() => props.sendStateEvent('back')}
                onClickNext={() => props.sendStateEvent('next')}
            />
            <div>Step2</div>
        </Body>
    );
};
export default Step2;
