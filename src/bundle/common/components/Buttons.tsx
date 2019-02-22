import * as React from 'react';
import styled from 'styled-components';

export const ProceedButton = props => {
    const Button = styled.button`
        background-color: #38b349;
        height: 36px;
        width: 98px;
        border-radius: 4px;
        border-color: #249533;
        color: white;
        font-size: 14px;
    `;
    return <Button {...props} />;
};
