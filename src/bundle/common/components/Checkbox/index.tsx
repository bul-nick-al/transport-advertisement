import * as React from 'react';

import { Icon, HiddenCheckbox, StyledCheckbox, CheckboxContainer } from './styled';

export interface CheckBoxProps {
    checked: boolean;
    onChange?: void;
}

class CheckBox extends React.Component<CheckBoxProps, {}> {
    state = { checked: false };

    handleCheckboxChange = event => {
        this.setState({ checked: event.target.checked });
    };

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
