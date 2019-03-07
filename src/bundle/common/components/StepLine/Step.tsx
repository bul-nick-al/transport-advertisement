import * as React from 'react';
import styled from 'styled-components';
import { StepInterface } from './interfaces';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

interface StepElementProps {
    isActive: boolean;
}

const StepElement = styled.div<StepElementProps>`
    display: inline-block;
    color: ${props => (props.isActive ? 'black' : '#a6abb3')};
    margin-right: 20px;
`;

export const Step = (props: StepInterface) => {
    return (
        <StepElement
            isActive={props.isActive}
            onClick={() => props.onClick(props.order)}
        >
            {props.order + 1} {props.name}
        </StepElement>
    );
};
