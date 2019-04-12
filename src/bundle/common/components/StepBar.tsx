import * as React from 'react';
import styled from 'styled-components';
import { ProceedButton } from './Buttons';
import StepLineContainer from './StepLine/StepLineContainer';

interface StepBarProps {
    onClickNext?: () => void;
    onClickBack?: () => void;
    activeStep: number;
}

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

const Steps = ['Первый шаг', 'Второй шаг', 'Третий шаг'];
const StepBar = (props: StepBarProps) => {
    return (
        <Base>
            <City>Город: Хабаровск</City>
            {props.onClickBack && (
                <ProceedButtonWrapper>
                    <ProceedButton onClick={props.onClickBack}>
                        ← Назад
                    </ProceedButton>
                </ProceedButtonWrapper>
            )}
            <StepLineContainer steps={Steps} activeStep={props.activeStep} />
            <SpaceBetween />
            {props.onClickNext && (
                <ProceedButtonWrapper>
                    <ProceedButton onClick={props.onClickNext}>
                        Далее →
                    </ProceedButton>
                </ProceedButtonWrapper>
            )}
        </Base>
    );
};
export default StepBar;
