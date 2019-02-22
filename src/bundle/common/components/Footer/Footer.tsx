import * as React from 'react';
import styled from 'styled-components';

const Logo = styled.img`
    position: absolute;
    top 32px;
    left: 30px;
`;

const Base = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 161px
    background-image: linear-gradient(to bottom, #00aeef , #1991eb);
    text-align: left;
`;

const Footer = () => (
    <Base>
        <Logo src={require('../../../../assets/logo/logo.svg')} alt={'logo'} />
    </Base>
);
export default Footer;
