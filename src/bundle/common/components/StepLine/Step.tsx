import * as React from 'react';
import * as styled from 'styled-components';
import { StepInterface } from './interfaces';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

const StepElement = styled.div`
  display: inline-block;
  color: ${props => (props.isActive ? 'black' : '#a6abb3')};
  margin-right: 20px;
`;

export const Step = (props: StepInterface) => {
    return (
        <StepElement isActive={props.isActive}  onClick={() => props.onClick(props.order)}>
            {props.order + 1} {props.name}
        </StepElement>
    );
};
