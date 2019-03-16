import * as React from 'react';
import styled from 'styled-components';
import { StepInterface } from './interfaces';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

interface StepElementProps {
    isActive: boolean;
    isClickable: boolean;
}

interface OrderElementProps {
    isActive: boolean;
}

const StepElement = styled.div<StepElementProps>`
    display: inline-block;
    color: ${props => (props.isActive ? 'black' : '#a6abb3')};
    margin-right: 20px;
    cursor: ${props => (props.isClickable ? 'pointer' : 'default')};
    transition: .3s ease-in-out;
`;

const Order = styled.div<OrderElementProps>`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-width: 1px;
  border-style: solid;
  margin-right: 10px;
  border-radius: 50%;
  text-align: center;
  color: ${props => (props.isActive ? 'white' : 'rbg(127, 143, 166)')};
  border-color: ${props => (props.isActive ? 'rgb(34, 130, 203)' : 'rgb(228, 230, 232)')};
  background: ${props => (props.isActive ? 'rgb(23, 146, 236)' : 'rgb(250, 251, 252)')};
`;

export const Step = (props: StepInterface) => {
    return (
        <StepElement
            isActive={props.isActive}
            isClickable={props.isClickable}
            onClick={() => props.onClick(props.order, props.isClickable)}
        >
            <Order isActive={props.isActive}>{props.order + 1}</Order> {props.name}
        </StepElement>
    );
};
