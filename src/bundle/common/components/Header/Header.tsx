import * as React from 'react';

import logo from '../../../../assets/logo/logo.svg';
import styled from 'styled-components';
import { HeaderButton, HeaderButtonTrans } from '../Buttons';

const Base = styled.header`
    left: 0;
    top: 0;
    width: 100%;
    height: 70px;
    background-image: linear-gradient(to bottom, #00aeef, #1991eb);
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    position: absolute;
    top: 19px;
    left: 30px;
`;

const ButtonWrapper = styled.div``;

const Header = ({ openApp }) => {
    return (
        <Base>
            <Logo src={logo} onClick={() => openApp('defaultapp')} />
            <HeaderButtonTrans onClick={() => openApp('team3')}>
                Реклама на радио
            </HeaderButtonTrans>
            <HeaderButton onClick={() => openApp('transport/transportadvapp')}>
                Реклама на транспорте
            </HeaderButton>
            <HeaderButtonTrans onClick={() => openApp('elevators/elevators')}>
                Реклама в лифтах
            </HeaderButtonTrans>
        </Base>
    );
};

export default Header;
