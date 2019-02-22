import * as React from 'react';

import styled from 'styled-components';

const Base = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 70px
    background-image: linear-gradient(to bottom, #00aeef , #1991eb);
    color: white;
    text-align: center;
`;

const Logo = styled.img`
    position: absolute;
    top 19px;
    left: 30px;
`;

const Header = () => (
    <Base>
        <Logo src={require('../../../../assets/logo/logo.svg')} alt={'logo'} />
    </Base>
);

export default Header;
