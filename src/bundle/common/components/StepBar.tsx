import * as React from 'react';
import styled from 'styled-components';
import { ProceedButton } from './Buttons';
import StepLineContainer from './StepLine/StepLineContainer';

const Base = styled.div`
    background-color: white;
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SpaceBetween = styled.div`
    flex-grow: 100;
`;

const City = styled.div`
    font-size: 24px;
    color: black;
    margin: 20px;
    flex-grow: 1;
`;

const ProceedButtonWrapper = styled.div`
    flex-grow: 1;
`;

const Steps = ['one', 'two', 'three'];
const activeStep = 0;
const StepBar = () => {
    return (
        <Base>
            <City>Город: Хабаровск</City>
            <StepLineContainer steps={Steps} activeStep={activeStep}/>
            <SpaceBetween />
            <ProceedButtonWrapper>
                <ProceedButton>Далее ➜</ProceedButton>
            </ProceedButtonWrapper>
        </Base>
    );
};
export default StepBar;
