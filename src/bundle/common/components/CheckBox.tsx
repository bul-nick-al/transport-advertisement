import * as React from 'react';
import styled from 'styled-components';

const Icon = styled.svg`
    fill: none;
    stroke: white;
    stroke-width: 2px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
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

interface StyledCheckboxProps {
    checked: boolean;
}

const StyledCheckbox = styled.div<StyledCheckboxProps>`
    display: inline-block;
    width: 30px;
    height: 30px;
    background: ${props => (props.checked ? '#5baa53' : '#f0f3f6')};
    border-radius: 50%;
    transition: all 150ms;
`;

const CheckboxContainer = styled.div`
    display: inline-block;
    vertical-align: middle;
`;

export interface CheckBoxProps {}

export interface CheckBoxState {}

class CheckBox extends React.Component<CheckBoxProps, CheckBoxState> {
    state = { checked: false };

    handleCheckboxChange = event =>
        this.setState({ checked: event.target.checked });

    render() {
        return (
            <CheckboxContainer>
                <HiddenCheckbox
                    checked={this.state.checked}
                    onChange={this.handleCheckboxChange}
                />
                <StyledCheckbox checked={this.state.checked}>
                    {this.state.checked ? (
                        <Icon viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12" />
                        </Icon>
                    ) : (
                        <Icon viewBox="0 0 24 24">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </Icon>
                    )}
                </StyledCheckbox>
            </CheckboxContainer>
        );
    }
}

export default CheckBox;
