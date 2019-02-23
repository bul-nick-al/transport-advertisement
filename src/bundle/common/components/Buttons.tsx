import * as React from 'react';
import styled from 'styled-components';

export const ProceedButton = props => {
    const Button = styled.button`
        background-color: #38b349;
        height: 36px;
        width: 98px;
        border-radius: 4px;
        border-color: #249533;
        border-width: 1px;
        color: white;
        font-size: 14px;
        cursor: pointer;
    `;
    return <Button {...props} />;
};

export const HeaderButton = props => {
    const Button = styled.button`
        background-color: #1166a5;
        height: 36px;
        width: 98px;
        color: white;
        border-radius: 4px;
        border-width: 0px;
        font-size: 14px;
        cursor: pointer;
    `;
    return <Button {...props} />;
};
