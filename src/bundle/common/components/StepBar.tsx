import * as React from 'react';
import styled from 'styled-components';
import { ProceedButton } from './Buttons';

const Base = styled.div`
    background-color: white;
    height: 70px;
    width: 100%;
`;

const ProceedButtonWrapper = styled.div`
    position: relative;
    float: right;
    right: 20px;
`;
const StepBar = () => {
    return (
        <Base>
            <ProceedButtonWrapper>
                <ProceedButton>Далее ➜</ProceedButton>
            </ProceedButtonWrapper>
        </Base>
    );
};
export default StepBar;
