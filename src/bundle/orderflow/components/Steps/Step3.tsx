import * as React from 'react';
import styled from 'styled-components';

import StepBar from '../../../common/components/StepBar';

const Body = styled.div`
    height: 100%;
`;

const Step3 = props => {
    return (
        <Body>
            <StepBar onClickBack={() => props.sendStateEvent('back')} />
            <div>Step3</div>
        </Body>
    );
};
export default Step3;
