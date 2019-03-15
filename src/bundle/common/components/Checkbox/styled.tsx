import styled from 'styled-components';
import { CheckBoxProps } from './index';

export const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
    border: 0;
    clip: rect(0 0 0 0);
    clippath: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

export const StyledCheckbox = styled.div<CheckBoxProps>`
    display: inline-block;
    width: 30px;
    height: 30px;
    background: ${props => (props.checked ? '#5baa53' : '#f0f3f6')};
    border-radius: 50%;
    transition: all 150ms;
`;

export const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;
